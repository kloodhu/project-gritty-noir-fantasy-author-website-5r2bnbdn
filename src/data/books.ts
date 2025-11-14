export type BookStatus = 
  | 'available'           // Published and available
  | 'preorder'            // Available for preorder
  | 'coming-soon'         // Coming soon (no specific date)
  | 'coming-2026-h1'      // Coming 2026 H1
  | 'coming-2026-h2'      // Coming 2026 H2
  | 'coming-2027-h1'      // Coming 2027 H1
  | 'tbd';                // To Be Determined

export interface Book {
  id: string
  title: string
  subtitle: string
  series: string
  orderInSeries: number
  blurb: string
  publishYear: number
  coverImage: string
  status: BookStatus
  releaseDate?: string
  
  // Buy links
  amazonUrl: string
  goodreadsUrl?: string
  bookbubUrl?: string
  appleUrl?: string
  barnesNobleUrl?: string
  
  // Book details
  pageCount?: number
  isbn?: string
  formats: string[]
  language: string
  contentWarnings?: string[]
  
  // Theme
  themeColor: string
  
  // Reviews
  editorialReview?: {
    publication: string
    text: string
    reviewer: string
  }
  readerReviews: Array<{
    name: string
    rating: number
    text: string
    date: string
  }>
}

export const booksData: Book[] = [
  {
    id: 'shadows-of-the-port',
    title: 'Shadows of the Port',
    subtitle: 'The Dark Chronicles - Book One',
    series: 'The Dark Chronicles',
    orderInSeries: 1,
    blurb: 'In the grimy streets of Port Blackwater, where fog rolls in thick from the harbor and corruption seeps through every cobblestone, a reluctant hero emerges from the shadows. When a series of brutal murders threatens to tear the city apart, Captain Aldric Thorne must navigate a web of political intrigue, dark magic, and betrayal that runs deeper than he ever imagined. In a world where honor is a luxury and survival is the only currency that matters, one man\'s quest for justice may cost him everything.',
    publishYear: 2024,
    coverImage: '/covers/book1.jpg',
    status: 'available',
    amazonUrl: 'https://amazon.com/dp/placeholder1',
    goodreadsUrl: 'https://goodreads.com/book/show/placeholder1',
    bookbubUrl: 'https://bookbub.com/books/placeholder1',
    formats: ['Paperback', 'eBook', 'Audiobook'],
    language: 'English',
    pageCount: 384,
    isbn: '978-1-234567-89-0',
    themeColor: '210 100% 30%',
    contentWarnings: [],
    editorialReview: {
      publication: 'Fantasy Review Monthly',
      text: 'A masterfully crafted debut that blends the atmospheric tension of noir with the fantastical elements of dark fantasy. Aldric Thorne is a complex protagonist whose moral ambiguity keeps readers guessing until the very end.',
      reviewer: 'Margaret Blackwood'
    },
    readerReviews: [
      {
        name: 'Sarah M.',
        rating: 5,
        text: 'Absolutely gripping from start to finish. The world-building is phenomenal and the characters feel incredibly real. I couldn\'t put it down!',
        date: '2024-01-15'
      },
      {
        name: 'James T.',
        rating: 5,
        text: 'Dark, gritty, and utterly compelling. This is what fantasy should be - complex characters in a morally gray world.',
        date: '2024-01-20'
      },
      {
        name: 'Elena R.',
        rating: 4,
        text: 'A refreshing take on fantasy noir. The atmosphere is thick enough to cut with a knife, and the mystery kept me guessing.',
        date: '2024-02-03'
      }
    ]
  },
  {
    id: 'blood-on-the-cobblestones',
    title: 'Blood on the Cobblestones',
    subtitle: 'The Dark Chronicles - Book Two',
    series: 'The Dark Chronicles',
    orderInSeries: 2,
    blurb: 'The echoes of Port Blackwater\'s darkest night still haunt Captain Aldric Thorne. But when a new threat emerges from the city\'s underbelly - one that makes the previous horrors seem like child\'s play - Aldric must form uneasy alliances with old enemies. As ancient powers awaken and the line between magic and madness blurs, he discovers that some secrets are written in blood, and some debts can only be paid with souls.',
    publishYear: 2024,
    coverImage: '/covers/book2.jpg',
    status: 'available',
    amazonUrl: 'https://amazon.com/dp/placeholder2',
    goodreadsUrl: 'https://goodreads.com/book/show/placeholder2',
    bookbubUrl: 'https://bookbub.com/books/placeholder2',
    formats: ['Paperback', 'eBook', 'Audiobook'],
    language: 'English',
    pageCount: 412,
    isbn: '978-1-234567-90-6',
    themeColor: '280 60% 35%',
    contentWarnings: [],
    editorialReview: {
      publication: 'The Literary Chronicle',
      text: 'Even darker and more intense than its predecessor. The author raises the stakes while deepening the mythology of Port Blackwater. A worthy sequel that surpasses expectations.',
      reviewer: 'Thomas Ashford'
    },
    readerReviews: [
      {
        name: 'Michael P.',
        rating: 5,
        text: 'Book two syndrome? Not here! This sequel is even better than the first. The plot twists are incredible.',
        date: '2024-03-12'
      },
      {
        name: 'Lisa K.',
        rating: 5,
        text: 'The character development in this book is outstanding. Aldric\'s journey gets even more complex and compelling.',
        date: '2024-03-25'
      },
      {
        name: 'David W.',
        rating: 4,
        text: 'Darker and more intense. The world continues to expand in fascinating ways. Can\'t wait for book three!',
        date: '2024-04-08'
      }
    ]
  },
  {
    id: 'the-final-bell-tolls',
    title: 'The Final Bell Tolls',
    subtitle: 'The Dark Chronicles - Book Three',
    series: 'The Dark Chronicles',
    orderInSeries: 3,
    blurb: 'The city of Port Blackwater stands on the brink of annihilation. As ancient forces converge and the veil between worlds grows thin, Captain Aldric Thorne must make an impossible choice that will determine not just the fate of the city, but the very nature of reality itself. In this explosive conclusion to The Dark Chronicles, all secrets will be revealed, all debts will be paid, and the true cost of heroism will finally be understood. When the final bell tolls, who will remain standing?',
    publishYear: 2025,
    coverImage: '/covers/book3.jpg',
    status: 'tbd',
    releaseDate: 'TBD',
    amazonUrl: 'https://amazon.com/dp/placeholder3',
    goodreadsUrl: 'https://goodreads.com/book/show/placeholder3',
    bookbubUrl: 'https://bookbub.com/books/placeholder3',
    formats: ['Paperback', 'eBook', 'Audiobook'],
    language: 'English',
    pageCount: 456,
    isbn: '978-1-234567-91-3',
    themeColor: '160 40% 25%',
    contentWarnings: [],
    readerReviews: [
      {
        name: 'Rachel S.',
        rating: 5,
        text: 'An epic conclusion to an incredible trilogy. Everything comes together perfectly. Emotional, intense, and satisfying.',
        date: '2025-01-10'
      },
      {
        name: 'Christopher B.',
        rating: 5,
        text: 'This finale exceeded all my expectations. The payoff is worth every page of the journey. Absolutely brilliant.',
        date: '2025-01-22'
      }
    ]
  }
]

// Helper function to get book by ID
export function getBookById(id: string): Book | undefined {
  return booksData.find(book => book.id === id)
}

// Helper function to get related books (other books in same series)
export function getRelatedBooks(bookId: string): Book[] {
  const currentBook = getBookById(bookId)
  if (!currentBook) return []
  
  return booksData.filter(book => 
    book.series === currentBook.series && book.id !== bookId
  )
}
