'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

type CookieConsent = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  timestamp: number
}

const CONSENT_KEY = 'cookie-consent'

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    marketing: false,
    timestamp: 0,
  })

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) {
      // No consent given yet — show banner after short delay
      const timer = setTimeout(() => setShowBanner(true), 1000)
      return () => clearTimeout(timer)
    }
    // Consent already given
    try {
      const parsed = JSON.parse(stored) as CookieConsent
      setConsent(parsed)
    } catch {
      // Invalid stored consent — show banner
      setShowBanner(true)
    }
  }, [])

  const saveConsent = (newConsent: CookieConsent) => {
    const consentWithTimestamp = { ...newConsent, timestamp: Date.now() }
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consentWithTimestamp))
    setConsent(consentWithTimestamp)
    setShowBanner(false)
    setShowSettings(false)
  }

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
    })
  }

  const rejectAll = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
    })
  }

  const saveSelection = () => {
    saveConsent(consent)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6"
        >
          <div className="mx-auto max-w-4xl bg-primary-light/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
            {/* Main Banner Content */}
            {!showSettings ? (
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  {/* Text Content */}
                  <div className="flex-1">
                    <h2 className="text-lg font-heading font-semibold text-white mb-2">
                      🍪 Cookie-Einstellungen
                    </h2>
                    <p className="text-sm text-white/70 leading-relaxed">
                      Wir verwenden Cookies, um Ihnen die bestmoegliche Nutzung unserer 
                      Website zu ermoeglichen. Einige sind fuer den Betrieb notwendig, 
                      andere helfen uns, die Website zu verbessern.{' '}
                      <Link 
                        href="/datenschutz" 
                        className="text-accent hover:text-accent-light underline underline-offset-2"
                      >
                        Mehr erfahren
                      </Link>
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:items-center shrink-0">
                    <button
                      onClick={() => setShowSettings(true)}
                      className="px-4 py-2.5 text-sm font-medium text-white/80 hover:text-white border border-white/20 hover:border-white/40 rounded-lg transition-all duration-200"
                    >
                      Einstellungen
                    </button>
                    <button
                      onClick={rejectAll}
                      className="px-4 py-2.5 text-sm font-medium text-white/80 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-200"
                    >
                      Nur Notwendige
                    </button>
                    <button
                      onClick={acceptAll}
                      className="px-6 py-2.5 text-sm font-medium text-white bg-accent hover:bg-accent-light rounded-lg transition-all duration-200 shadow-lg shadow-accent/25"
                    >
                      Alle akzeptieren
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Settings Panel */
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-heading font-semibold text-white">
                    Cookie-Einstellungen
                  </h2>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="p-2 text-white/60 hover:text-white transition-colors"
                    aria-label="Zurueck"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Cookie Categories */}
                <div className="space-y-4 mb-6">
                  {/* Necessary */}
                  <div className="flex items-start justify-between p-4 bg-white/5 rounded-xl">
                    <div className="flex-1 pr-4">
                      <h3 className="text-sm font-medium text-white mb-1">
                        Notwendige Cookies
                      </h3>
                      <p className="text-xs text-white/60">
                        Diese Cookies sind fuer die Grundfunktionen der Website erforderlich 
                        und koennen nicht deaktiviert werden.
                      </p>
                    </div>
                    <div className="shrink-0 pt-1">
                      <div className="w-10 h-6 bg-accent/30 rounded-full flex items-center justify-end px-1 cursor-not-allowed">
                        <div className="w-4 h-4 bg-accent rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Analytics */}
                  <div className="flex items-start justify-between p-4 bg-white/5 rounded-xl">
                    <div className="flex-1 pr-4">
                      <h3 className="text-sm font-medium text-white mb-1">
                        Analyse-Cookies
                      </h3>
                      <p className="text-xs text-white/60">
                        Helfen uns zu verstehen, wie Besucher mit der Website interagieren, 
                        um sie zu verbessern.
                      </p>
                    </div>
                    <div className="shrink-0 pt-1">
                      <button
                        onClick={() => setConsent(prev => ({ ...prev, analytics: !prev.analytics }))}
                        className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors duration-200 ${
                          consent.analytics ? 'bg-accent/30 justify-end' : 'bg-white/10 justify-start'
                        }`}
                        role="switch"
                        aria-checked={consent.analytics}
                      >
                        <div className={`w-4 h-4 rounded-full transition-colors duration-200 ${
                          consent.analytics ? 'bg-accent' : 'bg-white/40'
                        }`} />
                      </button>
                    </div>
                  </div>

                  {/* Marketing */}
                  <div className="flex items-start justify-between p-4 bg-white/5 rounded-xl">
                    <div className="flex-1 pr-4">
                      <h3 className="text-sm font-medium text-white mb-1">
                        Marketing-Cookies
                      </h3>
                      <p className="text-xs text-white/60">
                        Werden verwendet, um Werbung relevanter fuer Sie zu gestalten und 
                        die Effektivitaet von Kampagnen zu messen.
                      </p>
                    </div>
                    <div className="shrink-0 pt-1">
                      <button
                        onClick={() => setConsent(prev => ({ ...prev, marketing: !prev.marketing }))}
                        className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors duration-200 ${
                          consent.marketing ? 'bg-accent/30 justify-end' : 'bg-white/10 justify-start'
                        }`}
                        role="switch"
                        aria-checked={consent.marketing}
                      >
                        <div className={`w-4 h-4 rounded-full transition-colors duration-200 ${
                          consent.marketing ? 'bg-accent' : 'bg-white/40'
                        }`} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Settings Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={rejectAll}
                    className="flex-1 px-4 py-2.5 text-sm font-medium text-white/80 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-200"
                  >
                    Alle ablehnen
                  </button>
                  <button
                    onClick={saveSelection}
                    className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-accent hover:bg-accent-light rounded-lg transition-all duration-200 shadow-lg shadow-accent/25"
                  >
                    Auswahl speichern
                  </button>
                </div>

                <p className="mt-4 text-xs text-white/40 text-center">
                  Weitere Informationen finden Sie in unserer{' '}
                  <Link href="/datenschutz" className="text-accent hover:underline">
                    Datenschutzerklaerung
                  </Link>
                </p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
