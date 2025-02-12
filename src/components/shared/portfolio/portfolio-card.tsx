import { motion } from "framer-motion";
import Image from "next/image";
import { PortfolioItem } from "@/types";

export default function PortfolioCard(item: PortfolioItem) {
  const tags = item.tech_stack || [];

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={item.thumbnail || "/placeholder.svg"}
        alt={item.title}
        width={400}
        height={250}
        className="w-full h-36 md:h-48 object-cover"
      />
      <div className="p-3 md:p-4">
        <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-gray-900 dark:text-white">
          {item.title}
        </h3>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-2 md:mb-4">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={`${item.id}-tag-${index}`}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
