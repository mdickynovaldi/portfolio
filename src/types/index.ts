export interface EducationEntry {
  institution: string;
  degree: string;
  year: string;
  location: string;
  gpa: number;
}

export interface PortfolioItem {
  id: number;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  tech_stack: string[];
  demo_url?: string;
  github_url?: string;
}
