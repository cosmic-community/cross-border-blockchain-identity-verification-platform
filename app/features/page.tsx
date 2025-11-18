import { Shield, Lock, Globe, Zap, CheckCircle, Users, FileText, BarChart } from 'lucide-react'

export default function FeaturesPage() {
  const features = [
    {
      icon: Shield,
      title: 'Blockchain Security',
      description: 'Every verification is recorded on an immutable blockchain, creating a permanent audit trail.',
      color: 'neon-blue',
    },
    {
      icon: Lock,
      title: 'Zero-Knowledge Proofs',
      description: 'Prove your identity without revealing personal data using advanced cryptographic techniques.',
      color: 'neon-green',
    },
    {
      icon: Globe,
      title: 'Cross-Border Verification',
      description: 'Seamless identity verification across international boundaries and regulatory frameworks.',
      color: 'neon-purple',
    },
    {
      icon: Zap,
      title: 'Instant Verification',
      description: 'Real-time identity verification with immediate blockchain confirmation.',
      color: 'neon-blue',
    },
    {
      icon: CheckCircle,
      title: 'Smart Contracts',
      description: 'Automated verification logic with transparent, tamper-proof smart contracts.',
      color: 'neon-green',
    },
    {
      icon: Users,
      title: 'Multi-Role Support',
      description: 'Separate interfaces for users, verification agencies, and organizations.',
      color: 'neon-purple',
    },
    {
      icon: FileText,
      title: 'Document Encryption',
      description: 'Military-grade AES-256 encryption protects all stored identity documents.',
      color: 'neon-blue',
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights into verification requests, status, and blockchain transactions.',
      color: 'neon-green',
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Platform Features
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need for secure, privacy-preserving identity verification
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="glass-card p-8 hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-${feature.color}/20 flex items-center justify-center`}>
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

        {/* Technical Features */}
        <div className="glass-card p-12 mb-16">
          <h2 className="text-4xl font-bold text-neon-blue mb-8">Technical Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-neon-green">Security</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-neon-green mt-1 flex-shrink-0" />
                  <span>SHA-256 blockchain hashing for identity verification</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-neon-green mt-1 flex-shrink-0" />
                  <span>AES-256 encryption for document storage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-neon-green mt-1 flex-shrink-0" />
                  <span>Zero-Knowledge Proof architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-neon-green mt-1 flex-shrink-0" />
                  <span>Immutable blockchain audit trails</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-neon-green mt-1 flex-shrink-0" />
                  <span>Multi-signature verification workflows</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-neon-purple">Integration</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-neon-purple mt-1 flex-shrink-0" />
                  <span>RESTful API for easy integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-neon-purple mt-1 flex-shrink-0" />
                  <span>Webhook notifications for status updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-neon-purple mt-1 flex-shrink-0" />
                  <span>SDK support for major programming languages</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-neon-purple mt-1 flex-shrink-0" />
                  <span>Real-time blockchain event streaming</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-neon-purple mt-1 flex-shrink-0" />
                  <span>Comprehensive API documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="glass-card p-12">
          <h2 className="text-4xl font-bold text-neon-green mb-8">Use Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Financial Services</h3>
              <p className="text-gray-400">
                KYC compliance for banking, lending, and cryptocurrency exchanges
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Healthcare</h3>
              <p className="text-gray-400">
                Patient identity verification for telemedicine and cross-border care
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Employment</h3>
              <p className="text-gray-400">
                Background checks for remote and international hiring
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Education</h3>
              <p className="text-gray-400">
                Academic credential verification for global universities
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Government</h3>
              <p className="text-gray-400">
                Citizen identity for visa, immigration, and public services
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">E-Commerce</h3>
              <p className="text-gray-400">
                Age verification and fraud prevention for online platforms
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="/register" className="btn-primary text-lg px-8 py-4">
            Start Using These Features
          </a>
        </div>
      </div>
    </div>
  )
}