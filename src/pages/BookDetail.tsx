import { useParams, Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, Star, Twitter, Facebook, ShoppingCart } from 'lucide-react'
import { getBookById, getRelatedBooks } from '@/data/books'
import { BookCover } from '@/components/BookCover'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { BookStatusBadge } from '@/components/BookStatusBadge'

export default function BookDetail() {
  const { bookId } = useParams<{ bookId: string }>()
  const navigate = useNavigate()
  const book = bookId ? getBookById(bookId) : undefined
  const relatedBooks = bookId ? getRelatedBooks(bookId) : []

  if (!book) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-serif mb-4">Book Not Found</h1>
          <p className="text-muted-foreground mb-8">The book you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/')}>Return Home</Button>
        </div>
        <Footer />
      </div>
    )
  }

  // Share URLs
  const shareUrl = `${window.location.origin}/book/${book.id}`
  const shareText = `Check out "${book.title}" - ${book.subtitle}`
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`

  // Calculate average rating
  const avgRating = book.readerReviews.length > 0
    ? (book.readerReviews.reduce((sum, r) => sum + r.rating, 0) / book.readerReviews.length).toFixed(1)
    : '5.0'

  // JSON-LD Structured Data
  const bookSchema = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: book.title,
    author: {
      '@type': 'Person',
      name: 'Author Name'
    },
    description: book.blurb,
    isbn: book.isbn,
    numberOfPages: book.pageCount,
    inLanguage: book.language,
    datePublished: book.publishYear.toString(),
    image: book.coverImage || `${window.location.origin}/covers/placeholder.jpg`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avgRating,
      reviewCount: book.readerReviews.length,
      bestRating: '5',
      worstRating: '1'
    },
    offers: {
      '@type': 'Offer',
      url: book.amazonUrl,
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD'
    }
  }

  return (
    <div 
      className="min-h-screen bg-background"
      style={{ 
        '--book-accent': book.themeColor,
        '--book-accent-hover': book.themeColor 
      } as React.CSSProperties}
    >
      <Helmet>
        <title>{book.title} | Author Name | {book.series}</title>
        <meta name="description" content={book.blurb.substring(0, 160)} />
        <link rel="canonical" href={shareUrl} />
        
        {/* Open Graph */}
        <meta property="og:type" content="book" />
        <meta property="og:title" content={`${book.title} - ${book.subtitle}`} />
        <meta property="og:description" content={book.blurb} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:image" content={book.coverImage || `${window.location.origin}/covers/placeholder.jpg`} />
        <meta property="book:author" content="Author Name" />
        <meta property="book:isbn" content={book.isbn || ''} />
        <meta property="book:release_date" content={book.publishYear.toString()} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${book.title} - ${book.subtitle}`} />
        <meta name="twitter:description" content={book.blurb.substring(0, 200)} />
        <meta name="twitter:image" content={book.coverImage || `${window.location.origin}/covers/placeholder.jpg`} />
        
        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(bookSchema)}
        </script>
      </Helmet>

      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6 hover:bg-primary/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Cover Image */}
          <div className="flex justify-center md:justify-end">
            <BookCover 
              coverImage={book.coverImage}
              bookTitle={book.title}
              size="large"
              className="w-full max-w-sm"
            />
          </div>

          {/* Book Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <p className="text-sm text-primary font-semibold">
                  {book.series} • Book {book.orderInSeries}
                </p>
                <BookStatusBadge status={book.status} size="lg" />
              </div>
              <h1 className="text-5xl font-serif font-bold mb-3">{book.title}</h1>
              <p className="text-xl text-muted-foreground font-serif italic">{book.subtitle}</p>
            </div>

            <p className="text-lg leading-relaxed">{book.blurb}</p>

            {/* Content Warnings */}
            {book.contentWarnings && book.contentWarnings.length > 0 && (
              <Card className="bg-destructive/10 border-destructive/30">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Content Warnings:</h4>
                  <p className="text-sm">{book.contentWarnings.join(', ')}</p>
                </CardContent>
              </Card>
            )}

            {/* Buy Buttons */}
            <div className="flex flex-wrap gap-3">
              {(book.status === 'available' || book.status === 'preorder') ? (
                <>
                  {book.amazonUrl && (
                    <Button 
                      size="lg"
                      style={{ backgroundColor: `hsl(${book.themeColor})` }}
                      className="hover:opacity-90"
                      onClick={() => window.open(book.amazonUrl, '_blank')}
                    >
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      {book.status === 'preorder' ? 'Preorder on Amazon' : 'Buy on Amazon'}
                    </Button>
                  )}
                  {book.goodreadsUrl && (
                    <Button 
                      size="lg" 
                      variant="outline"
                      onClick={() => window.open(book.goodreadsUrl, '_blank')}
                    >
                      Goodreads
                    </Button>
                  )}
                  {book.bookbubUrl && (
                    <Button 
                      size="lg" 
                      variant="outline"
                      onClick={() => window.open(book.bookbubUrl, '_blank')}
                    >
                      BookBub
                    </Button>
                  )}
                  {book.appleUrl && (
                    <Button 
                      size="lg" 
                      variant="outline"
                      onClick={() => window.open(book.appleUrl, '_blank')}
                    >
                      Apple Books
                    </Button>
                  )}
                  {book.barnesNobleUrl && (
                    <Button 
                      size="lg" 
                      variant="outline"
                      onClick={() => window.open(book.barnesNobleUrl, '_blank')}
                    >
                      Barnes & Noble
                    </Button>
                  )}
                </>
              ) : (
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  onClick={() => {
                    navigate('/#newsletter')
                    setTimeout(() => {
                      const newsletterSection = document.getElementById('newsletter')
                      if (newsletterSection) {
                        newsletterSection.scrollIntoView({ behavior: 'smooth' })
                      }
                    }, 100)
                  }}
                >
                  Notify Me When Available
                </Button>
              )}
            </div>

            {/* Social Share */}
            <div className="flex gap-3 pt-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open(twitterUrl, '_blank')}
              >
                <Twitter className="mr-2 h-4 w-4" />
                Share on Twitter
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open(facebookUrl, '_blank')}
              >
                <Facebook className="mr-2 h-4 w-4" />
                Share on Facebook
              </Button>
            </div>
          </div>
        </div>

        {/* Book Details */}
        <Card className="mb-16 border-primary/20">
          <CardContent className="pt-6">
            <h3 className="text-2xl font-serif font-bold mb-6">Book Details</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {book.pageCount && (
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Pages</p>
                  <p className="font-semibold">{book.pageCount}</p>
                </div>
              )}
              {book.isbn && (
                <div>
                  <p className="text-sm text-muted-foreground mb-1">ISBN</p>
                  <p className="font-semibold text-sm">{book.isbn}</p>
                </div>
              )}
              <div>
                <p className="text-sm text-muted-foreground mb-1">Language</p>
                <p className="font-semibold">{book.language}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Published</p>
                <p className="font-semibold">{book.publishYear}</p>
              </div>
            </div>
            
            {book.formats.length > 0 && (
              <div className="mt-6">
                <p className="text-sm text-muted-foreground mb-2">Available Formats</p>
                <div className="flex flex-wrap gap-2">
                  {book.formats.map(format => (
                    <span 
                      key={format}
                      className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                    >
                      {format}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Reviews Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif font-bold mb-8">Reviews</h3>
          
          {/* Editorial Review */}
          {book.editorialReview && (
            <Card className="mb-8 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-2 mb-4">
                  <Star className="h-5 w-5 fill-primary text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-lg">{book.editorialReview.publication}</p>
                    <p className="text-sm text-muted-foreground">
                      Reviewed by {book.editorialReview.reviewer}
                    </p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed italic">
                  "{book.editorialReview.text}"
                </p>
              </CardContent>
            </Card>
          )}

          {/* Reader Reviews */}
          {book.readerReviews.length > 0 && (
            <div>
              <h4 className="text-xl font-serif font-semibold mb-6">Reader Reviews</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {book.readerReviews.map((review, index) => (
                  <Card key={index} className="border-primary/20">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating 
                                  ? 'fill-primary text-primary' 
                                  : 'text-muted-foreground/30'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-semibold">{review.name}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {new Date(review.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                      <p className="leading-relaxed">{review.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Books */}
        {relatedBooks.length > 0 && (
          <div className="mb-16">
            <Separator className="mb-8" />
            <h3 className="text-3xl font-serif font-bold mb-8">More from {book.series}</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {relatedBooks.map(relatedBook => (
                <Link 
                  key={relatedBook.id} 
                  to={`/book/${relatedBook.id}`}
                  className="group"
                >
                  <Card className="overflow-hidden border-primary/20 transition-all hover:shadow-xl hover:border-primary/40">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        <BookCover 
                          coverImage={relatedBook.coverImage}
                          bookTitle={relatedBook.title}
                          size="medium"
                          className="group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <p className="text-sm text-primary font-semibold mb-2">
                        Book {relatedBook.orderInSeries}
                      </p>
                      <h4 className="text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">
                        {relatedBook.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {relatedBook.blurb}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
