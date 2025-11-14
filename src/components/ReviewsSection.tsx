import { Card, CardContent } from './ui/card'
import { Star, Quote, BookOpen } from 'lucide-react'
import { Badge } from './ui/badge'
import { booksData } from '../data/books'

// Aggregate all reviews from all books
const allReviews = booksData.flatMap(book => 
  book.readerReviews.map(review => ({
    ...review,
    bookId: book.id,
    bookTitle: book.title
  }))
)

// Get the first editorial review from any book that has one
const firstEditorialReview = booksData.find(book => book.editorialReview)?.editorialReview

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            What Readers Are Saying
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover why readers are falling in love with The Dark Chronicles
          </p>
        </div>

        {/* Editorial Review */}
        {firstEditorialReview && (
          <Card className="mb-12 bg-primary/5 border-primary/30 border-2">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <Quote className="w-12 h-12 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                    Editorial Review
                  </h3>
                  <p className="text-primary font-semibold">
                    {firstEditorialReview.publication}
                  </p>
                </div>
              </div>
              <p className="text-lg text-foreground/90 leading-relaxed italic mb-4">
                "{firstEditorialReview.text}"
              </p>
              <p className="text-muted-foreground text-right">
                — {firstEditorialReview.reviewer}
              </p>
            </CardContent>
          </Card>
        )}

        {/* Reader Reviews */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allReviews.map((review, index) => (
            <Card key={`${review.bookId}-${index}`} className="bg-card border-border hover:border-primary/30 transition-all">
              <CardContent className="p-6 space-y-4">
                {/* Book title badge */}
                <Badge variant="secondary" className="flex items-center gap-1.5 w-fit mb-2">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span className="text-xs">{review.bookTitle}</span>
                </Badge>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  "{review.text}"
                </p>
                <p className="text-primary font-semibold">
                  — {review.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
