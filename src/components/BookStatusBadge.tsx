import { Badge } from '@/components/ui/badge'
import { type BookStatus } from '@/data/books'

interface BookStatusBadgeProps {
  status: BookStatus
  size?: 'default' | 'lg'
}

export function BookStatusBadge({ status, size = 'default' }: BookStatusBadgeProps) {
  const getStatusLabel = (status: BookStatus): string => {
    switch (status) {
      case 'available':
        return 'Available Now'
      case 'preorder':
        return 'Preorder'
      case 'coming-soon':
        return 'Coming Soon'
      case 'coming-2026-h1':
        return 'Coming 2026 H1'
      case 'coming-2026-h2':
        return 'Coming 2026 H2'
      case 'coming-2027-h1':
        return 'Coming 2027 H1'
      case 'tbd':
        return 'TBD'
      default:
        return 'Unknown'
    }
  }

  const getStatusVariant = (status: BookStatus): 'default' | 'secondary' | 'outline' | 'destructive' => {
    switch (status) {
      case 'available':
        return 'default'
      case 'preorder':
        return 'secondary'
      case 'coming-soon':
      case 'coming-2026-h1':
      case 'coming-2026-h2':
      case 'coming-2027-h1':
        return 'outline'
      case 'tbd':
        return 'destructive'
      default:
        return 'outline'
    }
  }

  const sizeClasses = size === 'lg' ? 'text-sm px-3 py-1' : ''

  return (
    <Badge variant={getStatusVariant(status)} className={sizeClasses}>
      {getStatusLabel(status)}
    </Badge>
  )
}
