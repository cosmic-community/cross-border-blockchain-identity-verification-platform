import { ArrowRight, Shield, Lock, Globe } from 'lucide-react'
import BlockchainNodes from './BlockchainNodes'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg">
        <BlockchainNodes />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8 animate-float">
            <Shield className="w-4 h-4 text-neon-blue" />
            <span className="text-sm font-semibold">Powered by Blockchain & Zero-Knowledge Proofs</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text">Secure Identity</span>
            <br />
            <span className="text-white">Verification</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Cross-border identity verification using blockchain technology. 
            Verify your identity without exposing personal data.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="/register" className="btn-primary text-lg px-8 py-4 flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/workflow" className="btn-secondary text-lg px-8 py-4">
              How It Works
            </a>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-neon-blue/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-neon-blue" />
              </div>
              <h3 className="font-bold mb-2">Blockchain Security</h3>
              <p className="text-sm text-gray-400">
                Immutable records with SHA-256 hashing
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-neon-green/20 flex items-center justify-center">
                <Lock className="w-6 h-6 text-neon-green" />
              </div>
              <h3 className="font-bold mb-2">Zero-Knowledge Proofs</h3>
              <p className="text-sm text-gray-400">
                Verify without exposing data
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-neon-purple/20 flex items-center justify-center">
                <Globe className="w-6 h-6 text-neon-purple" />
              </div>
              <h3 className="font-bold mb-2">Global Access</h3>
              <p className="text-sm text-gray-400">
                Cross-border verification
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent" />
    </section>
  )
}