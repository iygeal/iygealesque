import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-lg font-semibold text-neutral-100">
          Iygeal.dev
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm text-neutral-400">
          <Link href="/projects" className="hover:text-neutral-100">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-neutral-100">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
