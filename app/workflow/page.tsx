import { ArrowRight, CheckCircle } from 'lucide-react'

export default function WorkflowPage() {
  const steps = [
    {
      number: '01',
      title: 'User Registration',
      description: 'Create your account with email and phone verification. Your identity is immediately hashed and recorded on the blockchain.',
      details: [
        'Secure account creation',
        'Multi-factor authentication',
        'Blockchain hash generation',
        'Initial ZKP key pair creation'
      ]
    },
    {
      number: '02',
      title: 'Document Upload',
      description: 'Upload identity documents which are encrypted using AES-256 and stored securely. A blockchain hash is generated for integrity verification.',
      details: [
        'Military-grade encryption',
        'Secure document storage',
        'SHA-256 hash generation',
        'Immutable blockchain record'
      ]
    },
    {
      number: '03',
      title: 'Verification Request',
      description: 'Organizations submit verification requests to access your identity proof. You maintain complete control over who can verify you.',
      details: [
        'Organization authentication',
        'Request notification',
        'Purpose specification',
        'Smart contract deployment'
      ]
    },
    {
      number: '04',
      title: 'ZKP Generation',
      description: 'Zero-Knowledge Proofs are generated, allowing verification without exposing your actual documents or personal data.',
      details: [
        'Cryptographic proof generation',
        'Privacy preservation',
        'No data exposure',
        'Verifiable credentials'
      ]
    },
    {
      number: '05',
      title: 'User Approval',
      description: 'Review the verification request and approve or reject it. Your decision is recorded on the blockchain for audit purposes.',
      details: [
        'Request review dashboard',
        'Approve/reject controls',
        'Reason documentation',
        'Blockchain confirmation'
      ]
    },
    {
      number: '06',
      title: 'Verification Complete',
      description: 'Organization receives blockchain-verified proof of your identity without accessing raw data. All parties receive confirmation.',
      details: [
        'Verified credential delivery',
        'Blockchain transaction record',
        'Audit trail creation',
        'Status notifications'
      ]
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Verification Workflow
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A secure, transparent process from registration to verification
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="max-w-5xl mx-auto space-y-12 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="glass-card p-8 md:p-12">
                <div className="flex items-start gap-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                      <span className="text-2xl md:text-3xl font-bold">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="grid md:grid-cols-2 gap-3">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-neon-green flex-shrink-0" />
                          <span className="text-gray-400">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-8">
                  <ArrowRight className="w-8 h-8 text-neon-blue animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Technical Flow Diagram */}
        <div className="glass-card p-12 mb-16">
          <h2 className="text-4xl font-bold text-neon-blue mb-8 text-center">Technical Architecture</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-neon-blue/20 flex items-center justify-center">
                <span className="text-3xl">🔐</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Encryption Layer</h3>
              <p className="text-gray-400">
                AES-256 encryption protects all stored documents and personal data
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-neon-green/20 flex items-center justify-center">
                <span className="text-3xl">⛓️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Blockchain Layer</h3>
              <p className="text-gray-400">
                SHA-256 hashing with immutable blockchain storage for all transactions
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-neon-purple/20 flex items-center justify-center">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold mb-3">ZKP Layer</h3>
              <p className="text-gray-400">
                Zero-Knowledge Proofs enable verification without data exposure
              </p>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="glass-card p-12 mb-16">
          <h2 className="text-4xl font-bold text-neon-green mb-8">Security at Every Step</h2>
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">End-to-End Encryption</h3>
              <p>All data is encrypted from the moment it enters our system until verification is complete.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Blockchain Immutability</h3>
              <p>Every action is recorded on the blockchain, creating a tamper-proof audit trail.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">User Consent</h3>
              <p>No verification can occur without explicit user approval, ensuring complete control.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Privacy by Design</h3>
              <p>Zero-Knowledge Proofs mean organizations never see your raw documents or personal data.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <div className="flex justify-center gap-4">
            <a href="/register" className="btn-primary">
              Create Account
            </a>
            <a href="/contact" className="btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}