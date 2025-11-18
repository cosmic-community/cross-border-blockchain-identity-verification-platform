'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is blockchain identity verification?',
      answer: 'Blockchain identity verification uses distributed ledger technology to create immutable records of identity verification. Each verification is cryptographically hashed and stored on the blockchain, ensuring transparency and security without exposing personal data.',
    },
    {
      question: 'How do Zero-Knowledge Proofs work?',
      answer: 'Zero-Knowledge Proofs (ZKPs) are cryptographic methods that allow one party to prove to another that a statement is true without revealing any information beyond the validity of the statement itself. In our platform, organizations can verify your identity without accessing your raw documents or personal data.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes. We use multiple layers of security: AES-256 encryption for stored documents, SHA-256 hashing for blockchain records, and Zero-Knowledge Proofs for verification. Your raw personal data is never shared with organizations requesting verification.',
    },
    {
      question: 'How long does verification take?',
      answer: 'Once you approve a verification request, the process is instant. Zero-Knowledge Proofs are generated immediately, and the blockchain confirmation happens in real-time. Organizations receive verification results within seconds.',
    },
    {
      question: 'Can I control who verifies my identity?',
      answer: 'Absolutely. You have complete control. Every verification request must be explicitly approved by you. You can review the requesting organization, their purpose, and decide to approve or reject. No verification can occur without your consent.',
    },
    {
      question: 'What happens to my data if I reject a request?',
      answer: 'Nothing. If you reject a verification request, no data is shared, no proof is generated, and the request is simply logged on the blockchain as rejected. The organization receives only a rejection notification without any of your information.',
    },
    {
      question: 'Can organizations see my documents?',
      answer: 'No. Organizations never see your raw documents or personal data. They only receive a cryptographic proof (Zero-Knowledge Proof) that confirms your identity meets their requirements. This is the core privacy feature of our platform.',
    },
    {
      question: 'Is this compliant with data protection regulations?',
      answer: 'Yes. Our platform is designed with privacy by default, aligning with regulations like GDPR, CCPA, and other data protection laws. By using Zero-Knowledge Proofs, we minimize data exposure and maximize user control, meeting the highest privacy standards.',
    },
    {
      question: 'What is a blockchain hash?',
      answer: 'A blockchain hash is a unique cryptographic fingerprint of your data created using SHA-256 algorithm. It\'s like a digital seal that proves your data hasn\'t been tampered with, without revealing the actual data. Every action on our platform generates a unique hash recorded on the blockchain.',
    },
    {
      question: 'Can I delete my identity from the blockchain?',
      answer: 'The blockchain records (hashes and transaction logs) are immutable and cannot be deleted - this is a security feature. However, you can delete your actual personal data and documents from our encrypted storage at any time. The blockchain only contains hashes, not your raw data.',
    },
    {
      question: 'How does cross-border verification work?',
      answer: 'Organizations from any country can request verification through our platform. Because verification uses blockchain and Zero-Knowledge Proofs, there are no geographical restrictions or complex international data transfer agreements. Everything is handled through cryptographic verification.',
    },
    {
      question: 'What types of documents can I upload?',
      answer: 'You can upload various identity documents including passports, driver\'s licenses, national IDs, birth certificates, academic credentials, and professional certifications. All documents are encrypted with AES-256 before storage.',
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300">
            Everything you need to know about blockchain identity verification
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`w-6 h-6 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="glass-card p-12 mt-12 text-center bg-gradient-to-br from-neon-blue/10 to-neon-purple/10">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-gray-300 mb-6">
            Our team is here to help you understand blockchain identity verification
          </p>
          <a href="/contact" className="btn-primary">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}