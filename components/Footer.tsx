"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  Github,
  Mail,
  Phone
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const discover = [
  { label: "Selected Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Industries", href: "#industries" },
  { label: "FAQ", href: "#faq" }
];

const company = [
  { label: "The Founders", href: "#founders" },
  { label: "Our Story", href: "#manifesto" },
  { label: "Chennai HQ", href: "#contact" },
  { label: "Join the Team", href: "mailto:igpl@internnationalgradus.com" }
];

const concierge = [
  { label: "Get in Touch", href: "mailto:igpl@internnationalgradus.com" },
  { label: "Request a Quote", href: "mailto:igpl@internnationalgradus.com?subject=Quote" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" }
];

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const fmt = new Intl.DateTimeFormat("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata"
      }).format(new Date());
      setTime(`${fmt} IST`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative overflow-hidden px-5 pb-12 pt-16 md:px-12 md:pb-16 md:pt-24">
      {/* Top hairline above the glass panel */}
      <div className="hr-hair mb-12 md:mb-16" />

      {/* Atmosphere — orange/cobalt aurora wash */}
      <div className="aurora pointer-events-none absolute inset-0" aria-hidden style={{ opacity: 0.32 }}>
        <span />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 110%, rgba(255, 122, 69, 0.12) 0%, transparent 60%)"
        }}
      />
      <div className="noise" aria-hidden />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="liquid-glass relative z-10 mx-auto mt-0 w-full max-w-[1500px] rounded-[28px] p-6 text-white/75 md:rounded-[40px] md:p-12"
      >
        {/* === Headline row === */}
        <div className="mb-8 grid grid-cols-1 gap-10 md:mb-12 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <span className="eyebrow">Engage</span>
            <h3 className="mt-6 font-display text-[clamp(2.5rem,8vw,5.5rem)] font-normal leading-[0.9] tracking-tightest text-white">
              Let&rsquo;s build{" "}
              <span className="font-italic font-light text-white/60">
                something
              </span>{" "}
              that <span className="font-medium">lasts.</span>
            </h3>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/55">
              We take on a small number of partnerships each quarter. Tell us
              about the system you need engineered.
            </p>
          </div>

          <div className="flex flex-col items-start justify-center gap-5 md:col-span-5 md:items-end md:text-right">
            <a
              href="mailto:igpl@internnationalgradus.com?subject=New project enquiry"
              className="btn-ember inline-flex items-center gap-3 rounded-full px-7 py-4 font-mono-disp text-[11px] font-medium uppercase tracking-wide2"
            >
              Start a project <span aria-hidden>→</span>
            </a>
            <a
              href="mailto:igpl@internnationalgradus.com"
              className="link-fill inline-flex items-center gap-2 font-display text-lg text-white md:text-xl"
            >
              <Mail size={16} className="opacity-60" />
              igpl@internnationalgradus.com
            </a>
            <div className="flex flex-col items-start gap-1 md:items-end">
              <a
                href="tel:+917871241179"
                className="link-fill inline-flex items-center gap-2 text-sm text-white/75"
              >
                <Phone size={13} className="opacity-60" />
                +91 78712 41179
              </a>
              <a
                href="tel:+919940203992"
                className="link-fill inline-flex items-center gap-2 text-sm text-white/75"
              >
                <Phone size={13} className="opacity-60" />
                +91 99402 03992
              </a>
            </div>
          </div>
        </div>

        {/* === Mid grid: brand + 3-column links === */}
        <div className="mb-10 grid grid-cols-1 gap-10 border-t border-white/10 pt-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 256 256"
                fill="currentColor"
                className="text-white"
                aria-hidden
              >
                <path d="M 4.688 136 C 68.373 136 120 187.627 120 251.312 C 120 252.883 119.967 254.445 119.905 256 L 0 256 L 0 136.096 C 1.555 136.034 3.117 136 4.688 136 Z M 251.312 136 C 252.883 136 254.445 136.034 256 136.096 L 256 256 L 136.095 256 C 136.032 254.438 136.001 252.875 136 251.312 C 136 187.627 187.627 136 251.312 136 Z M 119.905 0 C 119.967 1.555 120 3.117 120 4.688 C 120 68.373 68.373 120 4.687 120 C 3.117 120 1.555 119.967 0 119.905 L 0 0 Z M 256 119.905 C 254.445 119.967 252.883 120 251.312 120 C 187.627 120 136 68.373 136 4.687 C 136 3.117 136.033 1.555 136.095 0 L 256 0 Z" />
              </svg>
              <span className="font-display text-xl font-medium tracking-tight text-white">
                IGPL
              </span>
              <span className="font-mono-disp text-[10px] uppercase tracking-wide2 text-white/40">
                · Garudas
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              International Garudas is a software development and procurement
              firm engineering AI systems, enterprise platforms, and
              intelligence architecture from Chennai for partners worldwide.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="status-dot" />
              <span className="font-mono-disp text-[10px] uppercase tracking-wide2 text-white/55">
                Chennai · {time || "—— —— IST"}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3 md:gap-10">
            <div>
              <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-white">
                Discover
              </h4>
              <ul className="space-y-2 text-xs">
                {discover.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-white">
                Company
              </h4>
              <ul className="space-y-2 text-xs">
                {company.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-white">
                Concierge
              </h4>
              <ul className="space-y-2 text-xs">
                {concierge.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* === Oversized wordmark === */}
        <div className="my-8 overflow-hidden border-y border-white/10 py-6 md:my-10 md:py-8">
          <span
            className="block select-none text-center font-display text-[clamp(3rem,18vw,15rem)] font-light leading-[0.85] tracking-tightest"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.05) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            GARUDAS
            <span
              className="ml-2 inline-block align-top"
              style={{
                background:
                  "linear-gradient(180deg, var(--ember) 0%, rgba(255,122,69,0.15) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              .
            </span>
          </span>
        </div>

        {/* === Bottom bar === */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 md:flex-row md:gap-4">
          <p className="text-[10px] uppercase tracking-widest text-white/50">
            © {new Date().getFullYear()} International Garudas Pvt Ltd · Chennai, IN
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-widest text-white/50">
              Join the Journey:
            </span>
            <div className="flex items-center gap-3 text-white/70">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="opacity-70 transition-colors hover:text-white hover:opacity-100"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="opacity-70 transition-colors hover:text-white hover:opacity-100"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="opacity-70 transition-colors hover:text-white hover:opacity-100"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="opacity-70 transition-colors hover:text-white hover:opacity-100"
              >
                <Youtube size={16} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="opacity-70 transition-colors hover:text-white hover:opacity-100"
              >
                <Github size={16} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
