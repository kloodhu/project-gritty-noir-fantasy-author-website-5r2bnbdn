import { useState } from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Checkbox } from './ui/checkbox'
import { Mail } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { useNavigate } from 'react-router-dom'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [gdprConsent, setGdprConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!gdprConsent) {
      toast({
        title: 'Consent Required',
        description: 'Please accept the privacy policy to subscribe.',
        variant: 'destructive',
      })
      return
    }

    setIsSubmitting(true)

    // TODO: Integrate with Mailchimp API
    // For now, simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    toast({
      title: 'Welcome to the mailing list!',
      description: 'Thank you for subscribing. You\'ll receive updates about new releases and exclusive content.',
    })

    setEmail('')
    setGdprConsent(false)
    setIsSubmitting(false)
  }

  return (
    <section id="newsletter" className="py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <Card className="bg-card border-2 border-primary/30">
          <CardContent className="p-8 sm:p-12 text-center">
            <Mail className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Join the Mailing List
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Get exclusive updates, behind-the-scenes content, and be the first to know about new releases in New Merserat Chronicles.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="bg-secondary border-border text-foreground flex-1"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting || !gdprConsent}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  size="lg"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox 
                  id="gdpr-consent"
                  checked={gdprConsent}
                  onCheckedChange={(checked) => setGdprConsent(checked === true)}
                  className="mt-1"
                />
                <label 
                  htmlFor="gdpr-consent" 
                  className="text-sm text-muted-foreground cursor-pointer leading-relaxed"
                >
                  I agree to receive email updates and accept the{' '}
                  <button
                    type="button"
                    onClick={() => navigate('/privacy')}
                    className="text-primary hover:underline font-medium"
                  >
                    Privacy Policy
                  </button>
                </label>
              </div>

              <p className="text-sm text-muted-foreground">
                No spam, ever. Unsubscribe anytime.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
