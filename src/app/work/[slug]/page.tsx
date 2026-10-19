import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { featuredProjects, getProject } from "@/data/projects";
import { ArchitectureVisual } from "@/components/ui/ArchitectureVisual";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return featuredProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project?.featured) return {};
  return { title: project.title, description: project.description, openGraph: { title: project.fullTitle, description: project.description } };
}

export default async function WorkPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project?.featured) notFound();
  const currentIndex = featuredProjects.findIndex(({ slug }) => slug === project.slug);
  const nextProject = featuredProjects[(currentIndex + 1) % featuredProjects.length];

  return (
    <>
      <Navbar />
      <main className="case-study">
        <header className="case-hero">
          <div className="case-hero__top"><span>{project.number} / Case study</span><span>{project.category}</span></div>
          <h1>{project.title}</h1>
          <div className="case-hero__statement"><p>{project.statement}</p><span>{project.period ?? "SELECTED WORK"}</span></div>
          <div className="case-hero__line" aria-hidden="true" />
        </header>

        <section className="case-overview">
          <div className="section-label"><span>01</span>Overview</div>
          <p>{project.description}</p>
          <ul>{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
        </section>

        <section className="case-split">
          <article><div className="section-label"><span>02</span>The problem</div><h2>A system problem, not a surface problem.</h2><p>{project.problem}</p></article>
          <article><div className="section-label"><span>03</span>The approach</div><h2>Structure before complexity.</h2><p>{project.approach}</p></article>
        </section>

        <ArchitectureVisual project={project} />

        <section className="case-capabilities">
          <div><div className="section-label"><span>06</span>Key capabilities</div><h2>Built around the work that matters.</h2></div>
          <ol>{project.capabilities?.map((capability, index) => <li key={capability}><span>{String(index + 1).padStart(2, "0")}</span>{capability}</li>)}</ol>
        </section>

        <section className="case-engineering">
          <div className="section-label"><span>07</span>Engineering decisions</div>
          <div className="case-engineering__intro"><h2>Design choices,<br /><em>not decoration.</em></h2><p>{project.engineering}</p></div>
          <div className="decision-grid">{project.decisions?.map((decision, index) => <article key={decision.title}><span>0{index + 1}</span><h3>{decision.title}</h3><p>{decision.detail}</p></article>)}</div>
        </section>

        <section className="case-technology">
          <div><div className="section-label"><span>08</span>Technology</div><h2>Purpose-built stack.</h2></div>
          <ul>{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
        </section>

        <section className="case-demonstrates">
          <div className="section-label"><span>09</span>What it demonstrates</div>
          <p>{project.demonstrates}</p>
        </section>

        <nav className="case-next" aria-label="Project navigation">
          <Link href="/#work"><ArrowLeft aria-hidden="true" /> All work</Link>
          {project.repository && <a href={project.repository} target="_blank" rel="noreferrer">Repository <ArrowUpRight aria-hidden="true" /></a>}
          <Link href={`/work/${nextProject.slug}`}><span>Next project</span>{nextProject.title} <ArrowRight aria-hidden="true" /></Link>
        </nav>
      </main>
      <Footer />
    </>
  );
}
