'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setEmail('')
    
    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            STAY CONNECTED
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Få de senaste nyheterna och uppdateringarna direkt till din inbox.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-600/20 border border-green-600 rounded-lg p-6"
            >
              <p className="text-lg font-semibold text-green-400">
                Tack! Du är nu anmäld.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Din e-postadress"
                  required
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                  aria-label="Subscribe to newsletter"
                >
                  {isSubmitting ? 'Skickar...' : 'Anmäl dig'}
                </button>
              </div>

              {/* GDPR Text */}
              <p className="text-sm text-gray-500">
                Genom att anmäla dig godkänner du att vi behandlar din
                e-postadress enligt vår integritetspolicy. Du kan när som helst
                avbryta prenumerationen.
              </p>

              {/* reCAPTCHA Placeholder */}
              <div className="flex justify-center">
                <div className="bg-white/5 border border-white/10 rounded p-2 text-xs text-gray-400">
                  reCAPTCHA placeholder
                </div>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

