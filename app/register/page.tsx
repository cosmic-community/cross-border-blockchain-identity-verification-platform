'use client'

import { useState } from 'react'
import { Shield, Mail, Phone, User, CheckCircle } from 'lucide-react'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: 'user',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSuccess(true)
        setFormData({ fullName: '', email: '', phone: '', role: 'user' })
      }
    } catch (error) {
      console.error('Registration error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="glass-card p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-neon-green/20 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-neon-green" />
            </div>
            <h2 className="text-4xl font-bold mb-4 gradient-text">Registration Successful!</h2>
            <p className="text-xl text-gray-300 mb-8">
              Your identity has been secured on the blockchain. Check your email for next steps.
            </p>
            <div className="space-y-4 text-left glass-card p-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-neon-green mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Blockchain Hash Generated</p>
                  <p className="text-sm text-gray-400">Your identity is now secured on the blockchain</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-neon-green mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">ZKP Keys Created</p>
                  <p className="text-sm text-gray-400">Zero-Knowledge Proof keys for privacy-preserving verification</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-neon-green mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Verification Email Sent</p>
                  <p className="text-sm text-gray-400">Check your email to complete account setup</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center gap-4">
              <a href="/dashboard" className="btn-primary">
                Go to Dashboard
              </a>
              <a href="/upload" className="btn-secondary">
                Upload Documents
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Create Your Account
          </h1>
          <p className="text-xl text-gray-300">
            Join the future of secure identity verification
          </p>
        </div>

        <div className="glass-card p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold mb-2">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 outline-none transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-semibold mb-2">Account Type</label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 outline-none transition-all"
              >
                <option value="user">Individual User</option>
                <option value="verification-agency">Verification Agency</option>
                <option value="organization">Organization</option>
              </select>
            </div>

            {/* Security Features */}
            <div className="glass-card p-6 space-y-3">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-neon-blue" />
                Your Security
              </h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-neon-green mt-0.5 flex-shrink-0" />
                  <span>SHA-256 blockchain hash generated for your identity</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-neon-green mt-0.5 flex-shrink-0" />
                  <span>Zero-Knowledge Proof keys created automatically</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-neon-green mt-0.5 flex-shrink-0" />
                  <span>All data encrypted with AES-256</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-neon-green mt-0.5 flex-shrink-0" />
                  <span>Immutable blockchain record created</span>
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Creating Account...' : 'Create Account'}
            </button>

            <p className="text-center text-sm text-gray-400">
              By registering, you agree to our Terms of Service and Privacy Policy
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}