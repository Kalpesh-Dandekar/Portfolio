export const socialLinks = {
  github: "https://github.com/Kalpesh-Dandekar",
  linkedin: "https://www.linkedin.com/in/kalpesh-dandekar/",
  email: "mailto:kalpeshdandekar585@gmail.com",
  resume: "/documents/Kalpesh-Dandekar-Resume.pdf",
} as const;

export const navigation = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Stack", href: "/#stack" },
  { label: "Contact", href: "/#contact" },
] as const;

export const capabilities = [
  { label: "Languages", items: ["JavaScript", "TypeScript", "Python", "C++", "Java"] },
  { label: "Frontend", items: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Vite"] },
  { label: "Backend", items: ["Node.js", "Express.js", "FastAPI", "Flask", "REST APIs", "Socket.IO"] },
  { label: "Data", items: ["PostgreSQL", "MongoDB", "MySQL", "Prisma", "Neo4j"] },
  { label: "AI / Intelligence", items: ["Machine Learning", "NLP", "LLM APIs", "Semantic Search", "FAISS", "BM25", "Gemini"] },
  { label: "Engineering", items: ["Git", "GitHub", "Docker", "Postman", "VS Code"] },
] as const;

export const journey = [
  { year: "2023", title: "B.E. Information Technology", detail: "Began engineering studies at Mumbai University." },
  { year: "2025", title: "Full-stack foundations", detail: "Completed SmartBridge training and the MongoDB University developer path." },
  { year: "2025", title: "Product engineering", detail: "Built GrowStart as a connected full-stack startup ecosystem." },
  { year: "2026", title: "Intelligent systems", detail: "FraudCheck, HealthSync, TenderIQ, and ShadowOS." },
] as const;
