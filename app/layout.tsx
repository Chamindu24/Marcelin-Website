import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marcelin Global Holdings ",
  description: "Innovation-driven technology and business solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020202] text-gray-100 min-h-screen flex flex-col`}
      >
        {/* Global Background - Fixed behind all content */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Animated gradient orbs */}
          <div className="absolute top-[50%] left-[15%] w-[300px] h-[50px] sm:w-[600px] sm:h-[100px] rounded-full bg-cyan-500/20 sm:bg-cyan-500/50 blur-[80px] sm:blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] rounded-full bg-cyan-600/10 sm:bg-cyan-600/20 blur-[80px] sm:blur-[130px] animate-float" />
          <div className="absolute top-[40%] right-[25%] w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] rounded-full bg-cyan-400/15 sm:bg-cyan-400/35 blur-[60px] sm:blur-[100px] animate-drift" />
          
          {/* Base gradient layers */}
          <div
            className="absolute inset-0 opacity-50 sm:opacity-100"
            style={{
              background:
                "radial-gradient(900px 600px at 20% 10%, rgba(34,211,238,0.35), transparent 60%), radial-gradient(1000px 700px at 80% 80%, rgba(99,102,241,0.22), transparent 65%), linear-gradient(180deg, rgba(6,6,8,0.6), rgba(2,2,2,0.98))",
            }}
          />
          



          
          {/* Vignette overlay */}
          <div className="absolute inset-0 shadow-[inset_0_0_220px_rgba(0,0,0,0.9)]" />
        </div>

        <Navbar />
        <main className="flex-grow relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
