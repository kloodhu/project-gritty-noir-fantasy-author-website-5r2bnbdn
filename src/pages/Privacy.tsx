import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-12 max-w-4xl">
        <Button
          variant="outline"
          className="mb-8 border-border text-foreground hover:text-primary hover:border-primary"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
              Information We Collect
            </h2>
            <p>
              When you subscribe to our mailing list or contact us through the contact form, we collect your email address and name (if provided). This information is used solely for the purpose of sending you updates about new book releases, exclusive content, and responding to your inquiries.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
              How We Use Your Information
            </h2>
            <p>
              We use your email address to:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
              <li>Send newsletter updates about new book releases</li>
              <li>Share exclusive content and behind-the-scenes information</li>
              <li>Respond to your contact form submissions</li>
              <li>Provide information you've requested</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
              Third-Party Services
            </h2>
            <p>
              We use Mailchimp for managing our mailing list. Your email address is stored securely on their servers. We do not sell, trade, or otherwise transfer your personal information to third parties except as required to provide you with our services or as required by law.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
              Data Security
            </h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
              Your Rights
            </h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
              <li>Unsubscribe from our mailing list at any time</li>
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction or deletion of your personal information</li>
              <li>Object to our processing of your personal information</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
              Cookies
            </h2>
            <p>
              This website does not use cookies for tracking purposes. We may use basic analytics to understand how visitors interact with our site, but no personally identifiable information is collected through these means.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
              Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
              Contact Us
            </h2>
            <p>
              If you have any questions about this privacy policy or how we handle your personal information, please contact us through the contact form on our website.
            </p>
          </section>

          <div className="pt-6 text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
        </div>
      </div>
    </div>
  )
}
