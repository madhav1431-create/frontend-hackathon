const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at DataScale',
    text: 'NeuralFlow cut our pipeline setup time from weeks to hours. The AI-assisted config is genuinely magical.',
    avatar: 'SC',
  },
  {
    name: 'Marcus Williams',
    role: 'Head of Data, Finova',
    text: 'We process 50M records daily with zero downtime. The reliability and performance are unmatched.',
    avatar: 'MW',
  },
  {
    name: 'Priya Patel',
    role: 'Data Engineer, Shopstream',
    text: 'Finally a platform that thinks like an engineer. The query interface alone saved us 20 hours a week.',
    avatar: 'PP',
  },
]

const companies = ['Stripe', 'Notion', 'Linear', 'Vercel', 'Figma', 'Supabase']

const stats = [
  { value: '500+', label: 'Companies trust us' },
  { value: '99.9%', label: 'Uptime guaranteed' },
  { value: '10B+', label: 'Records processed' },
  { value: '4.9/5', label: 'Average rating' },
]

export default function SocialProof() {
  return (
    <section id="about" className="py-24 px-6"
      style={{ background: 'var(--oceanic-noir)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map(stat => (
            <div key={stat.label} className="text-center p-6 rounded-2xl"
              style={{ background: 'rgba(17,76,90,0.3)', border: '1px solid rgba(17,76,90,0.6)' }}>
              <div className="mono text-3xl font-bold mb-1" style={{ color: 'var(--forsythia)' }}>
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: 'var(--mystic-mint)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trusted by */}
        <div className="text-center mb-10">
          <p className="text-sm mb-6" style={{ color: 'var(--mystic-mint)' }}>
            TRUSTED BY TEAMS AT
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {companies.map(company => (
              <span key={company} className="mono text-lg font-bold opacity-40 hover:opacity-80 transition-opacity duration-150"
                style={{ color: 'var(--arctic-powder)' }}>
                {company}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 h-px" style={{ background: 'rgba(17,76,90,0.6)' }}></div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium mb-3 mono" style={{ color: 'var(--forsythia)' }}>TESTIMONIALS</p>
          <h2 className="mono text-3xl md:text-4xl font-bold" style={{ color: 'var(--arctic-powder)' }}>
            Loved by data teams
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl p-6"
              style={{ background: 'rgba(17,76,90,0.3)', border: '1px solid rgba(17,76,90,0.6)' }}>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: 'var(--forsythia)' }}>★</span>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--mystic-mint)' }}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mono text-sm font-bold"
                  style={{ background: 'var(--nocturnal)', color: 'var(--forsythia)' }}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--arctic-powder)' }}>{t.name}</div>
                  <div className="text-xs" style={{ color: 'var(--mystic-mint)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}