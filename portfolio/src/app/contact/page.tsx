import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="space-y-12 max-w-3xl">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Let's work together
        </h1>

        <p className="text-slate-300 text-lg">
          If you're looking for a Backend Engineer to build, improve, or scale
          your system, feel free to reach out.
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-6 text-slate-300">
        {/* Email */}
        <div className="flex items-center gap-4">
          <Mail className="w-5 h-5 text-slate-400" />
          <a
            href="mailto:iygeal@gmail.com"
            className="text-lg text-blue-400 hover:underline underline-offset-4"
          >
            iygeal@gmail.com
          </a>
        </div>

        {/* GitHub */}
        <a
          href="https://github.com/iygeal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 text-lg hover:text-slate-100 transition hover:underline underline-offset-4"
        >
          <Github className="w-5 h-5 text-slate-400" />
          <span>GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/iygeal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 text-lg hover:text-slate-100 transition hover:underline underline-offset-4"
        >
          <Linkedin className="w-5 h-5 text-slate-400" />
          <span>LinkedIn</span>
        </a>
      </div>

      {/* Closing CTA */}
      <p className="text-lg text-slate-400">
        I am open to freelance work, contract roles, and collaboration on
        production-grade systems.
      </p>
    </section>
  );
}
