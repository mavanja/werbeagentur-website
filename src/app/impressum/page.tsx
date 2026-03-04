import { Metadata } from 'next'
import { LegalPageLayout } from '@/components/legal'

export const metadata: Metadata = {
  title: 'Impressum | Werbeagentur',
  description: 'Impressum und Anbieterinformationen der Werbeagentur.',
}

export default function ImpressumPage() {
  return (
    <LegalPageLayout title="Impressum" lastUpdated="04. Maerz 2026">
      <section>
        <h2>Angaben gemaess § 5 TMG</h2>
        <p>
          <strong>Werbeagentur GmbH</strong><br />
          Musterstrasse 123<br />
          12345 Musterstadt<br />
          Deutschland
        </p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          Telefon: +49 (0) 123 456 789<br />
          E-Mail: info@werbeagentur.de<br />
          Website: www.werbeagentur.de
        </p>
      </section>

      <section>
        <h2>Vertreten durch</h2>
        <p>
          Geschaeftsfuehrer: Max Mustermann
        </p>
      </section>

      <section>
        <h2>Registereintrag</h2>
        <p>
          Eintragung im Handelsregister.<br />
          Registergericht: Amtsgericht Musterstadt<br />
          Registernummer: HRB 12345
        </p>
      </section>

      <section>
        <h2>Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemaess §27a Umsatzsteuergesetz:<br />
          DE 123 456 789
        </p>
      </section>

      <section>
        <h2>Verantwortlich fuer den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>
          Max Mustermann<br />
          Musterstrasse 123<br />
          12345 Musterstadt
        </p>
      </section>

      <section>
        <h2>EU-Streitschlichtung</h2>
        <p>
          Die Europaeische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) 
          bereit:{' '}
          <a 
            href="https://ec.europa.eu/consumers/odr/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p>
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
      </section>

      <section>
        <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <section>
        <h2>Haftung fuer Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemaess § 7 Abs.1 TMG fuer eigene Inhalte auf diesen 
          Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir 
          als Diensteanbieter jedoch nicht unter Umstaenden nicht verpflichtet, uebermittelte oder 
          gespeicherte fremde Informationen zu ueberwachen oder nach Umstaenden zu forschen, 
          die auf eine rechtswidrige Taetigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
          allgemeinen Gesetzen bleiben hiervon unberuehrt. Eine diesbezuegliche Haftung ist jedoch 
          erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung moeglich. Bei 
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend 
          entfernen.
        </p>
      </section>

      <section>
        <h2>Haftung fuer Links</h2>
        <p>
          Unser Angebot enthaelt Links zu externen Websites Dritter, auf deren Inhalte wir 
          keinen Einfluss haben. Deshalb koennen wir fuer diese fremden Inhalte auch keine 
          Gewaehr uebernehmen. Fuer die Inhalte der verlinkten Seiten ist stets der jeweilige 
          Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum 
          Zeitpunkt der Verlinkung auf moegliche Rechtsverstoesse ueberprueft. Rechtswidrige 
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete 
          Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von 
          Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>
      </section>

      <section>
        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
          unterliegen dem deutschen Urheberrecht. Die Vervielfaeltigung, Bearbeitung, 
          Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes 
          beduerfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
          Downloads und Kopien dieser Seite sind nur fuer den privaten, nicht kommerziellen 
          Gebrauch gestattet.
        </p>
        <p>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die 
          Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche 
          gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam 
          werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von 
          Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </p>
      </section>
    </LegalPageLayout>
  )
}
