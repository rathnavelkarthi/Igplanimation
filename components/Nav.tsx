"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#founders", label: "Founders" },
  { href: "#faq", label: "FAQ" }
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? "py-3" : "py-5 md:py-7"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between px-5 transition-all duration-700 md:px-12 ${
          scrolled ? "max-w-5xl" : "max-w-[1500px]"
        }`}
      >
        <div
          className={`flex items-center gap-3 rounded-full border px-4 py-2 transition-all duration-700 ${
            scrolled
              ? "border-white/10 bg-obsidian/70 backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <span className="status-dot" aria-hidden />
          <a
            href="#top"
            className="font-mono-disp text-[10px] uppercase tracking-wide2 text-white/85"
          >
            International Garudas
          </a>
        </div>

        <nav
          className={`hidden items-center gap-1 rounded-full border px-3 py-2 transition-all duration-700 md:flex ${
            scrolled
              ? "border-white/10 bg-obsidian/70 backdrop-blur-xl"
              : "border-white/8 bg-white/[0.02] backdrop-blur-md"
          }`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 font-mono-disp text-[10px] uppercase tracking-wide2 text-white/70 transition-colors duration-300 hover:bg-white/[0.06] hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:hello@internnationalgarudas.com"
          className="btn-ember hidden rounded-full px-5 py-2.5 font-mono-disp text-[10px] uppercase tracking-wide2 md:inline-flex"
        >
          Start a project
        </a>
      </div>
    </header>
  );
}
