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
    id: 'the-greykiss',
    title: 'The Greykiss',
    subtitle: 'New Merserat Chronicles - Book One',
    series: 'New Merserat Chronicles',
    orderInSeries: 1,
    blurb: 'In New Merserat, nothing is ever simple. The ancient city is fracturing—dragged apart by feuding merchant dynasties, corrupt watchmen, and a council more interested in secrets than justice. Tension coils in every shadowed street and marble hall, as old alliances crumble and the city slides toward self-destruction. Amid the gathering storm, two women fight battles too intimate for anyone to see. Syra, a scarred fighter running from a past she cannot forget, trusts no one and answers only to her own code. Lienne, a quiet idealist raised among books and apothecary jars, yearns to find her place in a world she’s only read about. Both are haunted by what they’ve lost. Both are searching for something—belonging, forgiveness, meaning. When their worlds collide, Syra and Lienne are drawn into an uneasy partnership. Together, they navigate the city’s labyrinth of loyalty and betrayal, learning that survival sometimes means choosing sides—and sometimes, it means standing alone. But as the city’s infighting threatens to erupt into chaos, the lines between friend and foe blur, and the greatest danger may come not from New Merserat’s enemies, but from within themselves. In a city at war with its own soul, can two lost women find the strength to save themselves—and each other—before everything burns?',
    publishYear: 2026,
    coverImage: '/covers/book1.jpg',
	releaseDate: '2026-02-03',
    status: 'preorder',
    amazonUrl: 'https://amazon.com/dp/placeholder1',
    goodreadsUrl: 'https://goodreads.com/book/show/placeholder1',
    bookbubUrl: 'https://bookbub.com/books/placeholder1',
    formats: ['eBook', 'Paperback', 'Hardcover'],
    language: 'English',
    pageCount: 384,
    isbn: '978-1-234567-89-0',
    themeColor: '210 100% 30%',
    contentWarnings: ['graphic_violence','injuries','death','psychological_horror_and_mental_manipulation','workplace_exploitation_and_dangerous_labor_conditions','class-based_discrimination_and_social_inequality','trauma_and_PTSD_symptoms','implied_sexual_assault_in_character_background'],
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
    id: 'parfumed-whisper',
    title: 'Parfumed Whisper',
    subtitle: 'New Merserat Chronicles - Book Two',
    series: 'New Merserat Chronicles',
    orderInSeries: 2,
    blurb: 'The echoes of Port Blackwater\'s darkest night still haunt Captain Aldric Thorne. But when a new threat emerges from the city\'s underbelly - one that makes the previous horrors seem like child\'s play - Aldric must form uneasy alliances with old enemies. As ancient powers awaken and the line between magic and madness blurs, he discovers that some secrets are written in blood, and some debts can only be paid with souls.',
    publishYear: 2026,
    coverImage: '/covers/book2.jpg',
    status: 'coming-soon',
	releaseDate: 'TBD',
    amazonUrl: 'https://amazon.com/dp/placeholder2',
    goodreadsUrl: 'https://goodreads.com/book/show/placeholder2',
    bookbubUrl: 'https://bookbub.com/books/placeholder2',
    formats: ['eBook', 'Paperback', 'Hardcover'],
    language: 'English',
    pageCount: 412,
    isbn: '978-1-234567-90-6',
    themeColor: '280 60% 35%',
    contentWarnings: ['detailed descriptions of violence and murder','sexual content within the context of a courtesan\'s profession','themes of obsession and possessive behavior','trauma and fever dreams and psychological distress'],
    editorialReview: {},
    readerReviews: []
  },
  {
    id: 'the-finale',
    title: 'The Finale',
    subtitle: 'New Merserat Chronicles - Book Three',
    series: 'New Merserat Chronicles',
    orderInSeries: 3,
    blurb: '',
    publishYear: 2027,
    coverImage: '/covers/book3.jpg',
    status: 'tbd',
    releaseDate: 'TBD',
    amazonUrl: 'https://amazon.com/dp/placeholder3',
    goodreadsUrl: 'https://goodreads.com/book/show/placeholder3',
    bookbubUrl: 'https://bookbub.com/books/placeholder3',
    formats: ['eBook', 'Paperback', 'Hardcover'],
    language: 'English',
    pageCount: 456,
    isbn: '978-1-234567-91-3',
    themeColor: '160 40% 25%',
    contentWarnings: [],
    readerReviews: []
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
