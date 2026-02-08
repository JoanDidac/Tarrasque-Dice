import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'
import ProductPage from './pages/ProductPage'

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'product'>('home');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const navigateToProduct = (id: number) => {
    setSelectedProductId(id);
    setCurrentView('product');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentView('home');
    setSelectedProductId(null);
    window.scrollTo(0, 0);
  };

  return (
    <main className="min-h-screen bg-background text-text selection:bg-primary selection:text-black">
      <Navbar onLogoClick={navigateToHome} />

      {currentView === 'home' ? (
        <>
          <Hero />
          <ProductGrid onProductClick={navigateToProduct} />
        </>
      ) : (
        <ProductPage id={selectedProductId} onBack={navigateToHome} />
      )}

      <Footer />
    </main>
  )
}

export default App
