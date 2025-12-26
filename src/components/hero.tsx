import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function Hero() {
  return (
    <section className="bg-brand-tint py-20 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-6 text-4xl font-medium tracking-tight text-brand-slate sm:text-5xl lg:text-6xl">
          Free Anxiety Test
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-brand-slate opacity-80 leading-relaxed">
          Take a clinically recognised anxiety test to understand whether anxiety may be affecting your thoughts, body,
          or daily life.
        </p>

        <div className="mb-12 flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-slate/60">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
            Takes 3–5 minutes
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
            22 questions
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
            No account required
          </div>
        </div>

        <Link to="/assessment">
          <Button size="lg" className="h-14 rounded-lg bg-brand-teal text-brand-cream px-10 text-lg font-medium hover:bg-brand-glow transition-colors">
            Start the free anxiety test
          </Button>
        </Link>
      </div>
    </section>
  )
}
