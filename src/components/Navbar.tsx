import { useEffect, useState, useRef } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import { useNavigate, useLocation, Link } from "react-router-dom"

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const location = useLocation()

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Start from top when navigating to different pages
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  const scrollToSection = (id: string) => {
    // First close the mobile menu
    setIsMenuOpen(false)

    // Use a small timeout to allow the menu to close before scrolling,
    // which can prevent layout shifts from affecting the scroll position.
    setTimeout(() => {
      // Check if we're on the home page
      if (location.pathname !== "/") {
        // Navigate to home page first, then scroll
        navigate("/")
        // Use another timeout to ensure navigation completes before scrolling
        setTimeout(() => {
          const el = document.getElementById(id)
          if (el) {
            const offset = 80 // Account for fixed navbar
            const elementPosition =
              el.getBoundingClientRect().top + window.scrollY - offset
            window.scrollTo({
              top: elementPosition,
              behavior: "smooth",
            })
          }
        }, 100)
      } else {
        // We're already on home page, just scroll
        const el = document.getElementById(id)
        if (el) {
          const offset = 80 // Account for fixed navbar
          const elementPosition =
            el.getBoundingClientRect().top + window.scrollY - offset
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          })
        }
      }
    }, 50) // Small delay for menu closing
  }

  const handleGetInTouch = () => {
    setIsMenuOpen(false)
    scrollToSection("contact")
  }

  const sections = ["home", "about", "products", "contact"]

  return (
    // FIX: The ref is now on the header to contain BOTH the nav and mobile menu
    <header ref={menuRef} className="fixed top-0 left-0 right-0 z-50 px-4">
      <nav
        className={`max-w-4xl mx-auto mt-4 px-5 py-2 rounded-xl flex justify-between items-center backdrop-blur-md border border-accent/50 bg-background/80 text-sm transition-all duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#0c1b2a] rounded">
            <img
              src="/transparent-logo.png"
              alt="VyomSoft Logo"
              className="w-8 h-8 object-contain"
            />
          </div>
          <Link
            to="/"
            onClick={() => scrollToSection("home")} // Also allow logo click to go to top
          >
            <span className="text-lg font-bold text-slate-800">VyomSoft</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 font-semibold">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="hover:text-blue-600 transition-colors"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Button size="sm" onClick={handleGetInTouch}>
            Get in Touch
          </Button>
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden max-w-4xl mx-auto mt-2 px-5 py-4 rounded-xl backdrop-blur-md border border-accent/50 bg-background/90">
          <div className="flex flex-col gap-4 font-semibold">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="hover:text-blue-600 transition-colors text-left py-2"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
