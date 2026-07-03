import React from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MapSection from './components/MapSection'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
      <MapSection />
      <WhatsAppButton />

    </>
  )
}

export default App
