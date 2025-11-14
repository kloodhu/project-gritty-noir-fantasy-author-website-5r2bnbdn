import { BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BookCoverProps {
  coverImage?: string
  bookTitle: string
  size?: 'small' | 'medium' | 'large'
  className?: string
}

const sizeClasses = {
  small: 'w-32 h-48',
  medium: 'w-48 h-72',
  large: 'w-64 h-96'
}

export function BookCover({ 
  coverImage, 
  bookTitle, 
  size = 'medium', 
  className 
}: BookCoverProps) {
  if (!coverImage || coverImage.includes('placeholder')) {
    return (
      <div 
        className={cn(
          'aspect-[2/3] bg-secondary/50 border-2 border-primary/20 rounded-md',
          'flex flex-col items-center justify-center gap-3 p-6',
          'backdrop-blur-sm',
          sizeClasses[size],
          className
        )}
      >
        <BookOpen className="w-12 h-12 text-primary/40" />
        <p className="text-xs text-center text-muted-foreground">
          Upload your book cover here
        </p>
      </div>
    )
  }

  return (
    <img
      src={coverImage}
      alt={`${bookTitle} cover`}
      className={cn(
        'aspect-[2/3] object-cover rounded-md shadow-2xl',
        'border border-primary/20',
        'transition-transform duration-300 hover:scale-105',
        sizeClasses[size],
        className
      )}
    />
  )
}
