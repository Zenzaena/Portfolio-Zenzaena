export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "NessUp!",
      category: "Web Application",
      description:
        "A campus event information platform designed to help students discover events, competitions, and opportunities at UNNES.",
    },
    {
      number: "02",
      title: "Brainy Alarm",
      category: "UI/UX Design",
      description:
        "An interactive alarm application concept with customizable experiences and challenges designed to create a more engaging wake-up experience.",
    },
    {
      number: "03",
      title: "LastBite",
      category: "Startup Project",
      description:
        "A digital marketplace concept connecting culinary businesses with consumers to distribute unsold food and reduce food waste.",
    },
    {
      number: "04",
      title: "Mangan Rame-Rame",
      category: "UI/UX Design",
      description:
        "A digital platform concept connecting users with local home chefs and culinary businesses to discover authentic food experiences while supporting local culinary businesses.",
    },
  ]

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-br from-[#e8f1fa] via-[#f5f9fd] to-white px-6 py-28 lg:px-10"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#c4dcef] opacity-60 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#d3e3f1] opacity-70 blur-3xl" />

      {/* Decorative Circles */}
      <div className="pointer-events-none absolute right-20 top-24 hidden h-12 w-12 rounded-full border-2 border-[#8fb1d3] opacity-70 lg:block" />

      <div className="pointer-events-none absolute bottom-32 left-16 hidden h-20 w-20 rounded-full border border-[#a9c4df] opacity-50 lg:block" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          <div>
            <p className="mb-4 text-sm font-medium tracking-[0.35em] text-[#5f88b3]">
              SELECTED PROJECTS
            </p>

            <h2 className="text-5xl font-bold tracking-tight text-[#0f2747] md:text-6xl">
              Things I've worked on.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-[#5c7895]">
            A collection of academic projects, design concepts, and digital
            solutions I've worked on.
          </p>
        </div>

        {/* Project List */}
        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-2">

          {projects.map((project) => (
            <div
              key={project.number}
              className="group relative flex gap-6 border-t border-[#b8cde1] pt-7 transition duration-300 hover:-translate-y-1"
            >

              {/* Number */}
              <div className="shrink-0">
                <span className="text-3xl font-semibold text-[#6d95bb]">
                  {project.number}
                </span>
              </div>

              {/* Vertical Line */}
              <div className="mt-1 h-16 w-[2px] shrink-0 bg-[#7fa4c8] transition duration-300 group-hover:bg-[#0f2747]" />

              {/* Content */}
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-[#6d95bb]">
                  {project.category}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-[#0f2747] transition duration-300 group-hover:text-[#193b63]">
                  {project.title}
                </h3>

                <p className="mt-2 max-w-lg text-sm leading-6 text-[#5c7895]">
                  {project.description}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}