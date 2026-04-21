export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0">
          <div className="w-36 h-36 rounded-full bg-blue-500 border-4 border-blue-300 flex items-center justify-center text-5xl font-bold shadow-xl">
            JL
          </div>
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight">
            Juan Miguel Lauricio
          </h1>
          <p className="text-blue-200 text-xl mb-4 font-medium">
            BS Information Technology — 3rd Year Student
          </p>
          <p className="text-blue-100 max-w-xl leading-relaxed mb-6">
            Aspiring software developer and AI enthusiast passionate about building intelligent systems.
            Currently expanding expertise in web development, AI agents, and modern full-stack technologies
            at Saint Paul University Philippines.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="bg-white text-blue-900 font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-100 transition-colors shadow"
            >
              Contact Me
            </a>
            <a
              href="https://github.com/juanlauricio"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
