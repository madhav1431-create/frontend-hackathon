import { useState } from 'react'

const faqs = [
  {
    q: 'How is NeuralFlow different from traditional ETL tools?',
    a: 'NeuralFlow uses AI to automatically detect schema changes, suggest transformations, and optimize pipeline performance — no manual configuration needed. Traditional ETL tools require you to write and maintain every rule yourself.',
  },
  {
    q: 'Which data sources does NeuralFlow support?',
    a: 'NeuralFlow connects to 200+ sources out of the box — including Postgres, MySQL, Snowflake, Kafka, Stripe, Salesforce, and REST APIs. New connectors are added every month.',
  },
  {
    q: 'How does the annual billing discount work?',
    a: 'Switching to annual billing gives you 20% off your monthly rate, billed as one upfront payment. You can switch at any time and the discount applies immediately to your next billing cycle.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. NeuralFlow is SOC 2 Type II certified, GDPR compliant, and HIPAA ready. All data is encrypted in transit and at rest. You can also run NeuralFlow in your own VPC for full data isolation.',
  },
  {
    q: 'Can I try NeuralFlow before paying?',
    a: 'Absolutely. Every new account gets a 14-day free trial of the Pro plan — no credit card required. You can invite your team, connect real data sources, and build live pipelines during the trial.',
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section id="faq" className="py-24 px-6"
      style={{ background: 'var(--nocturnal)' }}>
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-sm font-medium mb-3 mono" style={{ color: 'var(--forsythia)' }}>FAQ</p>
          <h2 className="mono text-3xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--arctic-powder)' }}>
            Questions, answered.
          </h2>
          <p className="text-lg" style={{ color: 'var(--mystic-mint)' }}>
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl overflow-hidden"
              style={{
                border: activeIndex === i
                  ? '1px solid var(--forsythia)'
                  : '1px solid rgba(17,76,90,0.6)',
                transition: 'border-color 200ms ease-out',
              }}>

              {/* Question */}
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                style={{ background: activeIndex === i ? 'rgba(255,200,1,0.05)' : 'rgba(17,76,90,0.2)' }}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}>
                <span className="font-semibold text-sm pr-4"
                  style={{ color: 'var(--arctic-powder)' }}>
                  {faq.q}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  className="w-5 h-5 shrink-0"
                  style={{
                    color: 'var(--forsythia)',
                    transform: activeIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 200ms ease-out',
                  }}
                  fill="none">
                  <path stroke="currentColor" strokeLinecap="round"
                    strokeLinejoin="round" strokeWidth="1.5"
                    d="m19.5 8.25l-7.5 7.5l-7.5-7.5" />
                </svg>
              </button>

              {/* Answer */}
              <div style={{
                maxHeight: activeIndex === i ? '300px' : '0',
                overflow: 'hidden',
                transition: 'max-height 350ms ease-in-out',
              }}>
                <div className="px-6 py-5"
                  style={{ background: 'rgba(17,76,90,0.1)' }}>
                  <p className="text-sm leading-relaxed"
                    style={{ color: 'var(--mystic-mint)' }}>
                    {faq.a}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}