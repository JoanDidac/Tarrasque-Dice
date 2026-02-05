import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen bg-background text-text selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <ProductGrid />
      <Footer />
    </main>
  )
}

export default App
