export default function Home() {
  return (
    <section className="space-y-12">
      {/* Hero */}
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Backend engineer building reliable, production-ready systems.
        </h1>

        <p className="text-lg text-neutral-400 max-w-3xl">
          I design, build, and deploy backend APIs and data-driven applications
          using Django, Express/TypeScript, PostgreSQL, and modern cloud
          platforms.
        </p>

        <div className="flex gap-4">
          <a
            href="/projects"
            className="px-6 py-3 bg-neutral-100 text-neutral-900 rounded-lg font-medium"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="px-6 py-3 border border-neutral-700 rounded-lg text-neutral-300"
          >
            Work With Me
          </a>
        </div>
      </div>

      {/* Trust Signals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-neutral-400">
        <div>Production deployments</div>
        <div>REST APIs & databases</div>
        <div>Render • Vercel • Cloud services</div>
      </div>
    </section>
  );
}
