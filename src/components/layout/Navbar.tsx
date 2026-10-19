"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation, socialLinks } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["work", "about", "stack", "contact"].map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-20% 0px -55%", threshold: [0.05, 0.25, 0.5] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.dataset.menuOpen = open ? "true" : "false";
    return () => {
      delete document.body.dataset.menuOpen;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <Link className="nav__mark" href="/#top" aria-label="Kalpesh Dandekar — back to top">
          KD<span>.</span>
        </Link>
        <nav className="nav__links" aria-label="Primary navigation">
          {navigation.map((item) => {
            const section = item.href.split("#")[1];
            return <Link key={item.href} href={item.href} className={activeSection === section ? "is-active" : undefined} aria-current={activeSection === section ? "location" : undefined}>{item.label}</Link>;
          })}
        </nav>
        <a className="nav__resume" href={socialLinks.resume} target="_blank" rel="noreferrer">
          Resume <ArrowUpRight aria-hidden="true" size={15} />
        </a>
        <button className="nav__menu-button" type="button" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="mobile-menu">
          Menu <Menu aria-hidden="true" size={18} />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={reduceMotion ? false : { clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={reduceMotion ? undefined : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="mobile-menu__top">
              <span className="nav__mark">KD<span>.</span></span>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close navigation menu">Close <X aria-hidden="true" size={18} /></button>
            </div>
            <nav aria-label="Mobile navigation">
              {navigation.map((item, index) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  <span>0{index + 1}</span>{item.label}<ArrowUpRight aria-hidden="true" />
                </Link>
              ))}
            </nav>
            <div className="mobile-menu__socials">
              <a href={socialLinks.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href={socialLinks.resume} target="_blank" rel="noreferrer">Resume ↗</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
