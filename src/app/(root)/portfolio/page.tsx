"use server";

import { getPortfolioData } from "@/services/portfolio";
import { PortfolioContent } from "@/components/shared/portfolio/portfolio-content";
import { PortfolioItem } from "@/types";

export default async function PortfolioPage() {
  const portfolioItems: PortfolioItem[] = await getPortfolioData();

  return <PortfolioContent initialItems={portfolioItems} />;
}
