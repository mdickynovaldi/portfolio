"use server";
import { Metadata } from "next";
import DetailPortfolio from "@/components/shared/portfolio/detail-portfolio";
import { getPortfolioDetail } from "@/services/portfolio";
import { PortfolioItem } from "@/types";

// Definisikan tipe params sebagai Promise
type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const portfolio: PortfolioItem = await getPortfolioDetail(params.slug);

  return {
    title: portfolio.title,
    description: portfolio.description,
    openGraph: {
      title: `${portfolio.title} - Portfolio Project`,
      description: portfolio.description,
      images: [portfolio.thumbnail],
    },
  };
}

// Halaman detail portfolio
export default async function PortfolioDetailPage({ params }: Props) {
  const portfolio: PortfolioItem = await getPortfolioDetail(params.slug);
  return <DetailPortfolio portfolioDetail={[portfolio]} />;
}
