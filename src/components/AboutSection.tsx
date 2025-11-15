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
                  Klood P. Trouvay
                </h3>
                
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    Born among the cobblestone streets of a small European town, Klood crafts gritty, character-driven low fantasy that explores the darker corners of human nature. His lifelong fascination with psychology and sociology infuses his work with complex characters whose motivations feel unsettlingly real.
                  </p>
                  
                  <p>
                    Introverted by temperament, he'd rather observe a crowded room than command it; that quiet attention finds its voice on the page, where flawed heroes and dangerous villains make choices that blur the lines between right and wrong—and always carry a cost.
					
					A devoted lover of history, he builds worlds grounded in historical detail and shaped by the echoes of the past. When he isn’t writing, Klood can be found surrounded by stacks of research books, each competing for space on an impossibly overcrowded nightstand. What began as a casual “let me try writing one chapter” has evolved into an obsession with storytelling craft. He cites Joe Abercrombie and George R. R. Martin as key influences, particularly their sardonic edge and intricate politics.
                  </p>
                  
                  <p>
					His writing schedule is gently enforced by his canine companion, who has somehow intuited that every chapter break requires a walk in the nearby forest. On football match days, you’ll find him shouting at the television, briefly humbled by forces beyond his control—much like the characters who populate his ongoing series, "New Merserat Chronicles".
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
