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
  category: string;
  tech_stack: string[];
  link: string;
  thumbnail: string;
  images: string[];
  live_url: string;
}
