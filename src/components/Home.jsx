export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#f8fafc] px-6 pt-28 lg:px-10"
    >

      {/* Soft Gradient Decorations */}
      <div className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-[#c9dcf0] opacity-50 blur-3xl" />

      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-[#e1eaf4] opacity-70 blur-3xl" />

      {/* Decorative Circle */}
      <div className="pointer-events-none absolute right-[35%] top-28 hidden h-16 w-16 rounded-full border border-[#9bb8d3] opacity-60 lg:block" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* Left Content */}
        <div className="animate-[fadeIn_0.8s_ease-out]">

          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-[#52779f]">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-[#0f2747] sm:text-6xl lg:text-7xl">
            Zenzaena
            <br />
            Atame Rissan
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            People usually call me Zen. I'm an Information Systems student 
            who is passionate about technology, digital experiences, and business.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="rounded-full bg-[#0f2747] px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-[#193b63] hover:shadow-lg"
            >
              Explore My Projects →
            </a>

            <a
              href="/cv-zenzaena.pdf"
              download
              className="rounded-full border border-[#0f2747] px-7 py-3.5 text-sm font-medium text-[#0f2747] transition duration-300 hover:-translate-y-1 hover:bg-[#0f2747] hover:text-white"
            >
              Download CV
            </a>

          </div>

        </div>

        {/* Right - Photo */}
        <div className="flex justify-center lg:justify-end">

          <div className="relative">

            {/* Decorative Circle */}
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-[#dbe7f2]" />

            {/* Decorative Shape */}
            <div className="absolute -bottom-5 -left-5 h-24 w-24 rounded-2xl border-2 border-[#0f2747]" />

            {/* Photo */}
            <div className="relative h-[430px] w-[320px] overflow-hidden rounded-[2rem] bg-[#0f2747] shadow-2xl sm:h-[500px] sm:w-[370px]">

              <img
                src="/foto-zenzaena.jpg"
                alt="Zenzaena Atame Rissan"
                className="h-full w-full object-cover"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}