import { Button } from './ui/button'
import { ShoppingCart, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { booksData } from '@/data/books'
import { BookCover } from './BookCover'

export function HeroSection() {
  const featuredBook = booksData[0]

  return (
    <section id="featured" className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Book Cover */}
          <div className="order-2 lg:order-1">
            <div className="max-w-md mx-auto">
              <Link to={`/book/${featuredBook.id}`}>
                <BookCover 
                  coverImage={featuredBook.coverImage}
                  bookTitle={featuredBook.title}
                  size="large"
                  className="w-full cursor-pointer"
                />
              </Link>
            </div>
          </div>

          {/* Book Info */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <div className="inline-block px-4 py-1 bg-primary/20 border border-primary/40 rounded-full text-primary text-sm font-medium mb-2">
                Featured Book
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {featuredBook.title}
              </h1>
              <p className="text-xl text-primary font-medium">
                {featuredBook.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xl text-muted-foreground/80 leading-relaxed font-medium">
                {featuredBook.blurb.split('.')[0]}.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                {featuredBook.blurb.split('.').slice(1).join('.').trim()}
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-muted-foreground">
                <span className="font-semibold text-foreground">Genre:</span> Dark Fantasy, Noir Fantasy
              </div>
              <div className="text-muted-foreground">
                <span className="font-semibold text-foreground">Setting:</span> Gritty Urban Seaport, 16th Century-inspired
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                onClick={() => window.open(featuredBook.amazonUrl, '_blank')}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Buy on Amazon
              </Button>
              <Link to={`/book/${featuredBook.id}`}>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Learn More
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Subscribe for Updates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
