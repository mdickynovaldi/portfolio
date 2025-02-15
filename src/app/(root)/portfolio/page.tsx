"use server";

import { Metadata } from "next";
import { getPortfolioData } from "@/services/portfolio";
import { PortfolioContent } from "@/components/shared/portfolio/portfolio-content";
import { PortfolioItem } from "@/types";

export const metadata: Metadata = {
  title: "Portfolio Projects",
  description:
    "Kumpulan proyek terbaik yang telah saya kerjakan, termasuk pengembangan web, mobile apps, dan game development.",
  openGraph: {
    title: "Portfolio Projects - Moch Dicky Novaldi",
    description:
      "Kumpulan proyek terbaik yang telah saya kerjakan, termasuk pengembangan web, mobile apps, dan game development.",
  },
};

export default async function PortfolioPage() {
  const portfolioItems: PortfolioItem[] = await getPortfolioData();

  return <PortfolioContent initialItems={portfolioItems} />;
}
