import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { booksData } from '@/data/books'
import { BookCover } from './BookCover'
import { BookStatusBadge } from './BookStatusBadge'

export function SeriesSection() {
  return (
    <section id="series" className="relative py-20 px-4 sm:px-6">
      <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_bottom,_rgba(16,19,23,0.85),transparent_60%)]" />
      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            The Dark Chronicles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A three-book saga of shadows, secrets, and survival in a world where darkness reigns
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {booksData.map((book) => {
            const isAvailable = book.status === 'available' || book.status === 'preorder'

            return (
              <Card
                key={book.id}
                className="relative overflow-hidden bg-gradient-to-b from-card/80 via-secondary/50 to-background/80 border border-muted/60 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(255,196,138,0.25),transparent_60%)]" />
                <CardContent className="relative p-6 space-y-4">
                  {/* Book Cover - only clickable if available */}
                  {isAvailable ? (
                    <Link to={`/book/${book.id}`}>
                      <BookCover
                        coverImage={book.coverImage}
                        bookTitle={book.title}
                        size="medium"
                        className="w-full cursor-pointer"
                      />
                    </Link>
                  ) : (
                      <BookCover
                        coverImage={book.coverImage}
                        bookTitle={book.title}
                        size="medium"
                        className="w-full opacity-60"
                      />
                  )}

                  {/* Book Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <div className="text-sm text-primary font-medium">
                        {book.subtitle}
                      </div>
                      <BookStatusBadge status={book.status} />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">
                      {book.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {book.blurb}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {/* Only show Learn More for available books */}
                    {isAvailable && (
                      <Link to={`/book/${book.id}`}>
                        <Button
                          variant="outline"
                          className="w-full border-muted text-foreground/90 hover:border-primary/60 hover:text-primary"
                        >
                          Learn More
                        </Button>
                      </Link>
                    )}

                    {/* Show Buy or Notify Me button based on availability */}
                    {isAvailable ? (
                      <Button
                        className="w-full bg-gradient-to-br from-primary via-primary/80 to-amber-600/80 text-primary-foreground border border-amber-100/30 shadow-md hover:shadow-xl"
                        onClick={() => window.open(book.amazonUrl, '_blank')}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        {book.status === 'preorder' ? 'Preorder on Amazon' : 'Buy on Amazon'}
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        className="w-full border-dashed border-muted text-muted-foreground hover:border-accent hover:text-accent"
                        onClick={() => {
                          const newsletterSection = document.getElementById('newsletter')
                          if (newsletterSection) {
                            newsletterSection.scrollIntoView({ behavior: 'smooth' })
                          }
                        }}
                      >
                        Notify Me When Available
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
