import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ResponseData = {
  ok: boolean;
  message: string;
};

const getEnv = (key: string) => process.env[key] || '';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed.' });
  }

  const { name, email, phone, message } = req.body || {};

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ ok: false, message: 'All fields are required.' });
  }

  const host = getEnv('SMTP_HOST');
  const port = Number(getEnv('SMTP_PORT') || 587);
  const user = getEnv('SMTP_USER');
  const pass = getEnv('SMTP_PASS');
  const fromName = "Marcelin Holdings Support"; 

  if (!host || !user || !pass) {
    return res.status(500).json({
      ok: false,
      message: 'Email service is not configured.',
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const to = 'info@marcelinglobalholdings.com';

    await transporter.sendMail({
      // This sets the sender name to "Marcelin Holdings Support"
      from: `"${fromName}" <${user}>`, 
      to,
      replyTo: email,
      subject: `Strategic Request: ${name}`,
      text: `New Request from ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f7f9; padding: 40px; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e1e4e8; shadow: 0 4px 12px rgba(0,0,0,0.05);">
            
            <div style="background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%); padding: 40px 30px; text-align: center; border-bottom: 1px solid #94a3b8; border-top: 4px solid #06b6d4;">
            <h1 style="color: #0f172a; margin: 0; font-size: 22px; font-weight: 300; letter-spacing: 4px; text-transform: uppercase; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                Marcelin <span style="font-weight: 800; color: #06b6d4;">Holdings</span>
            </h1>
            <div style="margin: 15px auto 0; height: 1px; width: 40px; background-color: #94a3b8;"></div>
            <p style="color: #475569; margin: 10px 0 0 0; font-size: 10px; font-weight: bold; letter-spacing: 3px; text-transform: uppercase;">
                Strategic Request
            </p>
            </div>

            <div style="padding: 40px;">
              <p style="font-size: 16px; line-height: 1.6; color: #555;">You have received a new message through the global request desk.</p>
              
              <div style="margin-top: 30px; padding: 20px; background-color: #f8fafc; border-radius: 12px; border-left: 4px solid #06b6d4;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 100px;">Client</td>
                    <td style="padding: 8px 0; color: #111; font-weight: bold; font-size: 15px;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
                    <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #06b6d4; text-decoration: none; font-weight: bold;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</td>
                    <td style="padding: 8px 0; color: #111; font-weight: bold;">${phone}</td>
                  </tr>
                </table>
              </div>

              <div style="margin-top: 30px;">
                <h4 style="margin-bottom: 10px; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message Brief</h4>
                <p style="background-color: #ffffff; border: 1px solid #eee; padding: 20px; border-radius: 12px; font-style: italic; color: #444; line-height: 1.8;">
                  ${String(message).replace(/\n/g, '<br/>')}
                </p>
              </div>
            </div>

            <div style="padding: 20px; background-color: #fcfcfc; text-align: center; border-top: 1px solid #eee;">
              <p style="font-size: 11px; color: #aaa; margin: 0;">&copy; 2026 Marcelin Global Holdings • Victoria, Seychelles</p>
            </div>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ ok: true, message: 'Message sent.' });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: 'Failed to send message. Please try again later.',
    });
  }
}