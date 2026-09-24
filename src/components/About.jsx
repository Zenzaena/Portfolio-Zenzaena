export default function About() {
  return (
    <section
        id="about"
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#f5f9fd] to-[#e7f0f9] px-6 py-28 lg:px-10"
    >
      {/* Soft Gradient Decorations */}
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#c7dcef] opacity-60 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#d9e7f4] opacity-70 blur-3xl" />

      {/* Decorative Circle */}
      <div className="pointer-events-none absolute left-3 top-16 hidden h-12 w-12 rounded-full border-2 border-[#8fb1d3] opacity-70 lg:block" />

      <div className="pointer-events-none absolute bottom-20 right-20 hidden h-20 w-20 rounded-full border border-[#a9c4df] opacity-60 lg:block" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14">

          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#52779f]">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#0f2747] md:text-5xl">
            Get to know me.
          </h2>

        </div>

        {/* Content */}
        <div className="grid gap-12 lg:grid-cols-2">

          {/* Description */}
          <div>
            <p className="text-lg leading-8 text-slate-600">
              Hi! I'm Zen. I am an Information Systems student passionate about using 
              technology and business insights to solve real-world problems.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              I enjoy learning new things, collaborating with teams, 
              solving complex problems, and turning ideas into impactful digital solutions.
            </p>
          </div>

          {/* Information */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">

            <div className="border-l-2 border-[#0f2747] pl-5">
              <p className="text-sm text-slate-400">
                Education
              </p>

              <p className="mt-2 font-semibold text-[#0f2747]">
                Universitas Negeri Semarang
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Information Systems
              </p>
            </div>

            <div className="border-l-2 border-[#0f2747] pl-5">
              <p className="text-sm text-slate-400">
                Location
              </p>

              <p className="mt-2 font-semibold text-[#0f2747]">
                Indonesia
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Based in Semarang
              </p>
            </div>

            <div className="border-l-2 border-[#0f2747] pl-5">
              <p className="text-sm text-slate-400">
                Interests
              </p>

              <p className="mt-2 font-semibold text-[#0f2747]">
                Technology
              </p>

              <p className="mt-1 text-sm text-slate-500">
                UI/UX · Web · Business
              </p>
            </div>

            <div className="border-l-2 border-[#0f2747] pl-5">
              <p className="text-sm text-slate-400">
                Currently
              </p>

              <p className="mt-2 font-semibold text-[#0f2747]">
                Learning & Building
              </p>

              <p className="mt-1 text-sm text-slate-500">
                One project at a time.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
    
  )
}