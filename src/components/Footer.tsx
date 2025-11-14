import { Facebook, Mail } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

export function Footer() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.pathname === '/'

  const handleNavigation = (sectionId: string) => {
    if (isHomePage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <footer className="bg-secondary/50 border-t border-border py-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-3">
              Author Name
            </h3>
            <p className="text-muted-foreground">
              Author of The Dark Chronicles - A gritty noir fantasy series set in fog-shrouded seaport cities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigation('featured')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Featured Book
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('about')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('series')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  The Series
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('contact')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <a 
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary border border-border rounded-lg flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://amazon.com/author"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary border border-border rounded-lg flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all"
                aria-label="Amazon Author Page"
              >
                <span className="text-sm font-bold">A</span>
              </a>
              <a
                href="https://goodreads.com/author"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary border border-border rounded-lg flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all"
                aria-label="Goodreads"
              >
                <span className="text-sm font-bold">G</span>
              </a>
              <a
                href="https://bookbub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary border border-border rounded-lg flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all"
                aria-label="BookBub"
              >
                <span className="text-sm font-bold">B</span>
              </a>
              <a
                href="mailto:author@example.com"
                className="w-10 h-10 bg-secondary border border-border rounded-lg flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Author Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
