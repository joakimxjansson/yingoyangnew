'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'

interface HeroProps {
  title: string
  tagline: string
  primaryCta: { text: string; href: string }
  secondaryCta: { text: string; href: string }
  imageSrc: string
}

export default function Hero({
  title,
  tagline,
  primaryCta,
  secondaryCta,
  imageSrc,
}: HeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={imageSrc}
          alt="Ying & Yang"
          fill
          priority
          className="object-cover object-[center_20%]"
          sizes="100vw"
        />
      </motion.div>

      {/* Top Gradient Overlay for readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />

      {/* Subtle Overlay */}
      <div className="absolute inset-0 z-10 bg-black/20" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-gray-200 font-light">
            {tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={primaryCta.href}
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              aria-label={primaryCta.text}
            >
              {primaryCta.text}
            </Link>
            <Link
              href={secondaryCta.href}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              aria-label={secondaryCta.text}
            >
              {secondaryCta.text}
            </Link>
          </div>
        </motion.div>

        {/* Instagram Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-12 md:bottom-16 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="flex items-center space-x-6 text-sm">
            <Link
              href="https://instagram.com/olivereericsson"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
              aria-label="Oliver Ericsson Instagram"
            >
              <FaInstagram className="text-lg" />
              <span>@olivereericsson</span>
            </Link>
            <span className="text-gray-500">&</span>
            <Link
              href="https://instagram.com/fredrikolssonx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
              aria-label="Fredrik Olsson Instagram"
            >
              <FaInstagram className="text-lg" />
              <span>@fredrikolssonx</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Overlapping Bottom Fade - goes down over next section */}
      <div className="absolute -bottom-24 left-0 z-30 h-48 w-full bg-gradient-to-b from-transparent to-black pointer-events-none" />
    </section>
  )
}

