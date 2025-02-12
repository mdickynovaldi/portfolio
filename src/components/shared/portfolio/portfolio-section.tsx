import { Button } from "@/components/ui/button";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { getPortfolioData } from "@/services/portfolio";

import Link from "next/link";

export default async function PortfolioSection() {
  const portfolioData = await getPortfolioData();
  return (
    <section className="py-10 md:py-44">
      <div className="w-full px-2 md:px-4 py-4 md:py-12">
        <div className="overflow-x-hidden">
          <HeroParallax products={portfolioData} />
        </div>
        <div className="flex justify-center">
          <Link href="/portfolio">
            <Button>View All Projects</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
