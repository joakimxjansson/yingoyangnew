'use client'

import { motion } from 'framer-motion'

interface Video {
  id: string
  title: string
}

interface VideosProps {
  videos: Video[]
  viewAllUrl?: string
}

export default function Videos({ videos, viewAllUrl = '#' }: VideosProps) {
  return (
    <section id="videos" className="py-24 bg-black">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            VIDEOR
          </h2>
          {viewAllUrl && (
            <a
              href={viewAllUrl}
              className="text-lg font-medium hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
              aria-label="Se alla videor"
            >
              Se alla →
            </a>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative aspect-video rounded-lg overflow-hidden bg-gray-900"
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

