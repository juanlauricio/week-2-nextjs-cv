const experiences = [
  {
    role: "AI Agent Developer Workshop Participant",
    organization: "AI Agent Developer Program",
    period: "2024 – Present",
    description:
      "Actively participating in a structured 4-week workshop focused on building AI-powered agents. Built a full-stack Next.js CV website, implemented a REST API with Prisma ORM and Neon PostgreSQL, and developed an MCP (Model Context Protocol) server with SSE transport for intelligent tool orchestration.",
    highlights: [
      "Built and deployed a full-stack Next.js 14 application on Vercel",
      "Implemented CRUD operations with Prisma 7 and Neon Postgres",
      "Developed an MCP server exposing tools via SSE transport",
      "Practiced Git workflows with feature branching and conventional commits",
    ],
  },
  {
    role: "Academic Project Developer",
    organization: "Saint Paul University Philippines — BSIT Program",
    period: "2022 – Present",
    description:
      "Designed and implemented various academic projects including web-based information systems, database management applications, and algorithmic solutions in core CS courses.",
    highlights: [
      "Developed a student records management system using PHP and MySQL",
      "Built inventory tracking application with CRUD functionality",
      "Collaborated on group capstone planning and requirements analysis",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">Experience</h2>
        <div className="w-16 h-1 bg-blue-600 mb-8 rounded"></div>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-l-4 border-blue-600 pl-6 py-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                <span className="text-sm text-blue-700 font-medium bg-blue-50 px-3 py-1 rounded-full self-start sm:self-auto">
                  {exp.period}
                </span>
              </div>
              <p className="text-blue-800 font-medium mb-3">{exp.organization}</p>
              <p className="text-gray-600 leading-relaxed mb-4">{exp.description}</p>
              <ul className="space-y-1.5">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="text-blue-500 mt-1 flex-shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
