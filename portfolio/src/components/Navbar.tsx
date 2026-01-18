import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-lg font-semibold tracking-tight hover:underline underline-offset-4">
          <span className="text-slate-100">IYGEAL</span>
          <span className="text-blue-400">.dev</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm">
          <Link
            href="/projects"
            className="
            text-slate-400 hover:text-slate-100 transition
            relative hover:text-slate-100 transition
            after:absolute after:left-0 after:-bottom-1
            after:w-0 after:h-px after:bg-blue-400
            hover:after:w-full after:transition-all
          "
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className="text-slate-400 hover:text-slate-100 transition
                        relative hover:text-slate-100 transition
            after:absolute after:left-0 after:-bottom-1
            after:w-0 after:h-px after:bg-blue-400
            hover:after:w-full after:transition-all
            "
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
