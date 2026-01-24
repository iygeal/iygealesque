"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Projects", href: "/projects" },
    { name: "About Me", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-5 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight hover:underline underline-offset-4"
        >
          <span className="text-slate-100">IYGEAL</span>
          <span className="text-blue-400">.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-300 hover:text-slate-100 transition"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <nav className="flex flex-col px-4 py-4 space-y-4 text-sm">
            {navItems.map(({ name, href }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={name}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "transition",
                    isActive
                      ? "text-slate-100"
                      : "text-slate-400 hover:text-slate-100",
                  )}
                >
                  {name}
                </Link>
              );
            })}

            <a
              href="https://www.canva.com/design/DAGcBJB72j0/hkZ5flPylU6SOD31xAu_5w/edit?utm_content=DAGcBJB72j0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
              className="pt-2 text-slate-400 hover:text-slate-100 transition"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
