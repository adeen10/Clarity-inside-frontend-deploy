import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-fog bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo />
        <Link to="/assessment">
          <Button
            variant="outline"
            className="rounded-full border-primary text-primary hover:bg-primary/5 px-8 bg-transparent"
          >
            Free test
          </Button>
        </Link>
      </div>
    </header>
  )
}
