"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { journey } from "@/data/site";

export function JourneyTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="timeline" ref={ref}>
      <motion.div className="timeline__progress" style={reduceMotion ? { scaleY: 1 } : { scaleY: lineScale }} />
      {journey.map((item, index) => (
        <motion.article
          className="timeline__item"
          key={item.year}
          initial={reduceMotion ? false : { opacity: 0.35 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.65 }}
          transition={{ duration: 0.35 }}
        >
          <i aria-hidden="true" />
          <span>{item.year}</span><h3>{item.title}</h3><p>{item.detail}</p><small>0{index + 1}</small>
        </motion.article>
      ))}
    </div>
  );
}
