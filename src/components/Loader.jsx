import { useEffect, useState } from 'react'

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setVisible(false)
            onDone()
          }, 100)
          return 100
        }
        return prev + 20
      })
    }, 80)
    return () => clearInterval(interval)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: 'var(--oceanic-noir)' }}>

      {/* Logo */}
      <div className="mono text-3xl font-bold mb-8"
        style={{ color: 'var(--forsythia)' }}>
        NeuralFlow
      </div>

      {/* Animated cube SVG */}
      <div className="mb-8" style={{
        animation: 'spin 1s linear infinite',
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
          className="w-12 h-12">
          <path fill="var(--forsythia)"
            d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z" />
        </svg>
      </div>

      {/* Progress bar */}
      <div className="w-48 h-1 rounded-full overflow-hidden"
        style={{ background: 'rgba(17,76,90,0.6)' }}>
        <div className="h-full rounded-full transition-all duration-150"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, var(--forsythia), var(--deep-saffron))',
          }}></div>
      </div>

      <p className="mono text-xs mt-4" style={{ color: 'var(--mystic-mint)' }}>
        Initializing platform...
      </p>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}