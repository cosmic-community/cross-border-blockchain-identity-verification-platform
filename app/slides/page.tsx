'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function SlidesPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const slides = [
    {
      title: 'The Problem',
      content: 'Current identity verification systems require sharing raw personal data across borders, creating security risks and privacy concerns. Data breaches expose millions of identities annually.',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      title: 'Our Solution',
      content: 'Cross-Border Blockchain Identity Verification Platform - A secure, privacy-preserving system using blockchain and Zero-Knowledge Proofs for global identity verification.',
      gradient: 'from-neon-blue to-neon-green',
    },
    {
      title: 'Why Blockchain?',
      content: 'Blockchain provides immutable audit trails, decentralized security, and tamper-proof records. Combined with cryptographic hashing, it ensures data integrity without central authority.',
      gradient: 'from-neon-green to-neon-purple',
    },
    {
      title: 'Key Features',
      content: '• SHA-256 Blockchain Hashing\n• AES-256 Encryption\n• Zero-Knowledge Proofs\n• Smart Contract Automation\n• Real-time Verification\n• Multi-role System',
      gradient: 'from-neon-purple to-neon-blue',
    },
    {
      title: 'Platform Architecture',
      content: 'Three-layer architecture: Frontend (React + Next.js), Backend (Node.js + Cosmic CMS), Blockchain Layer (Simulated chain with smart contracts)',
      gradient: 'from-blue-600 to-purple-600',
    },
    {
      title: 'ZKP Flow',
      content: 'User uploads documents → Encrypted storage → Verification request → ZKP proof generation → Organization receives proof without raw data → Blockchain confirmation',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'Cross-Border Use Cases',
      content: '• International Employment\n• Global Banking (KYC)\n• Healthcare Services\n• Academic Credentials\n• Government Services\n• E-commerce Age Verification',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Platform Demo',
      content: 'Live demonstration of: User registration, document upload, verification request workflow, dashboard analytics, and blockchain transaction logs.',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Security Model',
      content: 'Multi-layered security: End-to-end encryption, blockchain immutability, zero-knowledge proofs, user consent requirements, and comprehensive audit trails.',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Future Scope',
      content: '• Integration with real blockchain networks\n• Advanced ZKP algorithms\n• AI-powered fraud detection\n• IoT device verification\n• Decentralized governance\n• Global partnerships',
      gradient: 'from-violet-500 to-purple-500',
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const slide = slides[currentSlide]

  if (!slide) return null

  return (
    <div className={`${isFullscreen ? 'fixed inset-0 z-50 bg-dark-bg' : 'min-h-screen py-20'}`}>
      <div className="container mx-auto px-4 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold gradient-text">Platform Presentation</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">
              Slide {currentSlide + 1} of {slides.length}
            </span>
            <button
              onClick={toggleFullscreen}
              className="btn-secondary px-4 py-2"
            >
              {isFullscreen ? <X className="w-5 h-5" /> : 'Fullscreen'}
            </button>
          </div>
        </div>

        {/* Slide */}
        <div className="flex-1 flex items-center justify-center">
          <div className={`w-full max-w-5xl aspect-video bg-gradient-to-br ${slide.gradient} rounded-2xl p-12 md:p-16 flex flex-col justify-center shadow-2xl`}>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white">
              {slide.title}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 whitespace-pre-line leading-relaxed">
              {slide.content}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="btn-secondary px-6 py-3 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-neon-blue w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="btn-secondary px-6 py-3 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Keyboard shortcuts hint */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Use arrow keys to navigate • Press F for fullscreen
        </p>
      </div>
    </div>
  )
}