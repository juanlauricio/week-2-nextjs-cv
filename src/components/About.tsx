export default function About() {
  return (
    <section id="about" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">About Me</h2>
        <div className="w-16 h-1 bg-blue-600 mb-8 rounded"></div>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              I am a 3rd-year Bachelor of Science in Information Technology student at Saint Paul University Philippines,
              driven by a strong passion for software development and emerging technologies. I am particularly
              interested in artificial intelligence, web development, and building practical solutions that
              make a meaningful impact.
            </p>
            <p>
              Through the AI Agent Developer Workshop, I have gained hands-on experience in developing
              intelligent agents, integrating modern APIs, and deploying scalable web applications. I am
              committed to continuous learning and applying my skills in real-world scenarios.
            </p>
            <p>
              Outside of academics, I enjoy exploring open-source projects, contributing to community
              tech initiatives, and keeping up with the latest advancements in AI and cloud computing.
            </p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Personal Details</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-semibold w-28 flex-shrink-0">Full Name</span>
                <span>Juan Miguel Lauricio</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-semibold w-28 flex-shrink-0">Program</span>
                <span>BS Information Technology</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-semibold w-28 flex-shrink-0">Year</span>
                <span>3rd Year</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-semibold w-28 flex-shrink-0">University</span>
                <span>Saint Paul University Philippines</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-semibold w-28 flex-shrink-0">Email</span>
                <span>Juanlauricio@spup.edu.ph</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-semibold w-28 flex-shrink-0">GitHub</span>
                <a
                  href="https://github.com/juanlauricio"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/juanlauricio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
