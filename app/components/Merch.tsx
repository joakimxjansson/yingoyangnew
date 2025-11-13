'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface MerchItem {
  id: string
  name: string
  price: string
  image: string
  url?: string
}

interface MerchProps {
  items: MerchItem[]
}

export default function Merch({ items }: MerchProps) {
  return (
    <section id="merch" className="py-24 bg-black">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            MERCH
          </h2>
        </motion.div>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-gray-400 text-lg"
          >
            Merch kommer snart…
          </motion.div>
        ) : (
          <div className="overflow-x-auto custom-scrollbar">
            <div className="flex gap-6 pb-4 snap-x snap-mandatory">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-shrink-0 w-64 snap-start"
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-all">
                    <div className="relative aspect-square w-full">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="256px"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                      <p className="text-gray-400 mb-4">{item.price}</p>
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center px-4 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                          aria-label={`Köp ${item.name}`}
                        >
                          Köp
                        </a>
                      ) : (
                        <button
                          className="w-full px-4 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                          aria-label={`Köp ${item.name}`}
                        >
                          Köp
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

