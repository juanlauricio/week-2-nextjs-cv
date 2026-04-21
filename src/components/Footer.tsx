export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-bold text-lg">Juan Miguel Lauricio</p>
          <p className="text-blue-300 text-sm">BS Information Technology — Saint Paul University Philippines</p>
        </div>
        <div className="flex gap-6 text-blue-200 text-sm">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#education" className="hover:text-white transition-colors">Education</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <p className="text-blue-400 text-sm">© {currentYear} Juan Miguel Lauricio</p>
      </div>
    </footer>
  );
}
