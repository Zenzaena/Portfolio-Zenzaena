import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa"

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f8fafc] px-6 py-24 lg:px-10"
    >
        {/* Background Decorations */}
    <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#dbe7f2] opacity-60 blur-3xl" />

    <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#c9dcf0] opacity-50 blur-3xl" />

    <div className="pointer-events-none absolute right-24 top-24 hidden h-20 w-20 rounded-full border border-[#9bb8d3] opacity-50 lg:block" />
      
    <div className="relative z-10 mx-auto max-w-7xl">

        <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#52779f]">
          Contact
        </p>

        <h2 className="mt-4 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-[#0f2747] md:text-6xl">
          Let's create something meaningful together!
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
          Feel free to reach out whether you have a project in mind, want to discuss new opportunities, 
          or simply want to say hello. My inbox is always open!
        </p>

        {/* Email Button */}
        <a
          href="mailto:zenzaenaatame@gmail.com"
          className="mt-10 inline-block rounded-full bg-[#0f2747] px-8 py-4 font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-[#193b63] hover:shadow-lg"
        >
          Let's Talk 👋🏻
        </a>

        {/* Social Media */}
        <div className="mt-20 flex flex-wrap gap-6 border-t border-slate-200 pt-6 text-sm text-slate-500">

          <a
            href="https://www.instagram.com/zenzaena_atame/"
            target="_blank"
            aria-label="Instagram"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition duration-300 hover:-translate-y-1 hover:border-[#0f2747] hover:bg-[#0f2747] hover:text-white hover:shadow-lg"
        >
            <FaInstagram className="text-lg transition-transform duration-300 group-hover:scale-110" />
        </a>

          <a
            href="https://www.linkedin.com/in/zenzaena-atame-rissan-360690322"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition duration-300 hover:-translate-y-1 hover:border-[#0f2747] hover:bg-[#0f2747] hover:text-white hover:shadow-lg"
        >
            <FaLinkedinIn className="text-lg transition-transform duration-300 group-hover:scale-110" />
        </a>

          <a
            href="https://github.com/zenzaena"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition duration-300 hover:-translate-y-1 hover:border-[#0f2747] hover:bg-[#0f2747] hover:text-white hover:shadow-lg"
        >
            <FaGithub className="text-lg transition-transform duration-300 group-hover:scale-110" />
        </a>

        </div>

        {/* Footer */}
        <div className="mt-10 text-sm text-slate-400">
          © 2026 Zenzaena Atame Rissan. All rights reserved.
        </div>

      </div>
    </section>
  )
}