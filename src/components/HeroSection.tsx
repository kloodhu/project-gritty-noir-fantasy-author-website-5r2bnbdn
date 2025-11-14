import { Button } from './ui/button'
import { ShoppingCart, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { booksData } from '@/data/books'
import { BookCover } from './BookCover'

export function HeroSection() {
  const featuredBook = booksData[0]

  return (
    <section
      id="featured"
      className="relative overflow-hidden min-h-screen py-24 pb-16 px-4 sm:px-6"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(58,64,70,0.5),_transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute -right-24 top-24 w-[28rem] h-[28rem] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -left-16 top-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute inset-0 opacity-40 mix-blend-soft-light bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0)_55%)]" />
      </div>
      <div className="relative z-10 container mx-auto max-w-6xl">
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
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3">
                <span className="inline-flex items-center px-5 py-1.5 rounded-full bg-secondary/80 border border-muted/60 text-[0.65rem] tracking-[0.35em] uppercase text-foreground/80">
                  Featured Tome
                </span>
                <span className="h-px w-16 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight drop-shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
                {featuredBook.title}
              </h1>
              <p className="text-xl text-muted-foreground uppercase tracking-[0.25em]">
                {featuredBook.subtitle}
              </p>
            </div>

            <div className="space-y-4 text-lg text-muted-foreground/90 leading-relaxed">
              <p className="text-xl text-foreground/90 font-medium">
                {featuredBook.blurb.split('.')[0]}.
              </p>
              <p>
                {featuredBook.blurb.split('.').slice(1).join('.').trim()}
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-muted-foreground/80">
                <span className="font-semibold text-foreground">Genre:</span> Dark Fantasy, Noir Fantasy
              </div>
              <div className="text-muted-foreground/80">
                <span className="font-semibold text-foreground">Setting:</span> Gritty Urban Seaport, 16th Century-inspired
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <Button
                size="lg"
                className="relative bg-gradient-to-br from-primary via-primary/80 to-amber-600/80 text-primary-foreground font-semibold tracking-[0.08em] uppercase border border-amber-200/40 shadow-xl ember-glow"
                onClick={() => window.open(featuredBook.amazonUrl, '_blank')}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Buy on Amazon
              </Button>
              <Link to={`/book/${featuredBook.id}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-muted text-foreground/90 hover:border-primary/60 hover:text-primary/90"
                >
                  Learn More
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-dashed border-muted text-muted-foreground hover:border-accent hover:text-accent"
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
