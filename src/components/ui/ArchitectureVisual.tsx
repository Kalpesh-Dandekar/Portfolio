import { ProjectVisual } from "@/components/ui/ProjectVisual";
import type { Project } from "@/types/project";

const architecture: Record<string, { label: string; layers: { title: string; detail: string }[] }> = {
  tenderiq: {
    label: "Evaluation architecture",
    layers: [
      { title: "Documents", detail: "Tender packages + vendor submissions" },
      { title: "Extraction", detail: "Text, OCR, document processing" },
      { title: "Blueprints", detail: "Tender + vendor intelligence" },
      { title: "Retrieval", detail: "Semantic search + deterministic checks" },
      { title: "Evidence map", detail: "Requirement ↔ claim ↔ evidence" },
      { title: "Decision support", detail: "Explainable evaluation for the evaluator" },
    ],
  },
  shadowos: {
    label: "Governance architecture",
    layers: [
      { title: "Intent", detail: "Request enters a role-aware workspace" },
      { title: "Plan", detail: "Action sequence is prepared" },
      { title: "Simulate", detail: "Effects considered before execution" },
      { title: "Gate", detail: "Risk, policy, and approval controls" },
      { title: "Execute", detail: "Approved action proceeds" },
      { title: "Recover", detail: "Audit trail + rollback path" },
    ],
  },
  growstart: {
    label: "Product ecosystem",
    layers: [
      { title: "Secure access", detail: "Authenticated product entry" },
      { title: "Growth paths", detail: "AI-guided next-step structure" },
      { title: "Analytics", detail: "Progress and product visibility" },
      { title: "Collaboration", detail: "Shared startup workflows" },
      { title: "Talent", detail: "Marketplace capabilities" },
      { title: "Platform", detail: "Connected full-stack experience" },
    ],
  },
};

export function ArchitectureVisual({ project }: { project: Project }) {
  const system = architecture[project.slug];
  return (
    <section className={`architecture architecture--${project.slug}`}>
      <div className="architecture__intro">
        <div className="section-label"><span>04</span>How it works / {system.label}</div>
        <h2>The system,<br /><em>made visible.</em></h2>
      </div>
      <ProjectVisual project={project.slug as ProjectVisualProject} expanded />
      <ol className="architecture__layers">
        {system.layers.map((layer, index) => (
          <li key={layer.title}><span>{String(index + 1).padStart(2, "0")}</span><strong>{layer.title}</strong><p>{layer.detail}</p></li>
        ))}
      </ol>
    </section>
  );
}

type ProjectVisualProject = "tenderiq" | "shadowos" | "growstart";
