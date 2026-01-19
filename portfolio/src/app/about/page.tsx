import PageWrapper from "@/components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <section className="space-y-16 max-w-4xl">
        {/* Intro */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold">About Me</h1>

          <p className="text-slate-300 text-lg leading-relaxed">
            I am a backend engineer focused on building reliable,
            production-ready systems. I care deeply about clean architecture,
            data integrity, and software that behaves predictably under
            real-world conditions.
          </p>
        </div>

        {/* Training & Experience */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Training and Experience</h2>

          <p className="text-slate-300 leading-relaxed">
            I have formal training from CS50’s Web Programming with Python and
            JavaScript, where I completed and deployed multiple production-grade
            applications, including my capstone project, RightsPlace.
          </p>

          <p className="text-slate-300 leading-relaxed">
            Prior to that, I spent over a year at ALX Africa, where I focused
            heavily on backend engineering, systems design, and real-world
            software practices. My experience there exposed me to leading and
            collaborating with teams, building APIs, managing databases, and
            working with deployment pipelines and server configurations.
            <p className="mt-4 text-slate-200 font-medium">
              I have shipped systems that handle real users, real data, and real
              constraints.
            </p>
          </p>
        </div>

        {/* How I Work */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">How I Work</h2>

          <ul className="space-y-3 text-slate-300">
            <li>• I design systems with clarity before writing code</li>
            <li>• I prioritize maintainability, security, and scalability</li>
            <li>• I communicate clearly and set realistic expectations</li>
            <li>
              • I prefer simple, robust solutions over unnecessary complexity
            </li>
          </ul>

          <p className="text-slate-300 leading-relaxed">
            Whether working on a small API or a larger system, my goal is always
            the same: deliver software that is dependable, understandable, and
            ready for production use.
          </p>
          {/* Call to Action */}
          <div className="pt-4">
            <a
              href="/contact"
              className="
                inline-flex items-center
                px-6 py-3
                bg-blue-500 hover:bg-blue-600
                transition-all duration-200
                text-white rounded-lg font-medium
                hover:-translate-y-0.5
                active:translate-y-0
              "
            >
              Let’s Work Together
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
