export default function CTA() {
  return (
    <section className="py-24 px-6"
      style={{ background: 'var(--oceanic-noir)' }}>
      <div className="max-w-4xl mx-auto">

        <div className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, var(--nocturnal) 0%, var(--oceanic-noir) 100%)',
            border: '1px solid rgba(255,200,1,0.2)',
          }}>

          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
            style={{ background: 'var(--forsythia)' }}></div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
            style={{
              background: 'rgba(255,200,1,0.15)',
              color: 'var(--forsythia)',
              border: '1px solid rgba(255,200,1,0.3)'
            }}>
            <span className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: 'var(--forsythia)' }}></span>
            No credit card required
          </div>

          <h2 className="mono text-3xl md:text-5xl font-bold mb-6 relative z-10"
            style={{ color: 'var(--arctic-powder)' }}>
            Ready to automate<br />
            <span style={{ color: 'var(--forsythia)' }}>your data?</span>
          </h2>

          <p className="text-lg mb-10 max-w-xl mx-auto relative z-10"
            style={{ color: 'var(--mystic-mint)' }}>
            Join 500+ teams already using NeuralFlow to ship faster,
            eliminate manual pipelines, and make data work for them.
          </p>

          <div className="flex flex-wrap gap-4 justify-center relative z-10">
            <a href="#pricing"
              className="px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-150 hover:opacity-90"
              style={{
                background: 'var(--forsythia)',
                color: 'var(--oceanic-noir)',
              }}>
              Start Free Trial — 14 days free
            </a>
            <a href="#features"
              className="px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-150"
              style={{
                border: '1px solid rgba(255,200,1,0.3)',
                color: 'var(--arctic-powder)',
              }}>
              See all features →
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 pt-10 relative z-10"
            style={{ borderTop: '1px solid rgba(17,76,90,0.6)' }}>
            {[
              { value: '14-day', label: 'Free trial' },
              { value: 'No CC', label: 'Required' },
              { value: 'Cancel', label: 'Anytime' },
            ].map(item => (
              <div key={item.label} className="text-center">
                <div className="mono text-lg font-bold" style={{ color: 'var(--forsythia)' }}>
                  {item.value}
                </div>
                <div className="text-xs mt-1" style={{ color: 'var(--mystic-mint)' }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}