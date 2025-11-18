import { Shield, Lock, Globe, Zap, CheckCircle, Users } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Blockchain Security',
      description: 'Every verification is recorded on an immutable blockchain with SHA-256 hashing for maximum security.',
      color: 'neon-blue',
    },
    {
      icon: Lock,
      title: 'Zero-Knowledge Proofs',
      description: 'Verify your identity without revealing personal data using advanced cryptographic techniques.',
      color: 'neon-green',
    },
    {
      icon: Globe,
      title: 'Cross-Border Verification',
      description: 'Organizations worldwide can verify your identity without accessing raw documents or data.',
      color: 'neon-purple',
    },
    {
      icon: Zap,
      title: 'Instant Verification',
      description: 'Real-time identity verification with immediate blockchain confirmation and smart contracts.',
      color: 'neon-blue',
    },
    {
      icon: CheckCircle,
      title: 'User Control',
      description: 'You decide who can verify your identity. Approve or reject requests with complete transparency.',
      color: 'neon-green',
    },
    {
      icon: Users,
      title: 'Multi-Role Support',
      description: 'Separate interfaces for users, verification agencies, and global organization partners.',
      color: 'neon-purple',
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Platform Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need for secure, privacy-preserving identity verification
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="glass-card p-8 hover:scale-105 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-${feature.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-8 h-8 text-${feature.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}