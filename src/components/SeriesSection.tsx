import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { booksData } from '@/data/books'
import { BookCover } from './BookCover'
import { BookStatusBadge } from './BookStatusBadge'

export function SeriesSection() {
  return (
    <section id="series" className="py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
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
              <Card key={book.id} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-6 space-y-4">
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
                          className="w-full border-primary text-primary hover:bg-primary/10"
                        >
                          Learn More
                        </Button>
                      </Link>
                    )}
                    
                    {/* Show Buy or Notify Me button based on availability */}
                    {isAvailable ? (
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                        onClick={() => window.open(book.amazonUrl, '_blank')}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        {book.status === 'preorder' ? 'Preorder on Amazon' : 'Buy on Amazon'}
                      </Button>
                    ) : (
                      <Button 
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary/10"
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
