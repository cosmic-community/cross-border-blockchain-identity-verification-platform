import { ArrowRight, Shield } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto glass-card p-12 md:p-16 text-center relative overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-green/10 to-neon-purple/10" />
          
          {/* Content */}
          <div className="relative z-10">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center animate-pulse-slow">
              <Shield className="w-10 h-10" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Secure Your <span className="gradient-text">Digital Identity?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust blockchain technology for secure, 
              privacy-preserving identity verification.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/register" className="btn-primary text-lg px-8 py-4 flex items-center gap-2">
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/contact" className="btn-secondary text-lg px-8 py-4">
                Contact Sales
              </a>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold gradient-text mb-2">256-bit</p>
                <p className="text-gray-400">Encryption Standard</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text mb-2">100%</p>
                <p className="text-gray-400">Privacy Guaranteed</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text mb-2">24/7</p>
                <p className="text-gray-400">Blockchain Security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}