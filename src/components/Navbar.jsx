export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-wide text-[#0f2747]"
        >
          Zen's Portfolio
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 text-sm md:flex">
          <a
            href="#about"
            className="text-slate-600 transition hover:text-[#0f2747]"
          >
            About
          </a>

          <a
            href="#experience"
            className="text-slate-600 transition hover:text-[#0f2747]"
          >
            Experience
          </a>

          <a
            href="#skills"
            className="text-slate-600 transition hover:text-[#0f2747]"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-slate-600 transition hover:text-[#0f2747]"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-slate-600 transition hover:text-[#0f2747]"
          >
            Contact
          </a>
        </div>

        {/* Contact button */}
        <a
          href="#contact"
          className="rounded-full border border-[#0f2747] px-5 py-2 text-sm font-medium text-[#0f2747] transition hover:bg-[#0f2747] hover:text-white"
        >
          Contact Me
        </a>

      </div>
    </nav>
  )
}