/**
 * YING & YANG - Official Website
 * 
 * INSTRUKTIONER FÖR BILDER OCH FADE-JUSTERINGAR:
 * 
 * 1. BYTA BILDER:
 *    - Hero-bild: Lägg din bild i /public/heropic.jpg (eller ändra imageSrc i Hero-komponenten)
 *    - Tour-bakgrund: Lägg din bild i /public/tour-bg.jpg (används i Shows-komponenten)
 *    - Album-cover: Lägg din bild i /public/cover.jpg (används i LatestRelease)
 *    - Merch-bilder: Lägg i /public/merch-1.jpg, merch-2.jpg, etc.
 *    - Gallery-bilder: Lägg i /public/gallery-1.jpg, gallery-2.jpg, etc.
 * 
 * 2. JUSTERA FADE-ÖVERLAPP MELLAN HERO & SHOWS:
 *    - Hero-komponenten (app/components/Hero.tsx):
 *      * Ändra `-bottom-24` för att flytta fade-överlappen upp/ner (t.ex. -bottom-32 för mer överlapp)
 *      * Ändra `h-48` för att ändra fade-höjden (t.ex. h-64 för längre fade)
 *      * Klassen finns på rad ~89: `absolute -bottom-24 left-0 z-30 h-48 w-full bg-gradient-to-b from-transparent to-black pointer-events-none`
 * 
 *    - Shows-komponenten (app/components/Shows.tsx):
 *      * Ändra `-mt-24` för att justera hur mycket sektionen glider in under hero-faden
 *      * Klassen finns på rad ~18: `className="relative -mt-24 pt-32 pb-24 min-h-screen flex items-center"`
 *      * Om du ändrar -bottom-24 i Hero, ändra -mt-24 i Shows till samma värde (t.ex. -bottom-32 -> -mt-32)
 * 
 * 3. TESTA I ALLA BREAKPOINTS:
 *    - Använd responsiv design (sm:, md:, lg: breakpoints)
 *    - Testa fade-överlappen på mobil, tablet och desktop
 *    - Justera värdena om nödvändigt för olika skärmstorlekar
 * 
 * 4. KÖRA PROJEKTET:
 *    - npm install
 *    - npm run dev
 *    - Öppna http://localhost:3000
 */

import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Shows from './components/Shows'
import LatestRelease from './components/LatestRelease'
import Videos from './components/Videos'
import News from './components/News'
import Signup from './components/Signup'
import Contact from './components/Contact'
import Merch from './components/Merch'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

// Dummy data för shows
const showsData = [
  {
    date: '2025-11-14 22:00 - 02:00',
    city: 'Örebro',
    venue: 'Ritz',
    status: 'drop-in' as const,
    url: 'https://www.instagram.com/p/DQ623U8DKPG/',
  },
  {
    date: '2025-11-14 22:00 - 02:00',
    city: 'Karlstad',
    venue: 'Verket',
    status: 'soon' as const,
  },
  {
    date: '2025-11-14 22:00 - 02:00',
    city: 'Malmö',
    venue: 'KB',
    status: 'on-sale' as const,
    url: 'https://example.com/tickets/malmo',
  },
  {
    date: '2025-11-14 22:00 - 02:00',
    city: 'Uppsala',
    venue: 'Flustret',
    status: 'sold-out' as const,
  },
]

// Dummy data för latest release
const latestReleaseData = {
  title: 'Midnight Dreams',
  subtitle: 'Single Release',
  coverImage: '/cover.png',
  audioSrc: '/audio.mp3', // Lägg din audio-fil här
  streamingLinks: [
    {
      platform: 'Spotify',
      url: 'https://open.spotify.com/track/example',
      iconName: 'spotify' as const,
    },
    {
      platform: 'Apple Music',
      url: 'https://music.apple.com/track/example',
      iconName: 'apple' as const,
    },
    {
      platform: 'YouTube',
      url: 'https://youtube.com/watch?v=example',
      iconName: 'youtube' as const,
    },
    {
      platform: 'SoundCloud',
      url: 'https://soundcloud.com/yingyang/example',
      iconName: 'soundcloud' as const,
    },
  ],
  tickerText: 'Ny singel "Midnight Dreams" ute nu!',
}

// Dummy data för videos
const videosData = [
  { id: 'dQw4w9WgXcQ', title: 'Officiell musikvideo' },
  { id: 'jNQXAC9IVRw', title: 'Liveframträdande' },
  { id: '9bZkp7q19f0', title: 'Bakom kulisserna' },
]

// Dummy data för news
const newsData = [
  {
    id: '1',
    title: 'Premiärshow i Örebro',
    date: '2025-11-14',
    excerpt: 'Vi är glada att kunna meddela att vi har vår första show i Örebro den 14 november!',
    image: '/news-1.jpg',
    url: 'https://www.instagram.com/p/DQ623U8DKPG/',
  },
  {
    id: '2',
    title: 'Vi ses i Karlstad!',
    date: '2025-11-14',
    excerpt: 'Datum och tider kommer snart!',
    image: '/news-2.jpg',
    url: 'https://www.nojesfabriken.se/nojen/verket-nattklubb/',
  },
  {
    id: '3',
    title: 'Vi är äntligen här!',
    date: '2025-11-14',
    excerpt: 'Äntligen kan vi gå ut med våran DJ-duo, ying & yang! Följ oss på instagram för att få reda på mer!',
    image: '/news-3.jpg',
    url: 'https://www.instagram.com/yingandyang.official/',
  },
]

// Dummy data för merch (placeholder)
const merchData = [
  {
    id: '1',
    name: 'Ying & Yang T-Shirt',
    price: '299 SEK',
    image: '/merch-1.jpg',
    url: '#',
  },
  {
    id: '2',
    name: 'Ying & Yang Hoodie',
    price: '599 SEK',
    image: '/merch-2.jpg',
    url: '#',
  },
]

// Dummy data för gallery (placeholder)
const galleryData = [
  { id: '1', src: '/gallery-1.jpg', alt: 'Concert photo 1' },
  { id: '2', src: '/gallery-2.jpg', alt: 'Concert photo 2' },
  { id: '3', src: '/gallery-3.jpg', alt: 'Studio session' },
  { id: '4', src: '/gallery-4.jpg', alt: 'Concert photo 3' },
  { id: '5', src: '/gallery-5.jpg', alt: 'Backstage' },
  { id: '6', src: '/gallery-6.jpg', alt: 'Concert photo 4' },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero
        title="YING & YANG"
        tagline="En DJ-duo som mixar kontraster — mjukt & hårt, ljust & mörkt."
        primaryCta={{ text: 'Lyssna nu', href: '#music' }}
        secondaryCta={{ text: 'Boka oss', href: '#contact' }}
        imageSrc="/heropic.jpg"
      />
      <Shows shows={showsData} />
      <LatestRelease {...latestReleaseData} />
      {/* <Videos videos={videosData} />  */}
      <News news={newsData} />
      <Contact /> 
      <Signup />
     {/*  <Merch items={merchData} /> */}
      <Gallery images={galleryData} />
      <Footer />
    </main>
  )
}

