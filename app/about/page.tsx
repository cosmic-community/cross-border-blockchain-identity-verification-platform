import { Shield, Globe, Lock, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            About Our Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionizing identity verification through blockchain technology and Zero-Knowledge Proofs
          </p>
        </div>

        {/* Mission Section */}
        <div className="glass-card p-12 mb-16">
          <h2 className="text-4xl font-bold text-neon-blue mb-6">Our Mission</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            We're building the future of digital identity verification. In an increasingly connected world, 
            the need for secure, privacy-preserving identity verification has never been greater. Our platform 
            combines cutting-edge blockchain technology with Zero-Knowledge Proofs to create a system where 
            users maintain complete control over their personal data.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            No more sharing sensitive documents with every organization. No more worrying about data breaches. 
            With our platform, verification happens without exposing your raw data, giving you security and 
            privacy in the digital age.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="glass-card p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-blue/20 flex items-center justify-center">
              <Shield className="w-8 h-8 text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3">Security First</h3>
            <p className="text-gray-400">
              Military-grade encryption and blockchain security protect your identity
            </p>
          </div>

          <div className="glass-card p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-green/20 flex items-center justify-center">
              <Lock className="w-8 h-8 text-neon-green" />
            </div>
            <h3 className="text-xl font-bold mb-3">Privacy Guaranteed</h3>
            <p className="text-gray-400">
              Zero-Knowledge Proofs ensure verification without data exposure
            </p>
          </div>

          <div className="glass-card p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-purple/20 flex items-center justify-center">
              <Globe className="w-8 h-8 text-neon-purple" />
            </div>
            <h3 className="text-xl font-bold mb-3">Global Access</h3>
            <p className="text-gray-400">
              Cross-border verification for a connected world
            </p>
          </div>

          <div className="glass-card p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-blue/20 flex items-center justify-center">
              <Users className="w-8 h-8 text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3">User Control</h3>
            <p className="text-gray-400">
              You decide who can verify your identity and when
            </p>
          </div>
        </div>

        {/* Technology Section */}
        <div className="glass-card p-12 mb-16">
          <h2 className="text-4xl font-bold text-neon-green mb-6">Our Technology</h2>
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Blockchain Foundation</h3>
              <p className="leading-relaxed">
                Every identity verification is recorded on the blockchain, creating an immutable audit trail. 
                Our smart contracts ensure that verification logic is transparent and tamper-proof.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Zero-Knowledge Proofs</h3>
              <p className="leading-relaxed">
                Using advanced cryptographic techniques, we can prove you have valid credentials without 
                revealing the actual data. Organizations get verification without seeing your documents.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">AES-256 Encryption</h3>
              <p className="leading-relaxed">
                All stored data is encrypted using military-grade AES-256 encryption, ensuring your 
                information is protected even if systems are compromised.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Decentralized Architecture</h3>
              <p className="leading-relaxed">
                No single point of failure. Our distributed system ensures availability and resistance 
                to attacks, keeping your identity secure 24/7.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-neon-purple mb-6">Built for the Future</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Our platform is designed to scale with the growing demands of digital identity verification. 
            Whether you're an individual user, a verification agency, or a global organization, we provide 
            the tools and security you need to operate with confidence in the digital age.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/register" className="btn-primary">
              Get Started
            </a>
            <a href="/contact" className="btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}