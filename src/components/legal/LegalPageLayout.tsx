import { ReactNode } from 'react'
import { Header } from '@/components/layout'
import { Footer } from '@/components/layout'

type LegalPageLayoutProps = {
  title: string
  lastUpdated?: string
  children: ReactNode
}

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-primary pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <header className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              {title}
            </h1>
            {lastUpdated && (
              <p className="text-sm text-white/50">
                Letzte Aktualisierung: {lastUpdated}
              </p>
            )}
          </header>

          {/* Content */}
          <article className="prose prose-invert prose-lg max-w-none 
            prose-headings:font-heading prose-headings:text-white prose-headings:font-semibold
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-white/70 prose-p:leading-relaxed
            prose-li:text-white/70 prose-li:marker:text-accent
            prose-a:text-accent prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white prose-strong:font-semibold
          ">
            {children}
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
