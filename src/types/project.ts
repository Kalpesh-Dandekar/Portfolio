export type Project = {
  slug: string;
  number: string;
  title: string;
  fullTitle: string;
  category: string;
  description: string;
  period?: string;
  technologies: string[];
  featured: boolean;
  repository?: string;
  caseStudyAvailable: boolean;
  statement?: string;
  problem?: string;
  approach?: string;
  workflow?: string[];
  capabilities?: string[];
  engineering?: string;
};
