import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { featuredProjects, getProject } from "@/data/projects";

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

        <section className="case-flow">
          <div className="section-label"><span>04</span>How it works</div>
          <div className="case-flow__steps">
            {project.workflow?.map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong><ArrowRight aria-hidden="true" /></div>)}
          </div>
        </section>

        <section className="case-capabilities">
          <div><div className="section-label"><span>05</span>Key capabilities</div><h2>Built around the work that matters.</h2></div>
          <ol>{project.capabilities?.map((capability, index) => <li key={capability}><span>{String(index + 1).padStart(2, "0")}</span>{capability}</li>)}</ol>
        </section>

        <section className="case-engineering">
          <div className="section-label"><span>06</span>Engineering thinking</div>
          <blockquote>{project.engineering}</blockquote>
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
