'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Show {
  date?: string
  city: string
  venue: string
  status: 'on-sale' | 'sold-out' | 'soon' | 'drop-in'
  url?: string
}

interface ShowsProps {
  shows: Show[]
}

export default function Shows({ shows }: ShowsProps) {
  const statusConfig = {
    'on-sale': {
      label: 'Till salu',
      buttonText: 'Biljetter',
      className: 'bg-green-600 hover:bg-green-700',
    },
    'sold-out': {
      label: 'Slutsåld',
      buttonText: 'RSVP',
      className: 'bg-gray-600 hover:bg-gray-700 cursor-not-allowed',
    },
    soon: {
      label: 'Mer info kommer snart',
      buttonText: 'RSVP',
      className: 'bg-blue-600 hover:bg-blue-700',
    },
    'drop-in': {
      label: 'Drop in',
      buttonText: 'Info',
      className: 'bg-green-600 hover:bg-green-700',
    },
  }

  return (
    <section
      id="shows"
      className="relative -mt-24 pt-32 pb-24 min-h-screen flex items-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/tour-bg.jpg"
          alt="Tour background"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            TURNÉDATUM
          </h2>
        </motion.div>

        {shows.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-gray-400 text-lg"
          >
            Mer info kommer snart…
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shows.map((show, index) => {
              const config = statusConfig[show.status]
              return (
                <motion.div
                  key={`${show.city}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all"
                >
                  {show.date && (
                    <div className="text-sm text-gray-400 mb-2">{show.date}</div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{show.city}</h3>
                  <p className="text-gray-300 mb-4">{show.venue}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-400">
                      {config.label}
                    </span>
                    {show.url && show.status !== 'sold-out' ? (
                      <a
                        href={show.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-black ${config.className}`}
                        aria-label={`${config.buttonText} for ${show.city}`}
                      >
                        {config.buttonText}
                      </a>
                    ) : (
                      <button
                        disabled={show.status === 'sold-out'}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-black ${config.className}`}
                        aria-label={`${config.buttonText} for ${show.city}`}
                      >
                        {config.buttonText}
                      </button>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

