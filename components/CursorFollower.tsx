"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/* Spring-based custom cursor — sits above the existing radial cursor-spot.
   - Outer ring: lagged spring follow (soft, premium feel)
   - Inner dot: snappy 1:1 follow
   - Hides on touch devices, hides when window unfocused.
   Tuning: lower mass = snappier, lower damping = bouncier, higher stiffness = quicker return. */
const SPRING_OUTER = { mass: 0.35, damping: 22, stiffness: 220 };
const SPRING_INNER = { mass: 0.06, damping: 14, stiffness: 480 };

export default function CursorFollower() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const xSpring = useSpring(x, SPRING_OUTER);
  const ySpring = useSpring(y, SPRING_OUTER);
  const xFast = useSpring(x, SPRING_INNER);
  const yFast = useSpring(y, SPRING_INNER);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hover = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(hover.matches);
    const onChange = (e: MediaQueryListEvent) => setEnabled(e.matches);
    hover.addEventListener("change", onChange);
    return () => hover.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    document.addEventListener("pointerenter", enter);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      document.removeEventListener("pointerenter", enter);
    };
  }, [enabled, visible, x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Outer ring — lagged */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] mix-blend-difference"
        style={{
          x: xSpring,
          y: ySpring,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
          transition: "opacity 200ms ease"
        }}
      >
        <span className="block h-8 w-8 rounded-full border border-white/70" />
      </motion.div>
      {/* Inner dot — snappy */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] mix-blend-difference"
        style={{
          x: xFast,
          y: yFast,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
          transition: "opacity 200ms ease"
        }}
      >
        <span className="block h-1.5 w-1.5 rounded-full bg-white" />
      </motion.div>
    </>
  );
}
