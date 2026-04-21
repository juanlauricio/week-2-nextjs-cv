const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Saint Paul University Philippines",
    location: "Tuguegarao City, Cagayan",
    period: "2022 – Present (3rd Year)",
    description:
      "Pursuing a 4-year degree with focus on software development, systems analysis, networking, and database management. Maintaining strong academic performance while engaging in co-curricular technology activities.",
    courses: [
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Web Systems & Technologies",
      "Database Management Systems",
      "Software Engineering",
      "Computer Networks",
    ],
  },
  {
    degree: "Senior High School — STEM Strand",
    institution: "Saint Paul University Philippines",
    location: "Tuguegarao City, Cagayan",
    period: "2020 – 2022",
    description:
      "Completed the Science, Technology, Engineering, and Mathematics (STEM) strand, building a strong foundation in analytical thinking, mathematics, and applied sciences relevant to IT studies.",
    courses: [
      "General Mathematics",
      "Pre-Calculus & Basic Calculus",
      "Empowerment Technologies",
      "Research in Daily Life",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">Education</h2>
        <div className="w-16 h-1 bg-blue-600 mb-8 rounded"></div>
        <div className="space-y-8">
          {education.map((edu, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-blue-800 font-medium">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.location}</p>
                </div>
                <span className="text-sm text-blue-700 font-medium bg-blue-50 px-3 py-1 rounded-full self-start whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">{edu.description}</p>
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">Relevant Courses:</p>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course) => (
                    <span
                      key={course}
                      className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full border border-slate-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
