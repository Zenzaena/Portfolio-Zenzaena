const experiences = [
  {
    number: "01",
    period: "2025",
    organization: "UKM RIPTEK",
    role: "Anggota Codelines, Divisi Research & Business",
  },
  {
    number: "02",
    period: "2025",
    organization: "INTERFACE",
    role: "Sie Pendamping",
  },
  {
    number: "03",
    period: "2025",
    organization: "DevExperience 2025",
    role: "Sie Acara",
  },
  {
    number: "04",
    period: "2026 - Present",
    organization: "ScreenShot",
    role: "Sekretaris",
  },
  {
    number: "05",
    period: "2026 - Present",
    organization: "UKM RIPTEK",
    role: "Anggota Codelines, Divisi Client Project",
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-gradient-to-br from-[#ffffff] via-[#f4f8fc] to-[#e3eef8] px-6 py-28 lg:px-10"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#cbdff1] opacity-50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#d8e7f4] opacity-60 blur-3xl" />

      {/* Decorative Circles */}
      <div className="pointer-events-none absolute right-16 top-23 hidden h-14 w-14 rounded-full border-2 border-[#91b3d3] opacity-60 lg:block" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm font-medium tracking-[0.35em] text-[#5f88b3]">
            EXPERIENCE
          </p>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="text-5xl font-bold tracking-tight text-[#0f2747] md:text-6xl">
              Where I've grown.
            </h2>

            <p className="max-w-md text-base leading-7 text-[#5c7895]">
              Experiences that have shaped my skills through collaboration,
              organization, and learning.
            </p>
          </div>
        </div>

        {/* Experience List */}
        <div className="border-t border-[#b9cde0]">
          {experiences.map((experience) => (
            <div
              key={experience.number}
              className="group grid gap-6 border-b border-[#b9cde0] py-8 transition duration-300 hover:-translate-y-1 hover:bg-white/50 lg:grid-cols-[80px_1fr_180px]"
            >

              {/* Number */}
              <div>
                <span className="text-2xl font-semibold text-[#7da2c5] transition duration-300 group-hover:text-[#0f2747]">
                  {experience.number}
                </span>
              </div>

              {/* Main Information */}
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-[#6d95bb]">
                  {experience.organization}
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-[#0f2747]">
                  {experience.role}
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#5c7895]">
                  {experience.description}
                </p>
              </div>

              {/* Period */}
              <div className="lg:text-right">
                <p className="text-sm font-medium text-[#7897b5]">
                  {experience.period}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}