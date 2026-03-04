import { Metadata } from 'next'
import { LegalPageLayout } from '@/components/legal'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutzerklaerung | Werbeagentur',
  description: 'Datenschutzerklaerung und Informationen zur Datenverarbeitung der Werbeagentur.',
}

export default function DatenschutzPage() {
  return (
    <LegalPageLayout title="Datenschutzerklaerung" lastUpdated="04. Maerz 2026">
      {/* Table of Contents */}
      <nav className="mb-12 p-6 bg-white/5 rounded-xl border border-white/10">
        <h2 className="text-lg font-semibold text-white mb-4 mt-0">Inhaltsverzeichnis</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><a href="#verantwortlicher" className="text-accent hover:underline">Verantwortlicher</a></li>
          <li><a href="#uebersicht" className="text-accent hover:underline">Uebersicht der Verarbeitungen</a></li>
          <li><a href="#rechtsgrundlagen" className="text-accent hover:underline">Rechtsgrundlagen</a></li>
          <li><a href="#sicherheit" className="text-accent hover:underline">Sicherheitsmassnahmen</a></li>
          <li><a href="#rechte" className="text-accent hover:underline">Rechte der betroffenen Personen</a></li>
          <li><a href="#cookies" className="text-accent hover:underline">Einsatz von Cookies</a></li>
          <li><a href="#hosting" className="text-accent hover:underline">Hosting</a></li>
          <li><a href="#kontaktaufnahme" className="text-accent hover:underline">Kontaktaufnahme</a></li>
          <li><a href="#newsletter" className="text-accent hover:underline">Newsletter</a></li>
          <li><a href="#webanalyse" className="text-accent hover:underline">Webanalyse und Optimierung</a></li>
          <li><a href="#onlinemarketing" className="text-accent hover:underline">Onlinemarketing</a></li>
          <li><a href="#social-media" className="text-accent hover:underline">Social Media</a></li>
          <li><a href="#aenderungen" className="text-accent hover:underline">Aenderungen</a></li>
        </ol>
      </nav>

      {/* 1. Verantwortlicher */}
      <section id="verantwortlicher">
        <h2>1. Verantwortlicher</h2>
        <p>
          <strong>Werbeagentur GmbH</strong><br />
          Musterstrasse 123<br />
          12345 Musterstadt<br />
          Deutschland
        </p>
        <p>
          E-Mail: datenschutz@werbeagentur.de<br />
          Telefon: +49 (0) 123 456 789
        </p>
        <p>
          <Link href="/impressum">Impressum</Link>
        </p>
      </section>

      {/* 2. Uebersicht der Verarbeitungen */}
      <section id="uebersicht">
        <h2>2. Uebersicht der Verarbeitungen</h2>
        <p>
          Die nachfolgende Uebersicht fasst die Arten der verarbeiteten Daten und die 
          Zwecke ihrer Verarbeitung zusammen:
        </p>
        
        <h3>Arten der verarbeiteten Daten</h3>
        <ul>
          <li>Bestandsdaten (z.B. Namen, Adressen)</li>
          <li>Kontaktdaten (z.B. E-Mail, Telefonnummern)</li>
          <li>Inhaltsdaten (z.B. Eingaben in Onlineformularen)</li>
          <li>Nutzungsdaten (z.B. besuchte Seiten, Interesse an Inhalten)</li>
          <li>Meta-/Kommunikationsdaten (z.B. Geraete-Informationen, IP-Adressen)</li>
        </ul>

        <h3>Kategorien betroffener Personen</h3>
        <ul>
          <li>Kommunikationspartner</li>
          <li>Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten)</li>
        </ul>

        <h3>Zwecke der Verarbeitung</h3>
        <ul>
          <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit</li>
          <li>Kontaktanfragen und Kommunikation</li>
          <li>Sicherheitsmassnahmen</li>
          <li>Reichweitenmessung</li>
          <li>Marketing</li>
        </ul>
      </section>

      {/* 3. Rechtsgrundlagen */}
      <section id="rechtsgrundlagen">
        <h2>3. Rechtsgrundlagen</h2>
        <p>
          Im Folgenden teilen wir die Rechtsgrundlagen der Datenschutz-Grundverordnung (DSGVO) 
          mit, auf deren Basis wir personenbezogene Daten verarbeiten:
        </p>
        <ul>
          <li>
            <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO)</strong> — Die betroffene 
            Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden 
            personenbezogenen Daten fuer einen oder mehrere bestimmte Zwecke gegeben.
          </li>
          <li>
            <strong>Vertragserfuellung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b DSGVO)</strong> — 
            Die Verarbeitung ist fuer die Erfuellung eines Vertrags, dessen Vertragspartei die 
            betroffene Person ist, oder zur Durchfuehrung vorvertraglicher Massnahmen erforderlich.
          </li>
          <li>
            <strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f DSGVO)</strong> — 
            Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen 
            oder eines Dritten erforderlich.
          </li>
        </ul>
      </section>

      {/* 4. Sicherheitsmassnahmen */}
      <section id="sicherheit">
        <h2>4. Sicherheitsmassnahmen</h2>
        <p>
          Wir treffen nach Massgabe der gesetzlichen Vorgaben unter Beruecksichtigung des 
          Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der 
          Umstaende und der Zwecke der Verarbeitung sowie der unterschiedlichen 
          Eintrittswahrscheinlichkeiten und des Ausmasses der Bedrohung der Rechte und 
          Freiheiten natuerlicher Personen geeignete technische und organisatorische 
          Massnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewaehrleisten.
        </p>
        <p>
          Zu den Massnahmen gehoeren insbesondere die Sicherung der Vertraulichkeit, 
          Integritaet und Verfuegbarkeit von Daten durch Kontrolle des physischen und 
          elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, 
          der Eingabe, der Weitergabe, der Sicherung der Verfuegbarkeit und ihrer Trennung. 
          Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von 
          Betroffenenrechten, die Loeschung von Daten und Reaktionen auf die Gefaehrdung 
          der Daten gewaehrleisten.
        </p>
        <p>
          <strong>SSL-Verschluesselung (https):</strong> Um Ihre via unser Online-Angebot 
          uebermittelten Daten zu schuetzen, nutzen wir eine SSL-Verschluesselung. Sie 
          erkennen derart verschluesselte Verbindungen an dem Praefix https:// in der 
          Adresszeile Ihres Browsers.
        </p>
      </section>

      {/* 5. Rechte der betroffenen Personen */}
      <section id="rechte">
        <h2>5. Rechte der betroffenen Personen</h2>
        <p>
          Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich 
          insbesondere aus Art. 15 bis 21 DSGVO ergeben:
        </p>
        <ul>
          <li>
            <strong>Widerspruchsrecht:</strong> Sie haben das Recht, aus Gruenden, die sich 
            aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie 
            betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder 
            f DSGVO erfolgt, Widerspruch einzulegen.
          </li>
          <li>
            <strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht, 
            erteilte Einwilligungen jederzeit zu widerrufen.
          </li>
          <li>
            <strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestaetigung darueber 
            zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft ueber 
            diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend 
            den gesetzlichen Vorgaben.
          </li>
          <li>
            <strong>Recht auf Berichtigung:</strong> Sie haben das Recht, die 
            Vervollstaendigung der Sie betreffenden Daten oder die Berichtigung der Sie 
            betreffenden unrichtigen Daten zu verlangen.
          </li>
          <li>
            <strong>Recht auf Loeschung und Einschraenkung der Verarbeitung:</strong> Sie 
            haben das Recht, zu verlangen, dass Sie betreffende Daten unverzueglich geloescht 
            werden, bzw. alternativ die Einschraenkung der Verarbeitung der Daten zu verlangen.
          </li>
          <li>
            <strong>Recht auf Datenuebertragbarkeit:</strong> Sie haben das Recht, Sie 
            betreffende Daten, die Sie uns bereitgestellt haben, in einem strukturierten, 
            gaengigen und maschinenlesbaren Format zu erhalten oder die Uebermittlung an 
            einen anderen Verantwortlichen zu fordern.
          </li>
          <li>
            <strong>Beschwerde bei Aufsichtsbehoerde:</strong> Sie haben das Recht, sich bei 
            einer Aufsichtsbehoerde zu beschweren, wenn Sie der Ansicht sind, dass die 
            Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO 
            verstoesst.
          </li>
        </ul>
      </section>

      {/* 6. Cookies */}
      <section id="cookies">
        <h2>6. Einsatz von Cookies</h2>
        <p>
          Cookies sind kleine Textdateien, bzw. sonstige Speichervermerke, die 
          Informationen auf Endgeraeten speichern und Informationen aus den Endgeraeten 
          auslesen. Cookies koennen unterschiedliche Daten speichern, z.B. 
          Login-Informationen, die Spracheinstellung oder einen Warenkorb-Inhalt. Cookies 
          koennen auch fuer Analyse-Zwecke eingesetzt werden.
        </p>
        
        <h3>Arten von Cookies</h3>
        <ul>
          <li>
            <strong>Notwendige Cookies:</strong> Fuer den Betrieb der Website unbedingt 
            erforderlich. Hierzu zaehlen etwa Cookies, die der Authentifizierung oder 
            der Speicherung von Nutzerpreferenzen dienen.
          </li>
          <li>
            <strong>Analyse-Cookies:</strong> Helfen uns, das Nutzungsverhalten zu verstehen 
            und die Website zu optimieren.
          </li>
          <li>
            <strong>Marketing-Cookies:</strong> Werden eingesetzt, um relevante Werbung 
            anzuzeigen und die Effektivitaet von Kampagnen zu messen.
          </li>
        </ul>
        
        <h3>Hinweise zu Einwilligung und Widerruf</h3>
        <p>
          Wir holen beim ersten Besuch Ihre Einwilligung fuer nicht notwendige Cookies ein. 
          Sie koennen Ihre Einwilligung jederzeit widerrufen, indem Sie Ihre 
          Cookie-Einstellungen anpassen oder alle Cookies in Ihrem Browser loeschen.
        </p>
        <p>
          <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO) 
          bzw. berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f DSGVO) bei technisch 
          notwendigen Cookies.
        </p>
      </section>

      {/* 7. Hosting */}
      <section id="hosting">
        <h2>7. Hosting</h2>
        <p>
          Unser Hosting-Anbieter erhebt in sogenannten Server-Logfiles folgende Daten, die 
          Ihr Browser uebermittelt:
        </p>
        <ul>
          <li>IP-Adresse</li>
          <li>Adresse der vorher besuchten Website (Referer Anfrage-Header)</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Zeitzonendifferenz zur Greenwich Mean Time</li>
          <li>Inhalt der Anforderung</li>
          <li>HTTP-Statuscode</li>
          <li>Uebertragene Datenmenge</li>
          <li>Website, von der die Anforderung kommt</li>
          <li>Informationen zu Browser und Betriebssystem</li>
        </ul>
        <p>
          Die Erhebung dieser Daten ist erforderlich, um die Website auszuliefern und die 
          Stabilitaet und Sicherheit zu gewaehrleisten. Dies entspricht unserem berechtigten 
          Interesse im Sinne des Art. 6 Abs. 1 S. 1 lit. f DSGVO.
        </p>
      </section>

      {/* 8. Kontaktaufnahme */}
      <section id="kontaktaufnahme">
        <h2>8. Kontaktaufnahme</h2>
        <p>
          Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder 
          via sozialer Medien) werden die Angaben der anfragenden Personen verarbeitet, 
          soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter 
          Massnahmen erforderlich ist.
        </p>
        <p>
          <strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z.B. E-Mail, 
          Telefonnummern); Inhaltsdaten (z.B. Eingaben in Onlineformularen); Nutzungsdaten 
          (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten); 
          Meta-/Kommunikationsdaten (z.B. Geraete-Informationen, IP-Adressen).
        </p>
        <p>
          <strong>Rechtsgrundlagen:</strong> Vertragserfuellung und vorvertragliche Anfragen 
          (Art. 6 Abs. 1 S. 1 lit. b DSGVO); Berechtigte Interessen (Art. 6 Abs. 1 S. 1 
          lit. f DSGVO).
        </p>
      </section>

      {/* 9. Newsletter */}
      <section id="newsletter">
        <h2>9. Newsletter</h2>
        <p>
          Wir versenden Newsletter, E-Mails und weitere elektronische Benachrichtigungen 
          nur mit der Einwilligung der Empfaenger oder einer gesetzlichen Erlaubnis.
        </p>
        <p>
          <strong>Double-Opt-In-Verfahren:</strong> Die Anmeldung zu unserem Newsletter 
          erfolgt in einem sogenannten Double-Opt-In-Verfahren. D.h., Sie erhalten nach der 
          Anmeldung eine E-Mail, in der Sie um die Bestaetigung Ihrer Anmeldung gebeten 
          werden. Diese Bestaetigung ist notwendig, damit sich niemand mit fremden 
          E-Mail-Adressen anmelden kann.
        </p>
        <p>
          <strong>Widerruf:</strong> Sie koennen den Empfang unseres Newsletters jederzeit 
          kuendigen, d.h. Ihre Einwilligungen widerrufen. Einen Link zur Kuendigung des 
          Newsletters finden Sie am Ende eines jeden Newsletters.
        </p>
        <p>
          <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO).
        </p>
      </section>

      {/* 10. Webanalyse */}
      <section id="webanalyse">
        <h2>10. Webanalyse und Optimierung</h2>
        <p>
          Die Webanalyse dient der Auswertung der Besucherstroeme unseres Onlineangebotes 
          und kann Verhalten, Interessen oder demographische Informationen zu den Besuchern 
          umfassen. Mit Hilfe der Reichweitenanalyse koennen wir z.B. erkennen, zu welcher 
          Zeit unser Onlineangebot oder dessen Funktionen oder Inhalte am haeufigsten 
          genutzt werden.
        </p>
        <p>
          Die Verarbeitung erfolgt nur mit Ihrer Einwilligung. Wir setzen die Analyse-Tools 
          erst ein, nachdem Sie aktiv zugestimmt haben.
        </p>
        <p>
          <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO).
        </p>
      </section>

      {/* 11. Onlinemarketing */}
      <section id="onlinemarketing">
        <h2>11. Onlinemarketing</h2>
        <p>
          Wir verarbeiten personenbezogene Daten zu Zwecken des Onlinemarketings nur mit 
          Ihrer Einwilligung. Dies kann die Anzeige von Werbung, die Optimierung von 
          Werbemassnahmen und die Erfolgsmessung umfassen.
        </p>
        <p>
          <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO).
        </p>
      </section>

      {/* 12. Social Media */}
      <section id="social-media">
        <h2>12. Social Media</h2>
        <p>
          Wir unterhalten Onlinepraesenzen innerhalb sozialer Netzwerke und verarbeiten in 
          diesem Rahmen Daten der Nutzer, um mit den dort aktiven Nutzern zu kommunizieren 
          oder um Informationen ueber uns anzubieten.
        </p>
        <p>
          Wir weisen darauf hin, dass dabei Daten der Nutzer ausserhalb des Raumes der 
          Europaeischen Union verarbeitet werden koennen. Die Rechte der Nutzer koennen 
          dabei beeintraechtigt werden. In Bezug auf US-Anbieter, die unter dem EU-US Data 
          Privacy Framework zertifiziert sind, weisen wir darauf hin, dass diese sich damit 
          verpflichten, die Datenschutzstandards der EU einzuhalten.
        </p>
        <p>
          <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 
          lit. f DSGVO).
        </p>
      </section>

      {/* 13. Aenderungen */}
      <section id="aenderungen">
        <h2>13. Aenderungen dieser Datenschutzerklaerung</h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklaerung anzupassen, damit sie stets den 
          aktuellen rechtlichen Anforderungen entspricht oder um Aenderungen unserer 
          Leistungen in der Datenschutzerklaerung umzusetzen, z.B. bei der Einfuehrung 
          neuer Services. Fuer Ihren erneuten Besuch gilt dann die neue Datenschutzerklaerung.
        </p>
      </section>
    </LegalPageLayout>
  )
}
