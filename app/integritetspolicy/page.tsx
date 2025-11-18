'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function IntegritetspolicyPage() {
    return (
        <section className="min-h-screen bg-black py-24">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10">
                    <Link
                        href="/"
                        className="inline-block px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
                    >
                        ← Tillbaka hem
                    </Link>
                </div>
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                >
                    <header className="mb-12 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Integritetspolicy
                        </h1>
                        <p className="text-gray-400">
                            Gäller för Ying &amp; Yang – DJ-tjänster
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                            Senast uppdaterad: 2025-11-18
                        </p>
                    </header>

                    <div className="space-y-10 text-gray-200">
                        {/* 1. Introduktion */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">1. Introduktion</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Denna integritetspolicy beskriver hur <strong>Ying &amp; Yang</strong>
                                {' '}behandlar personuppgifter när du kontaktar oss via vår webbplats
                                eller använder våra tjänster. Vi värnar om din integritet och följer
                                alltid EU:s dataskyddsförordning (<strong>GDPR</strong>).
                            </p>
                            <p className="text-gray-300 leading-relaxed mt-3">
                                Genom att skicka en bokningsförfrågan eller kontakta oss via formuläret
                                på hemsidan godkänner du vår behandling av dina personuppgifter enligt
                                denna policy.
                            </p>
                        </section>

                        {/* 2. Vilka personuppgifter vi samlar in */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">
                                2. Vilka personuppgifter vi samlar in
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-3">
                                När du fyller i vårt bokningsformulär kan vi samla in följande uppgifter:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-gray-300">
                                <li>Namn</li>
                                <li>E-postadress</li>
                                <li>Telefonnummer</li>
                                <li>Eventdatum</li>
                                <li>Typ av event</li>
                                <li>Stad och plats/venue</li>
                                <li>Annan information du själv lämnar i meddelandefältet</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed mt-3">
                                Vi samlar endast in de uppgifter som är nödvändiga för att kunna svara
                                på din förfrågan och utföra våra tjänster.
                            </p>
                        </section>

                        {/* 3. Syftet med behandlingen */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">
                                3. Syftet med behandlingen
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-3">
                                Vi behandlar dina personuppgifter för att:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-gray-300">
                                <li>Ta emot och svara på bokningsförfrågningar</li>
                                <li>Kommunicera med dig inför ett event</li>
                                <li>Skicka eventuella offerter eller bekräftelser</li>
                                <li>Administrera och planera våra DJ-uppdrag</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed mt-3">
                                Vi använder <strong>inte</strong> dina uppgifter till nyhetsbrev,
                                massutskick eller vidareförsäljning.
                            </p>
                        </section>

                        {/* 4. Lagring & skydd */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">
                                4. Hur vi lagrar och skyddar dina uppgifter
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                Dina uppgifter lagras säkert och skyddas genom:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-gray-300 mt-2">
                                <li>Krypterad överföring via vår webbplats</li>
                                <li>Begränsad åtkomst – endast Ying &amp; Yang har tillgång</li>
                                <li>Säkra e-post- och kommunikationssystem</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed mt-3">
                                Vi sparar dina uppgifter endast så länge det behövs för att
                                hantera din förfrågan, för planering och uppföljning av event,
                                eller enligt krav i exempelvis bokföringslagstiftning om en
                                affärsrelation uppstår.
                            </p>
                        </section>

                        {/* 5. Vem som får tillgång */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">
                                5. Vem som får tillgång till uppgifterna
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                Endast <strong>Ying &amp; Yang</strong> har tillgång till dina uppgifter.
                                Vid e-postkommunikation används vår e-postleverantör
                                (till exempel Gmail eller vår e-posttjänstleverantör) för att ta emot
                                och skicka mail.
                            </p>
                            <p className="text-gray-300 leading-relaxed mt-3">
                                Vi säljer aldrig personuppgifter till tredje part.
                            </p>
                        </section>

                        {/* 6. Dina rättigheter */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">
                                6. Dina rättigheter
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-3">
                                Enligt GDPR har du rätt att:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-gray-300">
                                <li>Begära utdrag över vilka uppgifter vi har om dig</li>
                                <li>Begära rättning av felaktiga eller ofullständiga uppgifter</li>
                                <li>Begära radering av dina uppgifter (i den mån de inte måste sparas enligt lag)</li>
                                <li>Begränsa behandlingen av dina uppgifter</li>
                                <li>Invända mot viss typ av behandling</li>
                                <li>Återkalla ditt samtycke när som helst</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed mt-3">
                                Om du vill utöva någon av dessa rättigheter är du välkommen att kontakta oss.
                            </p>
                        </section>

                        {/* 7. Cookies */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">7. Cookies</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Vi använder i dagsläget inga cookies för spårning eller marknadsföring.
                                Om vi i framtiden implementerar statistikverktyg (till exempel
                                Google Analytics) kommer denna policy att uppdateras och en tydlig
                                information om cookies att läggas till på webbplatsen.
                            </p>
                        </section>

                        {/* 8. Kontakt */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">8. Kontaktuppgifter</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Har du frågor om hur vi hanterar personuppgifter eller vill du utöva dina rättigheter?
                            </p>
                            <p className="text-gray-300 leading-relaxed mt-2">
                                Kontakta oss:
                            </p>
                            <p className="mt-2 text-gray-100">
                                📧 <a
                                href="mailto:booking@yingandyang.se"
                                className="underline hover:text-gray-300"
                            >
                                booking@yingandyang.se
                            </a>
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
