export default function Contact() {
  const contactItems = [
    {
      label: "Email",
      value: "Juanlauricio@spup.edu.ph",
      href: "mailto:Juanlauricio@spup.edu.ph",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "github.com/juanlauricio",
      href: "https://github.com/juanlauricio",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      label: "University",
      value: "Saint Paul University Philippines",
      href: "https://www.spup.edu.ph",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      label: "Location",
      value: "Tuguegarao City, Cagayan, Philippines",
      href: null,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">Contact</h2>
        <div className="w-16 h-1 bg-blue-600 mb-8 rounded"></div>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-gray-600 leading-relaxed mb-6">
              I am open to internship opportunities, collaboration on projects, and networking with
              fellow developers and industry professionals. Feel free to reach out through any of the
              channels below — I will do my best to respond promptly.
            </p>
            <div className="space-y-4">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-700 font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Looking For</h3>
            <ul className="space-y-3 text-gray-700">
              {[
                "Software Development Internship",
                "Web Development Projects",
                "AI / Machine Learning Research Collaboration",
                "Open-Source Contributions",
                "Mentorship & Professional Growth",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
