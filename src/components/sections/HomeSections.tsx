import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { capabilities, journey, socialLinks } from "@/data/site";
import { featuredProjects, selectedProjects } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";

function SectionIntro({ index, label, title }: { index: string; label: string; title: React.ReactNode }) {
  return (
    <Reveal className="section-intro">
      <div className="section-label"><span>{index}</span>{label}</div>
      <h2>{title}</h2>
    </Reveal>
  );
}

export function HomeSections() {
  return (
    <>
      <section className="section work" id="work">
        <SectionIntro index="02" label="Selected work" title={<>Systems built for <em>real decisions.</em></>} />
        <div className="featured-list">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06}>
              <article className="featured-project">
                <div className="featured-project__meta">
                  <span>{project.number}</span><p>{project.category}</p>
                </div>
                <div className="featured-project__body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul>{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
                </div>
                <div className="featured-project__actions">
                  <Link href={`/work/${project.slug}`}>View case study <ArrowRight aria-hidden="true" /></Link>
                  {project.repository && <a href={project.repository} target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" /></a>}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="selected-work">
          <div className="selected-work__heading"><span>More engineering work</span><span>04—06</span></div>
          {selectedProjects.map((project) => (
            <article className="small-project" key={project.slug}>
              <span>{project.number}</span>
              <div><h3>{project.title}</h3><p>{project.category}</p></div>
              <p>{project.description}</p>
              {project.repository ? <a href={project.repository} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><ArrowUpRight /></a> : <span className="small-project__dash" aria-hidden="true">—</span>}
            </article>
          ))}
        </div>
      </section>

      <section className="section about" id="about">
        <SectionIntro index="04" label="About" title={<>Beyond<br /><em>the code.</em></>} />
        <div className="about__content">
          <Reveal><p className="about__lead">I’m Kalpesh Dandekar — an Information Technology student and software engineer focused on intelligent, useful digital systems.</p></Reveal>
          <Reveal delay={0.08} className="about__detail">
            <p>I like taking ideas beyond prototypes: understanding the problem, engineering the system, and turning it into something people can actually use.</p>
            <a className="text-link" href={socialLinks.resume} target="_blank" rel="noreferrer">Open résumé <ArrowUpRight size={15} /></a>
          </Reveal>
        </div>
        <div className="about__facts">
          <div><span>Education</span><strong>B.E. Information Technology</strong></div>
          <div><span>University</span><strong>Mumbai University</strong></div>
          <div><span>Period</span><strong>2023—2027</strong></div>
          <div><span>Current CGPA</span><strong>8.06 / 10</strong></div>
        </div>
      </section>

      <section className="section stack" id="stack">
        <SectionIntro index="05" label="Capabilities" title={<>What I<br /><em>build with.</em></>} />
        <div className="capabilities">
          {capabilities.map((group, index) => (
            <Reveal className="capability" key={group.label} delay={index * 0.04}>
              <span>0{index + 1}</span>
              <h3>{group.label}</h3>
              <p>{group.items.join(" · ")}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section journey" id="journey">
        <SectionIntro index="06" label="Journey + proof" title={<>Learning by<br /><em>building.</em></>} />
        <div className="timeline">
          {journey.map((item) => (
            <Reveal className="timeline__item" key={item.year}>
              <span>{item.year}</span><h3>{item.title}</h3><p>{item.detail}</p>
            </Reveal>
          ))}
        </div>
        <div className="credentials">
          <div><span>2025</span><strong>Full Stack Developer Training</strong><p>SmartBridge</p></div>
          <div><span>2025</span><strong>Mongo Node.js Developer Path</strong><p>MongoDB University</p></div>
          <a href={socialLinks.github} target="_blank" rel="noreferrer"><span>Source</span><strong>Inspect the engineering work</strong><p>GitHub <ArrowUpRight size={14} /></p></a>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact__meta"><span>08 / Let’s connect</span><span>Available for opportunities</span></div>
        <Reveal><h2>Have an idea?<br /><em>Let’s build it.</em></h2></Reveal>
        <div className="contact__links">
          <a href={socialLinks.email}>Email <ArrowUpRight /></a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>
          <a href={socialLinks.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
        </div>
        <p className="contact__note">Open to internships, full-time opportunities, and thoughtful collaborations.</p>
      </section>
    </>
  );
}
