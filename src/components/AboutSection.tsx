import { Card, CardContent } from './ui/card'
import { Feather } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About the Author
          </h2>
        </div>

        <Card className="bg-card border-border">
          <CardContent className="p-8 sm:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Author Photo Placeholder */}
              <div className="w-full md:w-64 flex-shrink-0">
                <div className="aspect-square bg-secondary border-2 border-primary/30 rounded-lg flex items-center justify-center">
                  <Feather className="w-20 h-20 text-primary/50" />
                </div>
              </div>

              {/* Author Bio */}
              <div className="space-y-4 flex-1">
                <h3 className="font-serif text-3xl font-bold text-foreground">
                  Author Name
                </h3>
                
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    [Author Name] is a writer of dark fantasy and noir fiction, specializing in gritty urban fantasies set in worlds where shadow and light wage an eternal war. Drawing inspiration from historical periods and the hard-boiled detective novels of old, they craft tales that blur the line between hero and villain.
                  </p>
                  
                  <p>
                    Born and raised near the coast, they developed an early fascination with maritime history and the shadowy underworld of port cities. This passion informs every page of The Dark Chronicles, bringing authenticity and atmosphere to the fog-shrouded streets and dangerous harbors that serve as the backdrop for their stories.
                  </p>
                  
                  <p>
                    When not writing, they can be found researching obscure historical details, exploring coastal towns, or lost in a good book with a strong cup of coffee. They currently reside [Location], where they're at work on the next installment of The Dark Chronicles.
                  </p>
                </div>

                <div className="pt-4 text-muted-foreground italic">
                  "I write the stories I want to read - tales of flawed characters navigating impossible choices in worlds where nothing is ever quite what it seems."
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
