import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Navbar Top */}
        <div className="flex items-center justify-between py-5">

          {/* Logo */}
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="text-xl font-bold tracking-wide text-[#0f2747]"
          >
            Zen's Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-sm md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-600 transition hover:text-[#0f2747]"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <a
            href="#contact"
            className="hidden rounded-full border border-[#0f2747] px-5 py-2 text-sm font-medium text-[#0f2747] transition hover:bg-[#0f2747] hover:text-white md:block"
          >
            Contact Me
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-[#0f2747] transition hover:bg-[#0f2747] hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <span className="text-xl">×</span>
            ) : (
              <span className="text-xl">☰</span>
            )}
          </button>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-slate-200/70 py-5 md:hidden">
            <div className="flex flex-col gap-1">

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm text-slate-600 transition hover:bg-[#f1f6fb] hover:text-[#0f2747]"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-full bg-[#0f2747] px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-[#193b63]"
              >
                Contact Me
              </a>

            </div>
          </div>
        )}

      </div>
    </nav>
  )
}