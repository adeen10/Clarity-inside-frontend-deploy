import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Logo } from "./logo"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-brand-fog bg-background/90 backdrop-blur-md">
        <div className="w-full px-6 md:px-12 flex h-20 items-center justify-between">
          <Logo />

          <div className="flex items-center">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-[17px] font-medium transition-all duration-200 hover:text-brand-teal ${isActive
                      ? "text-brand-teal"
                      : "text-brand-slate"
                      }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="p-2 -mr-2 text-brand-slate md:hidden"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={closeMenu}
      />

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-[300px] bg-background shadow-2xl transition-transform duration-300 ease-in-out transform md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-brand-fog">
            <Logo />
            <button
              onClick={closeMenu}
              className="p-2 -mr-2 text-brand-slate"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex-1 overflow-y-auto py-8 px-6">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className={`text-lg font-medium transition-colors ${isActive
                      ? "text-brand-teal"
                      : "text-brand-slate"
                      }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* Menu Footer */}
          <div className="p-8 border-t border-brand-fog">
            <p className="text-sm text-brand-slate/60">
              © 2026 Clarity Inside.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
