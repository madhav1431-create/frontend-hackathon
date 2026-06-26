export default function Footer() {
  return (
    <footer style={{ background: 'var(--oceanic-noir)', borderTop: '1px solid rgba(17,76,90,0.6)' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-10">

          <div>
            <div className="mono text-xl font-bold mb-3" style={{ color: 'var(--forsythia)' }}>
              NeuralFlow
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--mystic-mint)' }}>
              AI-powered data automation for modern teams.
            </p>
          </div>

          {[
            { title: 'Product', links: ['Features', 'Pricing', 'Changelog', 'Roadmap'] },
            { title: 'Company', links: ['About', 'Blog', 'Careers', 'Press'] },
            { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Cookies'] },
          ].map(col => (
            <div key={col.title}>
              <h4 className="mono text-sm font-bold mb-4" style={{ color: 'var(--arctic-powder)' }}>
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm transition-colors duration-150 hover:text-white"
                      style={{ color: 'var(--mystic-mint)' }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(17,76,90,0.4)' }}>
          <p className="text-xs" style={{ color: 'var(--mystic-mint)' }}>
            © 2026 NeuralFlow. All rights reserved.
          </p>
          <div className="flex gap-2 items-center">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--forsythia)' }}></span>
            <span className="text-xs mono" style={{ color: 'var(--mystic-mint)' }}>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}