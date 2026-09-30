import SmoothScroll from './components/SmoothScroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatWeBuild from './components/WhatWeBuild'
import ApproachSticky from './components/ApproachSticky'
import Services from './components/Services'
import FeaturedWork from './components/FeaturedWork'
import TechStack from './components/TechStack'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-black text-neutral-200">
        <Navbar />
        <main className="relative z-10 bg-black">
          <Hero />
          <WhatWeBuild />
          <Services />
          <FeaturedWork />
          <ApproachSticky />
          <TechStack />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App
