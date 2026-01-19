"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

/**
 * A client-side component for rendering the site's navigation bar.
 *
 * The component renders a navigation bar with links to the "Projects", "About Me", and "Contact" pages.
 * It also includes a link to the author's resume and a logo that links back to the homepage.
 *
 * The component uses the `usePathname` hook from `next/navigation` to determine which page is currently active and styles the links accordingly.
 *
 * @returns {JSX.Element} - The rendered navigation bar component.
 */
export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Projects", href: "/projects" },
    { name: "About Me", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight hover:underline underline-offset-4"
        >
          <span className="text-slate-100">IYGEAL</span>
          <span className="text-blue-400">.dev</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm">
          {navItems.map(({ name, href }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={name}
                href={href}
                className={clsx(
                  "relative transition after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-blue-400 after:transition-all",
                  isActive
                    ? "text-slate-100 after:w-full"
                    : "text-slate-400 hover:text-slate-100 after:w-0 hover:after:w-full",
                )}
              >
                {name}
              </Link>
            );
          })}

          {/* Resume */}
          <a
            href="https://www.canva.com/design/DAGcBJB72j0/hkZ5flPylU6SOD31xAu_5w/edit?utm_content=DAGcBJB72j0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 border border-slate-700 rounded-lg text-slate-300 hover:text-slate-100 hover:border-slate-600 transition"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
