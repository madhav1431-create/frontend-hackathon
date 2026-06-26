import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header style={{ background: 'var(--oceanic-noir)', borderBottom: '1px solid var(--nocturnal)' }}
      className="fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="mono text-xl font-bold" style={{ color: 'var(--forsythia)' }}>
          NeuralFlow
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 list-none">
          {['Features', 'Pricing', 'Docs', 'About'].map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}
                style={{ color: 'var(--mystic-mint)' }}
                className="hover:text-white transition-colors duration-150 text-sm font-medium">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex gap-3 items-center">
          <a href="#pricing"
            className="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-150"
            style={{ background: 'var(--forsythia)', color: 'var(--oceanic-noir)' }}>
            Get Started
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}>
          <span className="block w-6 h-0.5" style={{ background: 'var(--arctic-powder)' }}></span>
          <span className="block w-6 h-0.5" style={{ background: 'var(--arctic-powder)' }}></span>
          <span className="block w-6 h-0.5" style={{ background: 'var(--arctic-powder)' }}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4"
          style={{ background: 'var(--oceanic-noir)' }}>
          {['Features', 'Pricing', 'Docs', 'About'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              style={{ color: 'var(--mystic-mint)' }}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium">
              {item}
            </a>
          ))}
          <a href="#pricing"
            className="px-5 py-2 rounded-lg text-sm font-semibold text-center"
            style={{ background: 'var(--forsythia)', color: 'var(--oceanic-noir)' }}>
            Get Started
          </a>
        </div>
      )}
    </header>
  )
}