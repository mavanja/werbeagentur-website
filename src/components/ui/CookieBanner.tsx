'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './Button';

const COOKIE_CONSENT_KEY = 'cookie-consent';

type ConsentValue = 'accepted' | 'rejected' | null;

export function CookieBanner() {
  const [consent, setConsent] = useState<ConsentValue | 'loading'>('loading');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check localStorage for existing consent
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY) as ConsentValue;
    setConsent(storedConsent);
    
    // Show banner with slight delay for animation
    if (!storedConsent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setIsVisible(false);
    // Delay state update for exit animation
    setTimeout(() => setConsent('accepted'), 300);
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected');
    setIsVisible(false);
    setTimeout(() => setConsent('rejected'), 300);
  };

  // Don't render if loading or consent already given
  if (consent === 'loading' || consent !== null) {
    return null;
  }

  return (
    <div 
      className={`
        fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6
        transition-all duration-300 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
      `}
      role="dialog"
      aria-label="Cookie-Einstellungen"
      aria-describedby="cookie-banner-description"
    >
      <div className="max-w-4xl mx-auto bg-primary rounded-2xl shadow-elevated p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              {/* Cookie Icon */}
              <svg 
                className="w-6 h-6 text-accent flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              <h2 className="font-heading text-h4 text-white">
                Wir verwenden Cookies
              </h2>
            </div>
            <p id="cookie-banner-description" className="text-body-sm text-neutral-300 leading-relaxed">
              Wir nutzen Cookies, um Ihnen die bestmögliche Nutzung unserer Website zu ermöglichen. 
              Weitere Informationen finden Sie in unserer{' '}
              <Link 
                href="/datenschutz#cookies" 
                className="text-accent hover:text-accent-400 underline transition-colors"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:flex-shrink-0">
            <Button 
              variant="secondary" 
              size="md" 
              onClick={handleAccept}
              className="w-full sm:w-auto"
            >
              Alle akzeptieren
            </Button>
            <button
              onClick={handleReject}
              className="
                px-5 py-2.5 rounded-lg
                border border-white/30 
                text-white font-medium text-body-sm
                hover:bg-white/10 
                transition-colors duration-300
                w-full sm:w-auto
                min-h-[44px]
              "
            >
              Nur notwendige
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
