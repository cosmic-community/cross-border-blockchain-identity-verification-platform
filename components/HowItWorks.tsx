import { UserPlus, Upload, FileCheck, CheckCircle } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Register Your Identity',
      description: 'Create your account and generate blockchain hash with Zero-Knowledge Proof keys',
      color: 'neon-blue',
    },
    {
      icon: Upload,
      title: 'Upload Documents',
      description: 'Securely upload identity documents with AES-256 encryption and blockchain storage',
      color: 'neon-green',
    },
    {
      icon: FileCheck,
      title: 'Receive Requests',
      description: 'Organizations request verification. You approve or reject with complete control',
      color: 'neon-purple',
    },
    {
      icon: CheckCircle,
      title: 'Verification Complete',
      description: 'Organizations receive blockchain proof without accessing your raw data',
      color: 'neon-blue',
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Simple, secure, and privacy-preserving verification in four steps
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  <div className="glass-card p-8 h-full hover:scale-105 transition-transform">
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-xl font-bold">
                      {index + 1}
                    </div>
                    <div className={`w-16 h-16 mb-6 rounded-2xl bg-${step.color}/20 flex items-center justify-center mt-4`}>
                      <Icon className={`w-8 h-8 text-${step.color}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-neon-blue to-neon-green" />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="/workflow" className="btn-secondary">
            View Detailed Workflow
          </a>
        </div>
      </div>
    </section>
  )
}