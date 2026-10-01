export type Experience = {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  overview: string;
  highlights: string[];
  technicalDetails: string[];
  technologies: string[];
};

export type ProjectStatus = "professional" | "open-source" | "placeholder";

export type EngineeringProject = {
  title: string;
  slug: string;
  context: string;
  summary: string;
  problem: string;
  constraints: string[];
  approach: string;
  debugging: string;
  outcome: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  status: ProjectStatus;
};

export type SkillGroup = {
  category: string;
  description: string;
  items: string[];
};

export type EngineeringNote = {
  title: string;
  slug: string;
  summary: string;
  publishedAt: string;
  published: boolean;
};

