'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number | number[];
  rootMargin?: string;
  once?: boolean;
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  threshold = 0.15,
  rootMargin = '0px 0px -15% 0px',
  once = true,
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for mobile screen
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    checkMobile();
    window.addEventListener('resize', checkMobile);
    mediaQuery.addEventListener('change', (e) => setPrefersReducedMotion(e.matches));

    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', (e) => setPrefersReducedMotion(e.matches));
    };
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Adjust threshold and margin for mobile
    const mobileThreshold = isMobile ? 0.1 : threshold;
    const mobileMargin = isMobile ? '0px 0px -20% 0px' : rootMargin;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0 && !prefersReducedMotion) {
              setTimeout(() => setIsVisible(true), delay);
            } else {
              setIsVisible(true);
            }
            if (once && node) observer.unobserve(node);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold: mobileThreshold, rootMargin: mobileMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [once, rootMargin, threshold, delay, isMobile, prefersReducedMotion]);

  const animationDuration = prefersReducedMotion ? '0.1s' : isMobile ? '0.5s' : '0.6s';
  const translateDistance = isMobile ? '20px' : '30px';

  const revealStyle: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px)' : `translateY(${translateDistance})`,
    transition: prefersReducedMotion 
      ? 'none' 
      : `opacity ${animationDuration} ease-out ${delay}ms, transform ${animationDuration} ease-out ${delay}ms`,
    willChange: 'opacity, transform',
  };

  return (
    <div ref={ref} style={revealStyle} className={className}>
      {children}
    </div>
  );
}
