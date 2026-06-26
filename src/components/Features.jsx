import { useState, useEffect } from 'react'

const features = [
  {
    title: 'Smart Analytics',
    description: 'Real-time dashboards that surface insights automatically. No SQL needed — just ask in plain English.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="none">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
          d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
      </svg>
    ),
    size: 'tall',
    accent: 'var(--forsythia)',
    stat: '10x',
    statLabel: 'faster insights',
  },
  {
    title: 'Automated Pipelines',
    description: 'Build and deploy data pipelines in minutes with AI-assisted configuration.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="none">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    size: 'normal',
    accent: 'var(--deep-saffron)',
    stat: '200+',
    statLabel: 'connectors',
  },
  {
    title: 'Growth Tracking',
    description: 'Monitor KPIs with predictive AI that flags anomalies before they become problems.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="none">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    size: 'normal',
    accent: 'var(--forsythia)',
    stat: '99.9%',
    statLabel: 'uptime SLA',
  },
  {
    title: 'Seamless Integrations',
    description: 'Connect to 200+ data sources with one click. REST, GraphQL, databases — all supported out of the box.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="none">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
          d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037a.75.75 0 0 1-.646 1.353a5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353a5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037a.75.75 0 0 1-.354-1Z" />
      </svg>
    ),
    size: 'wide',
    accent: 'var(--deep-saffron)',
    stat: '3x',
    statLabel: 'faster setup',
  },
  {
    title: 'Smart Search',
    description: 'Query your entire data warehouse in plain English.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-7 h-7" fill="currentColor">
        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
      </svg>
    ),
    size: 'normal',
    accent: 'var(--forsythia)',
    stat: '<100ms',
    statLabel: 'query time',
  },
  {
    title: 'Advanced Config',
    description: 'Fine-tune every parameter with granular controls for power users.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="none">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
          d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93c.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204c.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78c-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107c-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93c-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204c-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78c.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107c.397-.165.71-.505.78-.929l.15-.894Z M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
      </svg>
    ),
    size: 'normal',
    accent: 'var(--deep-saffron)',
    stat: '50+',
    statLabel: 'config options',
  },
]

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section id="features" className="py-24 px-6"
      style={{ background: 'var(--oceanic-noir)' }}>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-sm font-medium mb-3 mono" style={{ color: 'var(--forsythia)' }}>PLATFORM</p>
          <h2 className="mono text-3xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--arctic-powder)' }}>
            Everything your data team<br />needs, in one platform.
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--mystic-mint)' }}>
            Stop stitching together six vendors. NeuralFlow replaces ETL,
            orchestration, and ML inference with one AI-native platform.
          </p>
        </div>

        {/* DESKTOP — Bento Grid */}
        {!isMobile && (
          <div className="grid grid-cols-3 auto-rows-auto gap-4">

            {/* Row 1: tall card + 2 normal */}
            {/* Tall card — spans 2 rows */}
            <div
              className="row-span-2 rounded-2xl p-7 cursor-pointer flex flex-col justify-between transition-all duration-200"
              style={{
                background: activeIndex === 0
                  ? 'linear-gradient(160deg, var(--nocturnal), var(--oceanic-noir))'
                  : 'rgba(17,76,90,0.35)',
                border: activeIndex === 0
                  ? '1px solid var(--forsythia)'
                  : '1px solid rgba(17,76,90,0.6)',
                transform: activeIndex === 0 ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: activeIndex === 0 ? '0 12px 40px rgba(255,200,1,0.1)' : 'none',
              }}
              onMouseEnter={() => setActiveIndex(0)}
              onMouseLeave={() => setActiveIndex(null)}>
              <div>
                <div className="mb-5 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(255,200,1,0.15)' }}>
                  <span style={{ color: features[0].accent }}>{features[0].icon}</span>
                </div>
                <h3 className="mono font-bold text-xl mb-3" style={{ color: 'var(--arctic-powder)' }}>
                  {features[0].title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--mystic-mint)' }}>
                  {features[0].description}
                </p>
              </div>
              <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(17,76,90,0.6)' }}>
                <div className="mono text-4xl font-bold" style={{ color: features[0].accent }}>
                  {features[0].stat}
                </div>
                <div className="text-xs mt-1" style={{ color: 'var(--mystic-mint)' }}>
                  {features[0].statLabel}
                </div>
              </div>
            </div>

            {/* Normal cards */}
            {features.slice(1, 3).map((feature, i) => (
              <div key={i + 1}
                className="rounded-2xl p-6 cursor-pointer flex flex-col justify-between transition-all duration-200"
                style={{
                  background: activeIndex === i + 1
                    ? 'linear-gradient(135deg, var(--nocturnal), var(--oceanic-noir))'
                    : 'rgba(17,76,90,0.35)',
                  border: activeIndex === i + 1
                    ? `1px solid ${feature.accent}`
                    : '1px solid rgba(17,76,90,0.6)',
                  transform: activeIndex === i + 1 ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: activeIndex === i + 1 ? `0 12px 40px rgba(255,153,50,0.1)` : 'none',
                }}
                onMouseEnter={() => setActiveIndex(i + 1)}
                onMouseLeave={() => setActiveIndex(null)}>
                <div>
                  <div className="mb-4 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(255,153,50,0.15)' }}>
                    <span style={{ color: feature.accent }}>{feature.icon}</span>
                  </div>
                  <h3 className="mono font-bold text-lg mb-2" style={{ color: 'var(--arctic-powder)' }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--mystic-mint)' }}>
                    {feature.description}
                  </p>
                </div>
                <div className="mt-4">
                  <span className="mono text-2xl font-bold" style={{ color: feature.accent }}>
                    {feature.stat}
                  </span>
                  <span className="text-xs ml-2" style={{ color: 'var(--mystic-mint)' }}>
                    {feature.statLabel}
                  </span>
                </div>
              </div>
            ))}

            {/* Row 2 col 2-3: wide card */}
            <div
              className="col-span-2 rounded-2xl p-6 cursor-pointer transition-all duration-200"
              style={{
                background: activeIndex === 3
                  ? 'linear-gradient(135deg, var(--nocturnal), var(--oceanic-noir))'
                  : 'rgba(17,76,90,0.35)',
                border: activeIndex === 3
                  ? '1px solid var(--deep-saffron)'
                  : '1px solid rgba(17,76,90,0.6)',
                transform: activeIndex === 3 ? 'translateY(-4px)' : 'translateY(0)',
              }}
              onMouseEnter={() => setActiveIndex(3)}
              onMouseLeave={() => setActiveIndex(null)}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-4 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(255,153,50,0.15)' }}>
                    <span style={{ color: 'var(--deep-saffron)' }}>{features[3].icon}</span>
                  </div>
                  <h3 className="mono font-bold text-lg mb-2" style={{ color: 'var(--arctic-powder)' }}>
                    {features[3].title}
                  </h3>
                  <p className="text-sm leading-relaxed max-w-md" style={{ color: 'var(--mystic-mint)' }}>
                    {features[3].description}
                  </p>
                </div>
                <div className="text-right ml-8">
                  <div className="mono text-4xl font-bold" style={{ color: 'var(--deep-saffron)' }}>
                    {features[3].stat}
                  </div>
                  <div className="text-xs mt-1" style={{ color: 'var(--mystic-mint)' }}>
                    {features[3].statLabel}
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: 2 normal cards */}
            {features.slice(4).map((feature, i) => (
              <div key={i + 4}
                className="rounded-2xl p-6 cursor-pointer flex flex-col justify-between transition-all duration-200"
                style={{
                  background: activeIndex === i + 4
                    ? 'linear-gradient(135deg, var(--nocturnal), var(--oceanic-noir))'
                    : 'rgba(17,76,90,0.35)',
                  border: activeIndex === i + 4
                    ? `1px solid ${feature.accent}`
                    : '1px solid rgba(17,76,90,0.6)',
                  transform: activeIndex === i + 4 ? 'translateY(-4px)' : 'translateY(0)',
                }}
                onMouseEnter={() => setActiveIndex(i + 4)}
                onMouseLeave={() => setActiveIndex(null)}>
                <div>
                  <div className="mb-4 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(255,200,1,0.1)' }}>
                    <span style={{ color: feature.accent }}>{feature.icon}</span>
                  </div>
                  <h3 className="mono font-bold text-lg mb-2" style={{ color: 'var(--arctic-powder)' }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--mystic-mint)' }}>
                    {feature.description}
                  </p>
                </div>
                <div className="mt-4">
                  <span className="mono text-2xl font-bold" style={{ color: feature.accent }}>
                    {feature.stat}
                  </span>
                  <span className="text-xs ml-2" style={{ color: 'var(--mystic-mint)' }}>
                    {feature.statLabel}
                  </span>
                </div>
              </div>
            ))}

          </div>
        )}

        {/* MOBILE — Accordion */}
        {isMobile && (
          <div className="flex flex-col gap-3">
            {features.map((feature, i) => (
              <div key={i} className="rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(17,76,90,0.6)' }}>
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  style={{ background: activeIndex === i ? 'var(--nocturnal)' : 'rgba(17,76,90,0.3)' }}
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}>
                  <div className="flex items-center gap-3">
                    <span style={{ color: feature.accent }}>{feature.icon}</span>
                    <span className="mono font-bold text-sm" style={{ color: 'var(--arctic-powder)' }}>
                      {feature.title}
                    </span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    className="w-5 h-5 transition-transform duration-300"
                    style={{
                      color: 'var(--forsythia)',
                      transform: activeIndex === i ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                    fill="none">
                    <path stroke="currentColor" strokeLinecap="round"
                      strokeLinejoin="round" strokeWidth="1.5"
                      d="m19.5 8.25l-7.5 7.5l-7.5-7.5" />
                  </svg>
                </button>
                <div style={{
                  maxHeight: activeIndex === i ? '200px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 350ms ease-in-out',
                }}>
                  <div className="px-5 py-4" style={{ background: 'rgba(17,76,90,0.15)' }}>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--mystic-mint)' }}>
                      {feature.description}
                    </p>
                    <span className="mono text-xl font-bold" style={{ color: feature.accent }}>
                      {feature.stat}
                    </span>
                    <span className="text-xs ml-2" style={{ color: 'var(--mystic-mint)' }}>
                      {feature.statLabel}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}