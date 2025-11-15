import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { SeriesSection } from './components/SeriesSection'
import { ReviewsSection } from './components/ReviewsSection'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { NewsletterSection } from './components/NewsletterSection'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { PrivacyPage } from './pages/Privacy'
import BookDetail from './pages/BookDetail'
import { Toaster } from './components/ui/toaster'

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Klood P. Trouvay | Gritty Low Fantasy Series | New Merserat Chronicles</title>
        <meta name="description" content="Discover New Merserat Chronicles, a gritty noir fantasy trilogy set in fog-shrouded seaport cities. Immerse yourself in political intrigue, viscewral fights, and brutal pre-industrial urban settings by Klood P. Trouvay." />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SeriesSection />
        <ReviewsSection />
        <ContactSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/book/:bookId" element={<BookDetail />} />
          </Routes>
          <Toaster />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App 