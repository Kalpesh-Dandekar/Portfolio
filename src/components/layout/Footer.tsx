import Link from "next/link";
import { socialLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Kalpesh Dandekar</strong>
        <span>Software Engineer</span>
      </div>
      <div className="footer__links">
        <a href={socialLinks.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={socialLinks.resume} target="_blank" rel="noreferrer">Resume</a>
      </div>
      <div className="footer__meta">
        <span>Designed + engineered with intent.</span>
        <Link href="/#top">Back to top ↑</Link>
      </div>
    </footer>
  );
}
