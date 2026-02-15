import { useState } from "react";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'
import ProductPage from './pages/ProductPage'
import CollaborationPage, { type CollaborationSlug } from './pages/CollaborationPage';
import BlogPage from './pages/BlogPage';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'product' | 'collaboration' | 'blog'>('home');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [selectedCollaboration, setSelectedCollaboration] = useState<CollaborationSlug | null>(null);

  const navigateToProduct = (id: number) => {
    setSelectedProductId(id);
    setCurrentView('product');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentView('home');
    setSelectedProductId(null);
    setSelectedCollaboration(null);
    window.scrollTo(0, 0);
  };

  const navigateToCollaboration = (slug: string) => {
    setSelectedCollaboration(slug as CollaborationSlug);
    setCurrentView('collaboration');
    window.scrollTo(0, 0);
  };

  const navigateToBlog = () => {
    setCurrentView('blog');
    window.scrollTo(0, 0);
  };

  return (
    <main className="min-h-screen bg-background text-text selection:bg-primary selection:text-black">
      <Navbar onLogoClick={navigateToHome} onCollaborationClick={navigateToCollaboration} onBlogClick={navigateToBlog} />

      {currentView === 'home' ? (
        <>
          <Hero />
          <ProductGrid onProductClick={navigateToProduct} />
        </>
      ) : currentView === 'product' ? (
        <ProductPage id={selectedProductId} onBack={navigateToHome} />
      ) : currentView === 'collaboration' ? (
        selectedCollaboration && <CollaborationPage slug={selectedCollaboration} onBack={navigateToHome} />
      ) : (
        <BlogPage onBack={navigateToHome} />
      )}

      <Footer />
    </main>
  )
}

export default App
