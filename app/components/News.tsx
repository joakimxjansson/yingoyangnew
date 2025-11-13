'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface NewsItem {
  id: string
  title: string
  date: string
  excerpt: string
  image: string
  url?: string
}

interface NewsProps {
  news: NewsItem[]
}

export default function News({ news }: NewsProps) {
  return (
    <section id="news" className="py-24 bg-black">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            NYHETER / PRESS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-all"
            >
              {item.image && (
                <div className="relative aspect-video w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="text-sm text-gray-400 mb-2">{item.date}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{item.excerpt}</p>
                {item.url ? (
                  <Link
                    href={item.url}
                    className="text-white font-medium hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
                    aria-label={`Read more about ${item.title}`}
                  >
                    Läs mer →
                  </Link>
                ) : (
                  <span className="text-white font-medium">Läs mer →</span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

