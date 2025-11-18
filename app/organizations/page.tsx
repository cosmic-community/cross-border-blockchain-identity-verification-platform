import { Building2, Globe, Shield, CheckCircle, ArrowRight } from 'lucide-react'

export default function OrganizationsPage() {
  const benefits = [
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'Meet KYC/AML requirements without storing raw personal data. Blockchain provides audit-ready verification records.',
    },
    {
      icon: Globe,
      title: 'Global Verification',
      description: 'Verify identities across borders instantly. No need for manual document review or international partnerships.',
    },
    {
      icon: CheckCircle,
      title: 'Instant Results',
      description: 'Real-time verification with blockchain confirmation. No waiting periods or manual review processes.',
    },
  ]

  const industries = [
    'Financial Services',
    'Healthcare',
    'E-Commerce',
    'Travel & Hospitality',
    'Gaming & Entertainment',
    'Education',
    'Government Services',
    'Real Estate',
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8">
            <Building2 className="w-4 h-4 text-neon-blue" />
            <span className="text-sm font-semibold">For Organizations</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Verify Identities Globally
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Request identity verification from users worldwide without accessing their personal data. 
            Powered by blockchain and Zero-Knowledge Proofs.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/register" className="btn-primary">
              Get Started
            </a>
            <a href="/contact" className="btn-secondary">
              Schedule Demo
            </a>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="glass-card p-8">
                <div className="w-16 h-16 mb-6 rounded-2xl bg-neon-blue/20 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-neon-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        {/* How It Works */}
        <div className="glass-card p-12 mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center gradient-text">
            How Organization Verification Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h3 className="font-bold mb-2">Submit Request</h3>
              <p className="text-sm text-gray-400">
                Request verification from a user by providing purpose and required fields
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h3 className="font-bold mb-2">User Reviews</h3>
              <p className="text-sm text-gray-400">
                User receives notification and reviews your verification request
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h3 className="font-bold mb-2">ZKP Generated</h3>
              <p className="text-sm text-gray-400">
                If approved, Zero-Knowledge Proof is generated from user's data
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-2xl font-bold">
                4
              </div>
              <h3 className="font-bold mb-2">Receive Proof</h3>
              <p className="text-sm text-gray-400">
                Get blockchain-verified proof without accessing raw personal data
              </p>
            </div>
          </div>
        </div>

        {/* Industries */}
        <div className="glass-card p-12 mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center">Trusted by Industries Worldwide</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-dark-card p-6 rounded-xl border border-dark-border text-center hover:border-neon-blue/50 transition-all"
              >
                <p className="font-semibold">{industry}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="glass-card p-12 text-center bg-gradient-to-br from-neon-blue/10 to-neon-purple/10">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations using blockchain-powered identity verification
          </p>
          <div className="flex justify-center gap-4">
            <a href="/register" className="btn-primary flex items-center gap-2">
              Create Organization Account
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/pricing" className="btn-secondary">
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}