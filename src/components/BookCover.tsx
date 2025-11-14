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

const coverFrameClasses =
  'group relative overflow-hidden rounded-lg border border-primary/25 bg-gradient-to-b from-card/80 via-secondary/70 to-background/80 shadow-2xl transition-transform duration-500 hover:-translate-y-1 backdrop-blur-[2px]'

export function BookCover({ 
  coverImage, 
  bookTitle, 
  size = 'medium', 
  className 
}: BookCoverProps) {
  if (!coverImage || coverImage.includes('placeholder')) {
    return (
      <div className={cn(coverFrameClasses, 'flex flex-col items-center justify-center gap-3 p-6 text-center', sizeClasses[size], className)}>
        <BookOpen className="w-12 h-12 text-primary/40" />
        <p className="text-xs text-muted-foreground/80">Upload your book cover here</p>
        <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),transparent_60%)] mix-blend-screen" />
      </div>
    )
  }

  return (
    <div className={cn(coverFrameClasses, sizeClasses[size], className)}>
      <img
        src={coverImage}
        alt={`${bookTitle} cover`}
        className="h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent mix-blend-multiply" />
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_20%,rgba(255,196,138,0.35),transparent_55%)] mix-blend-screen" />
      <div className="pointer-events-none absolute inset-0 border border-primary/30 rounded-lg" />
    </div>
  )
}
