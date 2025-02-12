"use client";
import { motion } from "framer-motion";
import { PortfolioItem } from "@/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DetailPortfolio({
  portfolioDetail,
}: {
  portfolioDetail: PortfolioItem[];
}) {
  const router = useRouter();

  if (!portfolioDetail || portfolioDetail.length === 0) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <p className="text-gray-800 dark:text-neutral-200 text-xl">
          Portfolio tidak ditemukan
        </p>
      </div>
    );
  }

  const portfolio = portfolioDetail[0] as PortfolioItem;

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center antialiased bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8"
        >
          {/* Header dengan tombol kembali */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="flex items-center gap-2 text-gray-800 dark:text-neutral-200"
              onClick={() => router.back()}
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Kembali</span>
            </Button>
            <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-500 dark:from-neutral-200 dark:to-neutral-500">
              {portfolio.title}
            </h1>
          </div>

          {/* Gambar Portfolio */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full rounded-lg overflow-hidden"
          >
            <Image
              src={portfolio.thumbnail}
              alt={portfolio.title}
              width={1000}
              height={500}
              priority
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Deskripsi dan Tech Stack */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:col-span-2"
            >
              <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200 mb-4">
                Deskripsi Proyek
              </h2>
              <p className="text-gray-600 dark:text-neutral-400 leading-relaxed">
                {portfolio.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {portfolio.tech_stack?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-neutral-900 text-gray-600 dark:text-neutral-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Tombol Aksi */}
              <div className="flex gap-4 mt-8">
                {portfolio.demo_url ? (
                  <Button asChild className="w-full">
                    <Link
                      href={portfolio.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                ) : null}

                {portfolio.github_url ? (
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href={portfolio.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Link>
                  </Button>
                ) : null}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/* <BackgroundBeams /> */}
    </div>
  );
}
