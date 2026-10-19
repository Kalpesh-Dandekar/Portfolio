"use client";

import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties } from "react";

type ProjectVisualProps = {
  project: "tenderiq" | "shadowos" | "growstart";
  expanded?: boolean;
};

const appear = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1 },
};

export function ProjectVisual({ project, expanded = false }: ProjectVisualProps) {
  const reduceMotion = useReducedMotion();
  const common = {
    initial: reduceMotion ? false : "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.25 },
    variants: appear,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  };

  if (project === "tenderiq") {
    return (
      <motion.div className={`project-visual project-visual--tender ${expanded ? "project-visual--expanded" : ""}`} aria-hidden="true" {...common}>
        <div className="visual-head"><span>TQ / EVIDENCE MAP</span><i>TRACEABLE</i></div>
        <div className="tender-docs"><span /><span /><span /></div>
        <div className="tender-path tender-path--a" />
        <div className="tender-path tender-path--b" />
        <div className="evidence-chain">
          <div><small>01</small><strong>Requirement</strong><i /></div>
          <div><small>02</small><strong>Claim</strong><i /></div>
          <div><small>03</small><strong>Evidence</strong><i /></div>
        </div>
        <div className="tender-output"><span>Evaluation</span><strong>Human decision</strong></div>
        <div className="visual-scan" />
      </motion.div>
    );
  }

  if (project === "shadowos") {
    const stages = ["Request", "Plan", "Simulate", "Risk", "Policy", "Approve", "Execute", "Audit", "Rollback"];
    return (
      <motion.div className={`project-visual project-visual--shadow ${expanded ? "project-visual--expanded" : ""}`} aria-hidden="true" {...common}>
        <div className="visual-head"><span>SO / GOVERNANCE BUS</span><i>CONTROLLED</i></div>
        <div className="shadow-pipeline">
          {stages.map((stage, index) => (
            <div className={index >= 3 && index <= 5 ? "is-gate" : ""} key={stage} style={{ "--step": index } as CSSProperties}>
              <small>{String(index + 1).padStart(2, "0")}</small><strong>{stage}</strong><i />
            </div>
          ))}
        </div>
        <div className="shadow-telemetry"><span>Policy gate</span><span>Approval required</span><span>Audit retained</span></div>
      </motion.div>
    );
  }

  return (
    <motion.div className={`project-visual project-visual--grow ${expanded ? "project-visual--expanded" : ""}`} aria-hidden="true" {...common}>
      <div className="visual-head"><span>GS / PRODUCT ECOSYSTEM</span><i>CONNECTED</i></div>
      <div className="grow-orbit">
        <div className="grow-core"><small>Growth</small><strong>Pathway</strong></div>
        <div className="grow-node grow-node--one"><small>01</small><strong>Analytics</strong></div>
        <div className="grow-node grow-node--two"><small>02</small><strong>Collaboration</strong></div>
        <div className="grow-node grow-node--three"><small>03</small><strong>Talent</strong></div>
        <div className="grow-node grow-node--four"><small>04</small><strong>Secure access</strong></div>
        <svg viewBox="0 0 600 300" preserveAspectRatio="none"><path d="M300 150 L95 58 M300 150 L505 58 M300 150 L95 242 M300 150 L505 242" /></svg>
      </div>
    </motion.div>
  );
}
