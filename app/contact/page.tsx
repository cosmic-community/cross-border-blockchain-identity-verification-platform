'use client'

import { useState } from 'react'
import { Mail, MessageSquare, User, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSuccess(true)
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300">
            Have questions? We're here to help
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            {success && (
              <div className="mb-6 p-4 bg-neon-green/20 border border-neon-green rounded-lg">
                <p className="text-neon-green">Message sent successfully! We'll get back to you soon.</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 outline-none transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full pl-12 pr-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 outline-none transition-all resize-none"
                    placeholder="Tell us more..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-3 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-gray-300 mb-6">
                We're here to answer any questions you have about our blockchain identity verification platform.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-neon-blue mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:support@blockchainid.com" className="text-neon-blue hover:underline">
                      support@blockchainid.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4">Common Questions</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">How secure is my data?</p>
                  <p className="text-sm text-gray-400">
                    We use AES-256 encryption and blockchain technology to ensure maximum security.
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2">What are Zero-Knowledge Proofs?</p>
                  <p className="text-sm text-gray-400">
                    ZKPs allow verification without revealing your actual data, ensuring complete privacy.
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2">How long does verification take?</p>
                  <p className="text-sm text-gray-400">
                    Most verifications are completed instantly via blockchain technology.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10">
              <h3 className="text-xl font-bold mb-3">Need Help?</h3>
              <p className="text-gray-300 mb-4">
                Check out our comprehensive documentation and FAQ section.
              </p>
              <a href="/about" className="btn-secondary inline-block">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}