"use server";

import { getPortfolioData } from "@/services/portfolio";
import { PortfolioContent } from "@/components/shared/portfolio/portfolio-content";

export default async function PortfolioPage() {
  const portfolioItems = await getPortfolioData();

  return <PortfolioContent initialItems={portfolioItems} />;
}
