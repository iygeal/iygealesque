import Image from "next/image";

export default function ProjectsPage() {
  return (
    <section className="space-y-16">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold">Selected Projects</h1>

        <p className="text-slate-300">
          Real-world backend and fullstack applications designed, deployed, and
          maintained in production environments.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-12">
        {/* RightsPlace */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-8 space-y-6 transition hover:border-slate-700">
          {/* Project Image */}
          <div className="relative w-full h-48 md:h-56 overflow-hidden rounded-lg border border-slate-700 ">
            <Image
              src="/projects/rightsplace-home.png"
              alt="RightsPlace homepage"
              fill
              className="object-cover transition-transform duration-300 hover:scale-[1.01]"
              priority
            />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">RightsPlace</h2>
            <p className="text-sm text-emerald-400">
              Production-ready • Deployed • CS50 Capstone (Verified)
            </p>
          </div>

          <p className="text-slate-300 max-w-3xl">
            RightsPlace is a production-grade human rights violation reporting
            platform designed to securely collect, store, and manage sensitive
            incident data. The system focuses on reliability, data integrity,
            and scalable media handling in real-world deployment conditions.
          </p>

          {/* Responsibilities / System Design */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-blue-200/80">
            <li className="leading-relaxed">
              • Designed and implemented Django backend architecture
            </li>
            <li className="leading-relaxed">
              • Integrated PostgreSQL (Neon) with migrations and admin workflows
            </li>
            <li className="leading-relaxed">
              • Implemented Cloudinary-based media storage and optimization
            </li>
            <li className="leading-relaxed">
              • Deployed and managed production environment on Render
            </li>
          </ul>

          {/* Tech Stack */}
          <div className="space-y-2">
            <p className="text-sm text-blue-300">Tool Stack:</p>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                "Django",
                "PostgreSQL (Neon)",
                "JavaScript",
                "Bootstrap",
                "Cloudinary",
                "Render",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 border border-slate-700 rounded-full text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <a
              href="https://rightsplace.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              Live Application
            </a>

            <a
              href="https://github.com/iygeal/rightsplace"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-200 transition"
            >
              Source Code
            </a>
          </div>
        </div>

        {/* Mentorship Matching Platform */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-8 space-y-6 transition hover:border-slate-700">
          {/* Project Image */}
          <div className="relative w-full h-48 md:h-56 overflow-hidden rounded-lg border border-slate-700 ">
            <Image
              src="/projects/mentorship-home.png"
              alt="Mentorship Matching Platform homepage"
              fill
              className="object-cover transition-transform duration-300 hover:scale-[1.01]"
              priority
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">
              Mentorship Matching Platform
            </h2>
            <p className="text-sm text-emerald-400">
              Production-ready • Deployed • API-driven
            </p>
          </div>

          <p className="text-slate-300 max-w-3xl">
            A mentorship matching system designed to connect mentors and mentees
            based on structured criteria. The backend exposes a RESTful API
            consumed by a React frontend, with a focus on clean data modeling,
            scalability, and deployment separation.
          </p>

          {/* Responsibilities */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-blue-200/80">
            <li className="leading-relaxed">
              • Designed and implemented Express.js backend with TypeScript
            </li>
            <li className="leading-relaxed">
              • Built RESTful APIs for matching logic and user workflows
            </li>
            <li className="leading-relaxed">
              • Modeled application data using MongoDB
            </li>
            <li className="leading-relaxed">
              • Deployed backend and frontend independently (Render & Vercel)
            </li>
          </ul>

          {/* Tech Stack */}
          <div className="space-y-2">
            <p className="text-sm text-blue-300">Tool Stack:</p>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                "Express.js",
                "TypeScript",
                "MongoDB",
                "JWT",
                "React",
                "Render",
                "Vercel",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 border border-slate-700 rounded-full text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <a
              href="https://mentorship-by-iygeal.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              Live Application
            </a>

            <a
              href="https://github.com/iygeal/mentorship-matching-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-200 transition"
            >
              Source Code
            </a>
          </div>
        </div>
        {/* PayFlow */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-8 space-y-6 transition hover:border-slate-700">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">PayFlow</h2>
            <p className="text-sm text-emerald-400">
              REST API • FinTech-style system • Production-deployed
            </p>
          </div>

          <p className="text-slate-300 max-w-3xl">
            PayFlow is a RESTful API that simulates a digital wallet system,
            supporting user authentication, wallet funding, peer-to-peer
            transfers, and transaction history. The system is designed with a
            focus on secure authentication, transactional workflows, and clear
            API documentation.
          </p>

          {/* Responsibilities */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-blue-200/80">
            <li className="leading-relaxed">
              • Designed RESTful API architecture for wallet and transaction
              flows
            </li>
            <li className="leading-relaxed">
              • Implemented JWT-based authentication and secure password hashing
            </li>
            <li className="leading-relaxed">
              • Modeled wallet and transaction data using MongoDB and Mongoose
            </li>
            <li className="leading-relaxed">
              • Documented API endpoints using Postman for external consumption
            </li>
          </ul>

          {/* Tech Stack */}
          <div className="space-y-2">
            <p className="text-sm text-blue-300">Tool Stack:</p>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                "Node.js",
                "Express.js",
                "MongoDB",
                "JWT",
                "Bcrypt",
                "Postman",
                "Render",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 border border-slate-700 rounded-full text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <a
              href="https://payflow-fintech.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              API Base URL
            </a>

            <a
              href="https://documenter.getpostman.com/view/36820009/2sB2qgeJiF"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-200 transition"
            >
              API Documentation
            </a>

            <a
              href="https://github.com/iygeal/payflow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-200 transition"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
