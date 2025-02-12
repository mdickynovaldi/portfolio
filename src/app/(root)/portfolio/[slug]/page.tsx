"use server";
import DetailPortfolio from "@/components/shared/portfolio/detail-portfolio";
import { getPortfolioDetail } from "@/services/portfolio";

// Definisikan tipe params sebagai Promise
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// Halaman detail portfolio
export default async function PortfolioDetailPage({ params }: Props) {
  try {
    // Tunggu params selesai di-resolve
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    // Ambil data portfolio secara asinkron menggunakan slug
    const portfolioDetail = await getPortfolioDetail(slug);

    // Tampilkan komponen detail portfolio
    return <DetailPortfolio portfolioDetail={portfolioDetail} />;
  } catch (error) {
    console.error("Error in PortfolioDetailPage:", error);
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <p className="text-gray-800 dark:text-neutral-200 text-xl">
          Portfolio tidak ditemukan
        </p>
      </div>
    );
  }
}
