'use client'

import Link from 'next/link'
import { FaInstagram, FaSpotify, FaYoutube, FaSoundcloud } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/yingandyang.official', icon: FaInstagram },
    { name: 'Spotify', url: 'https://open.spotify.com/artist/yingyang', icon: FaSpotify },
    { name: 'YouTube', url: 'https://youtube.com/@yingyang', icon: FaYoutube },
    { name: 'SoundCloud', url: 'https://soundcloud.com/yingyang', icon: FaSoundcloud },
    { name: 'X', url: 'https://twitter.com/yingyang', icon: FaXTwitter },
  ]

  const quickLinks = [
    { href: '#home', label: 'Hem' },
    { href: '#shows', label: 'Turné' },
    { href: '#music', label: 'Musik' },
    { href: '#videos', label: 'Videor' },
    { href: '#news', label: 'Nyheter' },
    { href: '#contact', label: 'Kontakt' },
    { href: '/integritetspolicy', label: 'Integritetspolicy' },
  ]

  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">YING & YANG</h3>
            <p className="text-gray-400 text-sm">
            En DJ-duo som mixar kontraster — mjukt & hårt, ljust & mörkt.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Snabb länkar</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-white rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Följ oss</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-white rounded"
                    aria-label={social.name}
                  >
                    <IconComponent />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} Ying & Yang. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  )
}

