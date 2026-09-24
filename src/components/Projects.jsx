
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
      <div className="pointer-events-none absolute right-20 top-15 hidden h-12 w-12 rounded-full border-2 border-[#8fb1d3] opacity-70 lg:block" />
      <div className="pointer-events-none absolute right-10 left-16 hidden h-20 w-20 rounded-full border border-[#a9c4df] opacity-50 lg:block" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>

            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#52779f]">
              Selected Projects
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#0f2747] md:text-5xl">
              Things I've worked on.
            </h2>

          </div>

          <p className="max-w-md leading-7 text-slate-500">
            A collection of academic projects, design concepts,
            and digital solutions I've worked on.
          </p>

        </div>

        {/* Projects */}
        <div className="mt-14">

          {projects.map((project) => (
            <div
              key={project.number}
              className="group grid gap-6 border-t border-slate-200 py-8 transition duration-300 hover:px-4 md:grid-cols-[80px_1fr_1fr]"
            >

              <span className="text-sm text-slate-400">
                {project.number}
              </span>

              <div>

                <p className="text-sm text-[#52779f]">
                  {project.category}
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-[#0f2747]">
                  {project.title}
                </h3>

              </div>

              <p className="leading-7 text-slate-500">
                {project.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}