"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const TOTAL_FRAMES = 32;
const framePath = (i: number) =>
  `/frames/ezgif-frame-${String(i + 1).padStart(3, "0")}.jpg`;

export default function ScrollSequence() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const targetFrameRef = useRef(0);
  const renderedFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [progressPct, setProgressPct] = useState(0);
  const [bg, setBg] = useState("#0a0a0a");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"]
  });

  const scrollFrame = useTransform(
    scrollYProgress,
    [0, 1],
    [0, TOTAL_FRAMES - 1]
  );

  /* Preload + sample bg corner color from frame 1 */
  useEffect(() => {
    let cancelled = false;
    let count = 0;
    const imgs: HTMLImageElement[] = new Array(TOTAL_FRAMES);

    const sampleBg = (img: HTMLImageElement) => {
      try {
        const c = document.createElement("canvas");
        c.width = 8;
        c.height = 8;
        const cx = c.getContext("2d");
        if (!cx) return;
        cx.drawImage(img, 0, 0, 8, 8);
        const d = cx.getImageData(0, 0, 8, 8).data;
        const corners = [0, 7, 56, 63];
        let r = 0, g = 0, b = 0;
        corners.forEach((i) => {
          r += d[i * 4]; g += d[i * 4 + 1]; b += d[i * 4 + 2];
        });
        r = Math.round(r / corners.length);
        g = Math.round(g / corners.length);
        b = Math.round(b / corners.length);
        const hex = "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
        setBg(hex);
        document.documentElement.style.setProperty("--frame-bg", hex);
      } catch {}
    };

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.decoding = "async";
      img.src = framePath(i);
      img.onload = () => {
        count++;
        if (cancelled) return;
        if (i === 0) sampleBg(img);
        setProgressPct(Math.round((count / TOTAL_FRAMES) * 100));
        if (count === TOTAL_FRAMES) { imagesRef.current = imgs; setLoaded(true); }
      };
      img.onerror = () => {
        count++;
        if (count === TOTAL_FRAMES) { imagesRef.current = imgs; setLoaded(true); }
      };
      imgs[i] = img;
    }
    return () => { cancelled = true; };
  }, []);

  /* Resize canvas DPR-aware, visualViewport for iOS */
  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current; if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.visualViewport?.height ?? window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
      const ctx = canvas.getContext("2d");
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
      paint(renderedFrameRef.current);
    };
    resize();
    window.addEventListener("resize", resize);
    window.visualViewport?.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      window.visualViewport?.removeEventListener("resize", resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  /* scroll → target frame */
  useEffect(() => {
    const unsub = scrollFrame.on("change", (v) => { targetFrameRef.current = v; });
    return () => unsub();
  }, [scrollFrame]);

  /* rAF lerp loop for video-like playback */
  useEffect(() => {
    if (!loaded) return;
    const tick = () => {
      const t = targetFrameRef.current;
      const c = renderedFrameRef.current;
      const lerp = isMobile ? 0.45 : 0.18;
      const next = c + (t - c) * lerp;
      const snapped = Math.abs(next - t) < 0.04 ? t : next;
      if (snapped !== c) {
        renderedFrameRef.current = snapped;
        paint(snapped);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded, isMobile]);

  const paint = (rawIndex: number) => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    const imgs = imagesRef.current; if (!imgs.length) return;
    const idx = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(rawIndex)));
    const img = imgs[idx];
    if (!img || !img.complete || !img.naturalWidth) return;
    const vw = window.innerWidth;
    const vh = window.visualViewport?.height ?? window.innerHeight;
    ctx.clearRect(0, 0, vw, vh);
    const iw = img.naturalWidth, ih = img.naturalHeight;
    /* Always cover-fit — fills the viewport completely on every device.
       Landscape frames on a portrait phone will be cropped left/right,
       which is what we want (Tesla/Apple do the same on hero videos). */
    const scale = Math.max(vw / iw, vh / ih);
    const dw = iw * scale, dh = ih * scale;
    ctx.drawImage(img, (vw - dw) / 2, (vh - dh) / 2, dw, dh);
  };

  /* Overlay opacities — softer, longer hold */
  const o0 = useTransform(scrollYProgress, [0, 0.08, 0.18, 0.24], [1, 1, 0.4, 0]);
  const o30 = useTransform(scrollYProgress, [0.2, 0.3, 0.42, 0.5], [0, 1, 1, 0]);
  const o60 = useTransform(scrollYProgress, [0.5, 0.6, 0.72, 0.8], [0, 1, 1, 0]);
  const o90 = useTransform(scrollYProgress, [0.78, 0.88, 1, 1], [0, 1, 1, 1]);

  return (
    <section
      ref={wrapperRef}
      id="hero"
      className="relative w-full"
      style={{ height: isMobile ? "160vh" : "550vh", background: bg }}
    >
      <div
        className="sticky top-0 w-full overflow-hidden"
        style={{ height: "100dvh", background: bg }}
      >
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />

        {/* Soft outer vignette — sampled bg */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center, transparent 50%, ${bg} 100%)`
          }}
        />
        {/* Cinematic light leak — breathing overlay */}
        <div className="light-leak" aria-hidden />
        <div className="noise" />

        {/* Loader — minimalist counter */}
        <AnimatePresence>
          {!loaded && (
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
              className="absolute inset-0 z-30 flex items-end justify-between px-6 pb-10 md:px-12 md:pb-14"
              style={{ background: bg }}
            >
              <span className="font-mono-disp text-[10px] uppercase text-white/40">
                International Garudas
              </span>
              <span className="font-display text-5xl font-light tabular-nums text-white md:text-7xl">
                {String(progressPct).padStart(2, "0")}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Top nav — editorial restraint */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: loaded ? 1 : 0, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
          className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-5 pt-[max(20px,env(safe-area-inset-top))] py-6 md:px-12 md:py-8"
        >
          <span className="font-mono-disp text-[10px] uppercase text-white/85">
            IGPL<span className="mx-2 text-white/30">/</span>Chennai
          </span>
          <a
            href="mailto:hello@internnationalgarudas.com"
            className="link-fill font-mono-disp text-[10px] uppercase text-white/75"
          >
            Contact
          </a>
        </motion.div>

        {/* Scroll progress — bottom hairline */}
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="absolute bottom-0 left-0 z-20 h-px w-full origin-left bg-white/70"
        />

        {/* ── 0% Hero ─────────────────────────────────────────────── */}
        <motion.div
          style={{ opacity: o0 }}
          className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-end px-5 pb-[max(80px,env(safe-area-inset-bottom))] md:px-12 md:pb-28"
        >
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="mb-5 block font-mono-disp text-[10px] uppercase text-white/45">
                ✱ Software Solutions Partner — Est. Chennai
              </span>
              <h1 className="font-display text-display-lg font-normal italic text-white">
                International
                <br />
                <span className="not-italic font-medium">Garudas.</span>
              </h1>
            </div>
            <div className="hidden max-w-[20ch] pb-3 text-right md:block">
              <p className="text-sm leading-relaxed text-white/65">
                A software development & procurement firm bridging businesses and
                technology — from India to the world.
              </p>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5 md:mt-14 md:pt-6">
            <span className="font-mono-disp text-[10px] uppercase text-white/40">
              (Scroll to begin)
            </span>
            <span className="font-mono-disp text-[10px] tabular-nums text-white/40">
              01 / 04
            </span>
          </div>
          <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-white/70 md:hidden">
            A software development & procurement firm bridging businesses and
            technology.
          </p>
        </motion.div>

        {/* ── 30% — Build (left, editorial) ───────────────────────── */}
        <motion.div
          style={{ opacity: o30 }}
          className="pointer-events-none absolute inset-0 z-10 flex items-center px-6 md:px-12"
        >
          <div className="w-full max-w-2xl">
            <span className="mb-5 block font-mono-disp text-[10px] uppercase text-white/45">
              §01 — What we build
            </span>
            <h2 className="font-display text-display font-normal text-white">
              We engineer
              <br />
              <span className="italic font-light text-white/85">software</span> that
              <br />
              <span className="font-medium">earns its keep.</span>
            </h2>
            <p className="mt-6 max-w-[44ch] text-sm leading-relaxed text-white/65 md:text-base">
              End-to-end product engineering — web platforms, native mobile,
              AI/ML systems, and SaaS — built by vetted teams in Chennai for
              clients across the world.
            </p>
            <div className="mt-8 flex items-center gap-3 font-mono-disp text-[10px] uppercase text-white/40">
              <span>02 / 04</span>
              <span className="h-px w-12 bg-white/20" />
            </div>
          </div>
        </motion.div>

        {/* ── 60% — Scale (right) ─────────────────────────────────── */}
        <motion.div
          style={{ opacity: o60 }}
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-end px-6 md:px-12"
        >
          <div className="w-full max-w-2xl md:text-right">
            <span className="mb-5 block font-mono-disp text-[10px] uppercase text-white/45">
              §02 — How we scale
            </span>
            <h2 className="font-display text-display font-normal text-white">
              Enterprise systems,
              <br />
              <span className="italic font-light text-white/85">cloud</span>-native by
              <br />
              <span className="font-medium">default.</span>
            </h2>
            <p className="mt-6 max-w-[44ch] text-sm leading-relaxed text-white/65 md:ml-auto md:text-base">
              ERP, CRM, automation, procurement, and cloud migration — we
              don't just write code, we run the full software lifecycle.
            </p>
            <div className="mt-8 flex items-center gap-3 font-mono-disp text-[10px] uppercase text-white/40 md:justify-end">
              <span className="h-px w-12 bg-white/20" />
              <span>03 / 04</span>
            </div>
          </div>
        </motion.div>

        {/* ── 90% — CTA (editorial centered) ──────────────────────── */}
        <motion.div
          style={{ opacity: o90 }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-5 text-center"
        >
          <span className="mb-4 font-mono-disp text-[10px] uppercase text-white/45">
            §03 — Begin
          </span>
          <h2 className="font-display text-display font-normal text-white text-balance">
            Build a software <br className="hidden md:inline" />
            <span className="italic">legacy.</span>
          </h2>
          <p className="mt-5 max-w-[40ch] px-2 text-[15px] leading-relaxed text-white/70 md:text-base">
            Chennai HQ. Global systems. Talk to a partner who handles talent,
            technology, and delivery — not just code.
          </p>
          <div className="pointer-events-auto mt-8 flex w-full max-w-sm flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
            <a
              href="mailto:hello@internnationalgarudas.com"
              className="btn-ink inline-flex items-center justify-center rounded-full border border-white px-8 py-4 font-mono-disp text-[11px] uppercase tracking-wider text-white"
            >
              Start a project →
            </a>
            <a
              href="#services"
              className="link-fill inline-flex items-center justify-center py-3 font-mono-disp text-[10px] uppercase text-white/70 sm:ml-4 sm:py-0"
            >
              See our work
            </a>
          </div>
          <span className="mt-10 font-mono-disp text-[10px] uppercase text-white/35">
            04 / 04
          </span>
        </motion.div>
      </div>
    </section>
  );
}
