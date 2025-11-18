import { Check } from 'lucide-react'

export default function PricingPage() {
  const plans = [
    {
      name: 'Individual',
      price: 'Free',
      description: 'Perfect for personal identity verification',
      features: [
        'Unlimited identity verifications',
        'Blockchain-secured storage',
        'Zero-Knowledge Proof verification',
        'Basic dashboard access',
        'Email support',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Organization',
      price: '$99',
      period: '/month',
      description: 'For businesses requiring identity verification',
      features: [
        'Everything in Individual',
        'Unlimited verification requests',
        'Advanced analytics dashboard',
        'API access',
        'Priority support',
        'Custom branding',
        'Webhook integrations',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale verification operations',
      features: [
        'Everything in Organization',
        'Dedicated blockchain infrastructure',
        'Custom smart contracts',
        'White-label solution',
        'SLA guarantees',
        '24/7 premium support',
        'On-premise deployment option',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the plan that's right for you. All plans include blockchain security and Zero-Knowledge Proofs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card p-8 relative ${
                plan.popular ? 'border-2 border-neon-blue scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-neon-blue to-neon-green rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                  {plan.period && <span className="text-gray-400">{plan.period}</span>}
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.name === 'Enterprise' ? '/contact' : '/register'}
                className={`w-full py-3 rounded-lg font-semibold text-center block transition-all ${
                  plan.popular
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="glass-card p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">All Plans Include</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-neon-green flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Blockchain Security</p>
                <p className="text-sm text-gray-400">SHA-256 hashing with immutable records</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-neon-green flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Zero-Knowledge Proofs</p>
                <p className="text-sm text-gray-400">Privacy-preserving verification</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-neon-green flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">AES-256 Encryption</p>
                <p className="text-sm text-gray-400">Military-grade data protection</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-neon-green flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Smart Contracts</p>
                <p className="text-sm text-gray-400">Automated verification workflows</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-neon-green flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Cross-Border Support</p>
                <p className="text-sm text-gray-400">Global verification capabilities</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-neon-green flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Audit Trails</p>
                <p className="text-sm text-gray-400">Complete transaction history</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}