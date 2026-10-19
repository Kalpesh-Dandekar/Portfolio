"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";
import { socialLinks } from "@/data/site";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 80, damping: 24 });
  const springY = useSpring(pointerY, { stiffness: 80, damping: 24 });
  const portraitX = useTransform(springX, [-0.5, 0.5], [-7, 7]);
  const portraitY = useTransform(springY, [-0.5, 0.5], [-5, 5]);

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section className="hero" id="top" onMouseMove={handleMove} onMouseLeave={() => { pointerX.set(0); pointerY.set(0); }}>
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__copy">
        <motion.div className="eyebrow" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <span>Software engineer</span><span>Full-stack × AI</span>
        </motion.div>
        <p className="hero__name">Kalpesh Dandekar</p>
        <h1 className="hero__title" aria-label="Building intelligent systems.">
          {["Building", "intelligent", "systems."].map((line, index) => (
            <span className="hero__line-mask" key={line}>
              <motion.span
                initial={reduceMotion ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, delay: 0.08 + index * 0.09, ease: [0.22, 1, 0.36, 1] }}
              >{line}</motion.span>
            </span>
          ))}
        </h1>
        <motion.div className="hero__bottom" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}>
          <p>I build full-stack and AI-powered products around real-world problems.</p>
          <div className="hero__actions">
            <Link className="cta cta--primary" href="#work">Explore work <ArrowDownRight aria-hidden="true" size={18} /></Link>
            <a className="text-link" href={socialLinks.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" size={15} /></a>
            <a className="text-link" href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" size={15} /></a>
          </div>
        </motion.div>
      </div>

      <motion.div className="portrait" style={reduceMotion ? undefined : { x: portraitX, y: portraitY }} initial={reduceMotion ? false : { opacity: 0, clipPath: "inset(18% 0 0 0)" }} animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }} transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}>
        <div className="portrait__frame">
          <Image
            src="/images/portrait/kalpesh-original.jpg"
            alt="Portrait of Kalpesh Dandekar"
            fill
            priority
            sizes="(max-width: 767px) 92vw, 48vw"
            className="portrait__image"
          />
          <div className="portrait__wash" aria-hidden="true" />
          <div className="portrait__scan" aria-hidden="true" />
        </div>
        <span className="portrait__index">KD / 2026</span>
        <span className="portrait__system"><i /> System online</span>
        <span className="portrait__corner portrait__corner--a" aria-hidden="true" />
        <span className="portrait__corner portrait__corner--b" aria-hidden="true" />
      </motion.div>

      <div className="hero__scroll" aria-hidden="true"><span>Scroll to inspect</span><i /></div>
    </section>
  );
}
