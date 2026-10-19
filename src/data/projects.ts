import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "tenderiq",
    number: "01",
    title: "TenderIQ",
    fullTitle: "TenderIQ — Tender Evaluation and Procurement Platform",
    category: "AI / NLP / PROCUREMENT INTELLIGENCE",
    description:
      "AI-assisted procurement intelligence designed to make tender evaluation explainable, traceable, and structured — while keeping the evaluator in control.",
    technologies: ["Python", "FastAPI", "Semantic Search", "PostgreSQL", "Neo4j"],
    featured: true,
    caseStudyAvailable: true,
    statement: "Evidence before inference.",
    problem:
      "Tender evaluation involves dense documents, scattered evidence, and decisions that must remain defensible. The challenge is not simply finding text; it is connecting each requirement to a vendor claim and the evidence that supports it.",
    approach:
      "TenderIQ combines deterministic checks with NLP and semantic retrieval to organize evaluation material without replacing human judgment. It frames AI as decision support: surfaced evidence remains inspectable and the evaluator owns the final call.",
    workflow: ["Requirement", "Claim", "Evidence", "Evaluation", "Decision support"],
    capabilities: [
      "Requirement–claim–evidence mapping",
      "Tender and vendor blueprints",
      "Document verification",
      "Explainable evaluation support",
      "Vendor comparison",
      "Knowledge graph concepts",
    ],
    engineering:
      "The system separates extraction, retrieval, evaluation, and presentation so each layer can be inspected. Semantic search improves recall; deterministic rules preserve precision where requirements are explicit.",
    decisions: [
      { title: "Hybrid evaluation", detail: "Use deterministic checks where requirements are explicit and semantic methods where language varies." },
      { title: "Traceable evidence", detail: "Keep requirements, claims, and source evidence connected instead of collapsing them into one score." },
      { title: "Evaluator control", detail: "Present inspectable decision support without replacing the human evaluator." },
    ],
    demonstrates: "A system-level approach to applied NLP: retrieval, structured evidence, explainability, and human judgment working as distinct layers.",
  },
  {
    slug: "shadowos",
    number: "02",
    title: "ShadowOS",
    fullTitle: "ShadowOS — AI Agent Governance Platform",
    category: "AI AGENTS / GOVERNANCE / SYSTEM DESIGN",
    description:
      "A governance layer for AI actions: simulate intent, assess risk, apply policy, request approval, and preserve a complete audit trail before execution.",
    technologies: ["Next.js", "TypeScript", "Node.js", "Prisma", "PostgreSQL"],
    featured: true,
    repository: "https://github.com/Kalpesh-Dandekar/ShadowOS",
    caseStudyAvailable: true,
    statement: "Govern actions before execution.",
    problem:
      "AI agents can move from suggestion to action faster than conventional controls can respond. Useful autonomy needs visible intent, enforceable policy, clear accountability, and a path back when something goes wrong.",
    approach:
      "ShadowOS turns an AI request into a controlled pipeline. Plans are simulated and scored before policy gates and human approvals determine whether execution should proceed.",
    workflow: ["Request", "Planner", "Simulation", "Risk", "Policy", "Approval", "Execution", "Audit", "Rollback"],
    capabilities: [
      "Role-based access control",
      "AI command center",
      "Planning and simulation",
      "Risk and policy engines",
      "Approval workflow",
      "Controlled execution, audit, and rollback",
    ],
    engineering:
      "The product treats governance as part of the execution architecture, not a report added afterward. Employee, manager, and admin roles make responsibility explicit throughout the workflow.",
    decisions: [
      { title: "Control before action", detail: "Simulation, risk, and policy checks occur before execution rather than after the fact." },
      { title: "Explicit authority", detail: "Employee, manager, and admin roles make responsibility visible throughout the workflow." },
      { title: "Recoverable operation", detail: "Audit and rollback remain part of the controlled execution path." },
    ],
    demonstrates: "How an AI-enabled product can make autonomy inspectable, permissioned, and recoverable through system design.",
  },
  {
    slug: "growstart",
    number: "03",
    title: "GrowStart",
    fullTitle: "GrowStart — Smart Startup Growth Ecosystem",
    category: "FULL-STACK / PRODUCT ENGINEERING",
    description:
      "A scalable collaboration platform connecting AI-guided growth pathways, analytics, talent marketplace workflows, and secure access in one product ecosystem.",
    period: "JUL 2025 — DEC 2025",
    technologies: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB"],
    featured: true,
    caseStudyAvailable: true,
    statement: "From an idea to a usable ecosystem.",
    problem:
      "Startup growth work is distributed across planning, analytics, collaboration, and access to talent. Fragmented tools make it harder to see the next useful action and coordinate progress.",
    approach:
      "GrowStart brings these workflows into a single full-stack product, pairing structured growth pathways with analytics and marketplace capabilities while maintaining secure authentication.",
    workflow: ["Discover", "Plan", "Track", "Collaborate", "Grow"],
    capabilities: [
      "AI-driven growth pathways",
      "Analytics dashboards",
      "Talent marketplace capabilities",
      "Collaboration workflows",
      "Secure authentication",
      "Responsive product interface",
    ],
    engineering:
      "The project centers product engineering: translating a broad ecosystem idea into coherent user journeys, data-backed features, and a maintainable JavaScript stack across frontend and backend.",
    decisions: [
      { title: "Connected journeys", detail: "Growth pathways, analytics, collaboration, and talent workflows belong to one coherent product experience." },
      { title: "Full-stack continuity", detail: "A shared TypeScript-oriented stack supports consistent implementation across product layers." },
      { title: "Secure entry", detail: "Authentication provides the access foundation for the wider startup ecosystem." },
    ],
    demonstrates: "The ability to shape a broad product concept into connected user journeys and a maintainable full-stack implementation.",
  },
  {
    slug: "healthsync",
    number: "04",
    title: "HealthSync",
    fullTitle: "HealthSync",
    category: "OPEN SOURCE / HEALTHCARE / FULL STACK",
    description:
      "A role-aware healthcare platform for appointments, reports, emergency workflows, e-prescriptions, and medication compliance.",
    technologies: ["React", "TypeScript", "Node.js", "Socket.IO", "PostgreSQL"],
    featured: false,
    repository: "https://github.com/Kalpesh-Dandekar/HealthSync---ROSPL",
    caseStudyAvailable: false,
  },
  {
    slug: "fraudcheck",
    number: "05",
    title: "FraudCheck",
    fullTitle: "FraudCheck — AI Powered Fraud Detection System",
    category: "AI / ML / FRAUD ANALYSIS",
    description:
      "A fraud analysis platform combining machine-learning signals, anomaly detection, rule-based intelligence, and explainable risk scoring.",
    period: "JAN 2026 — APR 2026",
    technologies: ["MERN", "Python", "Flask", "Machine Learning", "REST APIs"],
    featured: false,
    caseStudyAvailable: false,
  },
  {
    slug: "smartpark",
    number: "06",
    title: "SmartPark",
    fullTitle: "SmartPark",
    category: "IOT / WEB / SMART SYSTEMS",
    description:
      "A smart parking web system connecting reservations, slot management, activity logs, and a QR-based gate verification demo flow.",
    technologies: ["Web", "Firebase", "QR Verification", "IoT Concepts"],
    featured: false,
    caseStudyAvailable: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const selectedProjects = projects.filter((project) => !project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
