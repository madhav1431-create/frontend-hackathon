import { useState } from 'react'
import { pricingMatrix } from '../data/pricingMatrix'

const tiers = [
  {
    name: 'Starter',
    description: 'Perfect for small teams getting started with data automation.',
    features: ['5 data pipelines', '10GB storage', 'Basic analytics', 'Email support'],
    highlighted: false,
  },
  {
    name: 'Pro',
    description: 'For growing teams that need more power and flexibility.',
    features: ['Unlimited pipelines', '100GB storage', 'Advanced analytics', 'Priority support', 'API access'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for large organizations with complex needs.',
    features: ['Unlimited everything', '1TB+ storage', 'Custom AI models', 'Dedicated support', 'SLA guarantee', 'SSO & SAML'],
    highlighted: false,
  },
]

function getPrice(tierName, currency, isAnnual) {
  const base = pricingMatrix.base[tierName]
  const rate = pricingMatrix.currencyRates[currency]
  const symbol = pricingMatrix.currencySymbols[currency]
  const monthly = base * rate
  const final = isAnnual ? monthly * 12 * pricingMatrix.annualDiscount : monthly
  return `${symbol}${Math.round(final)}`
}

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [currency, setCurrency] = useState('USD')

  return (
    <section id="pricing" className="py-24 px-6"
      style={{ background: 'var(--nocturnal)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium mb-3 mono" style={{ color: 'var(--forsythia)' }}>PRICING</p>
          <h2 className="mono text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--arctic-powder)' }}>
            Simple, transparent pricing
          </h2>
          <p className="text-lg" style={{ color: 'var(--mystic-mint)' }}>
            No hidden fees. Cancel anytime.
          </p>
        </div>

        {/* Controls — Toggle + Currency */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">

          {/* Billing Toggle */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium" style={{ color: isAnnual ? 'var(--mystic-mint)' : 'var(--arctic-powder)' }}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-12 h-6 rounded-full transition-colors duration-200"
              style={{ background: isAnnual ? 'var(--forsythia)' : 'rgba(17,76,90,0.8)' }}>
              <span className="absolute top-1 w-4 h-4 rounded-full transition-all duration-200"
                style={{
                  background: 'white',
                  left: isAnnual ? '28px' : '4px',
                }}></span>
            </button>
            <span className="text-sm font-medium" style={{ color: isAnnual ? 'var(--arctic-powder)' : 'var(--mystic-mint)' }}>
              Annual
            </span>
            {isAnnual && (
              <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
                style={{ background: 'rgba(255,200,1,0.2)', color: 'var(--forsythia)' }}>
                Save 20%
              </span>
            )}
          </div>

          {/* Currency Selector */}
          <select
            value={currency}
            onChange={e => setCurrency(e.target.value)}
            className="px-4 py-2 rounded-lg text-sm font-medium outline-none cursor-pointer"
            style={{
              background: 'rgba(17,76,90,0.6)',
              color: 'var(--arctic-powder)',
              border: '1px solid rgba(17,76,90,0.8)',
            }}>
            <option value="USD">$ USD</option>
            <option value="INR">₹ INR</option>
            <option value="EUR">€ EUR</option>
          </select>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name}
              className="rounded-2xl p-8 flex flex-col transition-all duration-200"
              style={{
                background: tier.highlighted ? 'var(--forsythia)' : 'rgba(23,43,54,0.8)',
                border: tier.highlighted ? 'none' : '1px solid rgba(17,76,90,0.6)',
                transform: tier.highlighted ? 'scale(1.05)' : 'scale(1)',
              }}>

              {tier.highlighted && (
                <div className="text-xs font-bold mb-4 mono"
                  style={{ color: 'var(--oceanic-noir)' }}>
                  ★ MOST POPULAR
                </div>
              )}

              <h3 className="mono text-xl font-bold mb-2"
                style={{ color: tier.highlighted ? 'var(--oceanic-noir)' : 'var(--arctic-powder)' }}>
                {tier.name}
              </h3>

              <p className="text-sm mb-6"
                style={{ color: tier.highlighted ? 'var(--nocturnal)' : 'var(--mystic-mint)' }}>
                {tier.description}
              </p>

              {/* Price */}
              <div className="mb-2">
                <span className="mono text-4xl font-bold"
                  style={{ color: tier.highlighted ? 'var(--oceanic-noir)' : 'var(--arctic-powder)' }}>
                  {getPrice(tier.name, currency, isAnnual)}
                </span>
                <span className="text-sm ml-1"
                  style={{ color: tier.highlighted ? 'var(--nocturnal)' : 'var(--mystic-mint)' }}>
                  {isAnnual ? '/year' : '/month'}
                </span>
              </div>

              <p className="text-xs mb-6"
                style={{ color: tier.highlighted ? 'var(--nocturnal)' : 'var(--mystic-mint)' }}>
                {isAnnual ? 'billed annually' : 'billed monthly'}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {tier.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm"
                    style={{ color: tier.highlighted ? 'var(--oceanic-noir)' : 'var(--mystic-mint)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
                      <path stroke={tier.highlighted ? 'var(--oceanic-noir)' : 'var(--forsythia)'}
                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#"
                className="text-center py-3 rounded-xl font-semibold text-sm transition-all duration-150"
                style={{
                  background: tier.highlighted ? 'var(--oceanic-noir)' : 'var(--forsythia)',
                  color: tier.highlighted ? 'var(--forsythia)' : 'var(--oceanic-noir)',
                }}>
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}