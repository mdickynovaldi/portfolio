export interface EducationEntry {
  institution: string;
  degree: string;
  year: string;
  location: string;
  gpa: number;
}

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  tech_stack: string[];
}
