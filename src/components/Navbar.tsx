import { useState } from 'react'
import { Menu, X, Home, Mail } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.pathname === '/'

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
    setIsMenuOpen(false)
  }

  const handleNewsletterClick = () => {
    if (isHomePage) {
      document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Author Name */}
          <button
            onClick={handleLogoClick}
            className="text-xl sm:text-2xl font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Author Name
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection('featured')}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Featured Book
                </button>
                <button 
                  onClick={() => scrollToSection('series')}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Series
                </button>
                <button 
                  onClick={() => scrollToSection('reviews')}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Reviews
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </>
            ) : (
              <Button
                onClick={() => navigate('/')}
                variant="ghost"
                className="gap-2"
              >
                <Home className="h-4 w-4" />
                Home
              </Button>
            )}
            <Button
              onClick={handleNewsletterClick}
              size="sm"
              variant="outline"
              className="border-dashed border-muted text-muted-foreground hover:border-accent hover:text-accent"
            >
              <Mail className="h-4 w-4" />
              Subscribe for Updates
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {isHomePage ? (
                <>
                  <button
                    onClick={() => scrollToSection('featured')}
                    className="text-left text-foreground hover:text-primary transition-colors py-2"
                  >
                    Featured Book
                  </button>
                  <button
                    onClick={() => scrollToSection('series')}
                    className="text-left text-foreground hover:text-primary transition-colors py-2"
                  >
                    Series
                  </button>
                  <button
                    onClick={() => scrollToSection('reviews')}
                    className="text-left text-foreground hover:text-primary transition-colors py-2"
                  >
                    Reviews
                  </button>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-left text-foreground hover:text-primary transition-colors py-2"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-left text-foreground hover:text-primary transition-colors py-2"
                  >
                    Contact
                  </button>
                </>
              ) : (
                <Button
                  onClick={() => navigate('/')}
                  variant="ghost"
                  className="w-full justify-start gap-2"
                >
                  <Home className="h-4 w-4" />
                  Home
                </Button>
              )}
              <Button
                onClick={handleNewsletterClick}
                variant="outline"
                className="w-full border-dashed border-muted text-muted-foreground hover:border-accent hover:text-accent"
              >
                <Mail className="h-4 w-4" />
                Subscribe for Updates
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
