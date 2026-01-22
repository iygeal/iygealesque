import PageWrapper from "@/components/PageWrapper";
export default function Home() {
  return (
    <PageWrapper>
      <section className="space-y-16">
        {/* Hero */}
        <div className="space-y-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            I am Iygeal Anozie, a Backend Engineer building reliable,
            production-ready systems.
          </h1>

          <p className="text-lg text-slate-300 max-w-3xl">
            I design, build, and deploy scalable backend APIs and data-driven
            systems using Django, Flask, Express, SQL & NoSQL databases, and
            modern cloud platforms.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/projects"
              className="
              px-6 py-3 bg-blue-500
              hover:bg-blue-600
              transition-all duration-200
              text-white rounded-lg font-medium
              hover:-translate-y-0.5
              active:translate-y-0
            "
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="
              px-6 py-3 border border-slate-700
              rounded-lg text-slate-200
              transition-all duration-200
              hover:border-slate-600 hover:text-white"
            >
              Work With Me
            </a>

            {/* CV button */}
            <a
              href="https://www.canva.com/design/DAGcBJB72j0/hkZ5flPylU6SOD31xAu_5w/edit?utm_content=DAGcBJB72j0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
              className="
              px-6 py-3 border border-slate-700
              rounded-lg text-slate-200
              transition-all duration-200
              hover:border-slate-600 hover:text-white"
            >
              View CV
            </a>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">What I Work With</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-300">
            <div className="space-y-2">
              <p className="font-medium text-slate-100">Backend & APIs</p>
              <p>
                Django, Flask, Express, REST APIs, authentication &
                authorization
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-medium text-slate-100">Databases</p>
              <p>PostgreSQL, MySQL, MongoDB </p>
            </div>

            <div className="space-y-2">
              <p className="font-medium text-slate-100">Deployment & Systems</p>
              <p>
                Render, Vercel, cloud deployments, environment configuration
              </p>
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-400">
          <div>Production deployments</div>
          <div>API-first system design</div>
          <div>CS50 & ALX-trained engineer</div>
        </div>
      </section>
    </PageWrapper>
  );
}
