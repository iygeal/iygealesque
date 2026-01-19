import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-32">
      <div
        className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-500
                      flex flex-col md:flex-row items-center md:justify-between gap-6"
      >
        {/* Left: Name */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Iygeal Anozie. Backend Engineer.
        </p>

        {/* Center: Contact Links */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:iygeal@gmail.com"
            className="hover:text-slate-300 transition
            hover:text-slate-300 hover:scale-110 transition
            "
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>

          <a
            href="https://www.github.com/iygeal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition
            hover:text-slate-300 hover:scale-110 transition
            "
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/iygeal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition
            hover:text-slate-300 hover:scale-110 transition
            "
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Right: Stack Summary */}
        <p className="text-slate-600 text-center md:text-right">
          Django · Express · SQL & NoSQL Databases · Cloud Deployments
        </p>
      </div>
    </footer>
  );
}
