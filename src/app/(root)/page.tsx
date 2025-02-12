import Education from "@/components/shared/education/education";
import About from "@/components/shared/about/about";
import Experience from "@/components/shared/experience/experience";
import Skills from "@/components/shared/tech-stack/skills";
import Title from "@/components/shared/title/title";
import PortfolioSection from "@/components/shared/portfolio/portfolio-section";
import Contact from "@/components/shared/contact/contact";

export default async function Home() {
  return (
    <section className="relative bg-white dark:bg-black">
      {/* Title Section */}
      <Title />

      {/* About Me Section */}
      <About />

      {/* Education Section */}
      <Education />

      {/* Experience Section */}
      <Experience />

      {/* Tech Stack Section */}
      <Skills />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Contact Section */}
      <Contact />
    </section>
  );
}
