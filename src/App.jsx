import { useState } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import SocialProof from './components/SocialProof'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <div style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 300ms ease-in-out'
      }}>
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Pricing />
          <SocialProof />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App