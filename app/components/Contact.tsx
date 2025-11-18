'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    venue: '',
    city: '',
    eventType: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        throw new Error('Något gick fel när meddelandet skulle skickas.')
      }

      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        venue: '',
        city: '',
        eventType: '',
        message: '',
      })

      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err) {
      console.error(err)
      setError('Kunde inte skicka meddelandet. Försök gärna igen senare.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              BOKA OSS
            </h2>
            <p className="text-xl text-gray-400">
              Fyll i formuläret nedan så återkommer vi så snart som möjligt.
            </p>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-600/20 border border-green-600 rounded-lg p-8 text-center"
            >
              <p className="text-xl font-semibold text-green-400 mb-2">
                Tack för din förfrågan!
              </p>
              <p className="text-gray-300">
                Vi har mottagit ditt meddelande och återkommer så snart som möjligt.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Namn *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                    placeholder="Ditt namn"
                    aria-label="Name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    E-post *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                    placeholder="din@epost.se"
                    aria-label="Email"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                    placeholder="070-123 45 67"
                    aria-label="Phone"
                  />
                </div>

                {/* Event Date */}
                <div>
                  <label
                    htmlFor="eventDate"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Eventdatum
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                    aria-label="Event date"
                  />
                </div>

                {/* City */}
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Stad
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                    placeholder="Stockholm"
                    aria-label="City"
                  />
                </div>

                {/* Venue */}
                <div>
                  <label
                    htmlFor="venue"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Plats/Lokal
                  </label>
                  <input
                    type="text"
                    id="venue"
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                    placeholder="Namn på Lokal"
                    aria-label="Venue"
                  />
                </div>
              </div>

              {/* Event Type */}
              <div>
                <label
                  htmlFor="eventType"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Typ av event
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                  aria-label="Event type"
                >
                  <option className="text-black"  value="">Välj typ av event</option>
                  <option className="text-black"  value="club">Klubb/Bar</option>
                  <option className="text-black"  value="festival">Festival</option>
                  <option className="text-black"  value="private">Privat event</option>
                  <option className="text-black"  value="corporate">Företagsevent</option>
                  <option className="text-black"  value="wedding">Bröllop</option>
                  <option className="text-black"  value="other">Annat</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Meddelande *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-black resize-none"
                  placeholder="Berätta mer om ditt event..."
                  aria-label="Message"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-12 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                  aria-label="Submit booking request"
                >
                  {isSubmitting ? 'Skickar...' : 'Skicka förfrågan'}
                </button>
              </div>

       {/* GDPR Text + ev. felmeddelande */}
       <p className="text-sm text-gray-500 text-center">
                Genom att skicka detta formulär godkänner du att vi behandlar dina
                personuppgifter enligt vår integritetspolicy. Dina uppgifter används
                endast för att hantera din bokningsförfrågan.
              </p>

              {error && (
                <p className="text-sm text-red-400 text-center">
                  {error}
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
