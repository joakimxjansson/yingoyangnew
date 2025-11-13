'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaSpotify, FaApple, FaYoutube, FaSoundcloud, FaPlay, FaPause } from 'react-icons/fa'

interface StreamingLink {
  platform: string
  url: string
  iconName: 'spotify' | 'apple' | 'youtube' | 'soundcloud'
}

interface LatestReleaseProps {
  title: string
  subtitle: string
  coverImage: string
  audioSrc: string
  streamingLinks: StreamingLink[]
  tickerText?: string
}

export default function LatestRelease({
  title,
  subtitle,
  coverImage,
  audioSrc,
  streamingLinks,
  tickerText = 'Ny singel ute nu',
}: LatestReleaseProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section id="music" className="py-24 bg-black">
      {/* Ticker/Marquee */}
      {tickerText && (
        <div className="overflow-hidden border-y border-white/10 py-2 mb-16">
          <motion.div
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: 'linear',
            }}
            className="flex whitespace-nowrap"
          >
            <span className="text-lg md:text-xl font-semibold mr-8">
              {tickerText}
            </span>
            <span className="text-lg md:text-xl font-semibold mr-8">
              {tickerText}
            </span>
            <span className="text-lg md:text-xl font-semibold mr-8">
              {tickerText}
            </span>
          </motion.div>
        </div>
      )}

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            SENASTE RELEASE
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Featured Release Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              {/* Cover Image */}
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={coverImage}
                  alt={`${title} cover`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">{title}</h3>
                <p className="text-xl text-gray-400 mb-6">{subtitle}</p>

                {/* Audio Player */}
                <div className="mb-6">
                  <audio ref={audioRef} src={audioSrc} />
                  <button
                    onClick={togglePlay}
                    className="flex items-center space-x-3 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                    aria-label={isPlaying ? 'Paus' : 'Spela'}
                  >
                    {isPlaying ? (
                      <FaPause className="text-xl" />
                    ) : (
                      <FaPlay className="text-xl" />
                    )}
                    <span className="font-medium">
                      {isPlaying ? 'Paus' : 'Spela'}
                    </span>
                  </button>
                </div>

                {/* Streaming Links */}
                <div className="flex flex-wrap gap-3">
                  {streamingLinks.map((link) => {
                    const IconComponent = {
                      spotify: FaSpotify,
                      apple: FaApple,
                      youtube: FaYoutube,
                      soundcloud: FaSoundcloud,
                    }[link.iconName]

                    return (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors text-sm focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                        aria-label={`Lyssna på ${link.platform}`}
                      >
                        <IconComponent className="text-base" />
                        <span>{link.platform}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

