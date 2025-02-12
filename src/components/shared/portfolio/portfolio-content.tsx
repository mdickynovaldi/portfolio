"use client";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useState } from "react";
import PortfolioCard from "./portfolio-card";
import { PortfolioItem } from "@/types";

export function PortfolioContent({
  initialItems,
}: {
  initialItems: PortfolioItem[];
}) {
  const [filter, setFilter] = useState("All");

  // Memfilter item portfolio berdasarkan tag yang dipilih
  // Jika filter "All" maka tampilkan semua item
  // Jika tidak, tampilkan hanya item yang memiliki tech_stack sesuai filter
  const filteredItems =
    filter === "All"
      ? initialItems
      : initialItems.filter((item: PortfolioItem) =>
          item.tech_stack?.includes(filter)
        );

  // Membuat array unik dari semua tech stack yang ada
  // Dimulai dengan "All" sebagai default filter
  // Menggunakan Set untuk menghilangkan duplikat tech stack
  const tags = [
    "All",
    ...new Set(
      initialItems.flatMap((item: PortfolioItem) => item.tech_stack || [])
    ),
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          My Portfolio
        </h1>

        {/* Tombol filter dengan scroll horizontal di mobile */}
        <div className="flex overflow-x-auto pb-4 px-4 md:px-0">
          <div className="flex gap-2 w-max mx-auto">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base rounded-full ${
                  filter === tag
                    ? "bg-blue-500 dark:bg-blue-600 text-white"
                    : "bg-white dark:bg-gray-800 text-blue-500 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-700"
                } transition-colors duration-300 whitespace-nowrap`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item: PortfolioItem) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <PortfolioCard
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  thumbnail={item.thumbnail}
                  tech_stack={item.tech_stack}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default PortfolioContent;
