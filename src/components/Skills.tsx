const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "PHP", "SQL"],
  },
  {
    category: "Web Technologies",
    skills: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    category: "AI & Agents",
    skills: ["OpenAI API", "MCP Protocol", "LangChain (basics)", "Prompt Engineering", "AI Agent Design"],
  },
  {
    category: "Tools & Infrastructure",
    skills: ["Git & GitHub", "PostgreSQL", "Prisma ORM", "Vercel", "VS Code", "Docker (basics)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">Technical Skills</h2>
        <div className="w-16 h-1 bg-blue-600 mb-8 rounded"></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
              <h3 className="text-blue-800 font-semibold text-lg mb-4">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full border border-blue-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
