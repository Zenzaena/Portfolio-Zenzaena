const skills = [
  {
    number: "01",
    title: "UI / UX Design",
    description:
      "Creating simple, intuitive, and user-friendly digital interfaces.",
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Building responsive websites using modern web technologies.",
  },
  {
    number: "03",
    title: "Business Analysis",
    description:
      "Understanding business needs and translating them into effective digital solutions.",
  },
  {
    number: "04",
    title: "Problem Solving",
    description:
      "Analyzing problems and developing structured solutions.",
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#0f2747] px-6 py-24 text-white lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#b8cee3]">
          Skills
        </p>

        <h2 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
          Things I enjoy working with.
        </h2>

        {/* Skill Cards */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/20 sm:grid-cols-2">

          {skills.map((skill) => (
            <div
              key={skill.number}
              className="group bg-[#0f2747] p-8 transition duration-300 hover:bg-[#193b63]"
            >

              <span className="text-sm text-[#b8cee3]">
                {skill.number}
              </span>

              <h3 className="mt-8 text-xl font-semibold">
                {skill.title}
              </h3>

              <p className="mt-3 max-w-md leading-7 text-[#d6e1ec]">
                {skill.description}
              </p>

              <div className="mt-8 text-xl opacity-0 transition group-hover:translate-x-2 group-hover:opacity-100">
                →
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}