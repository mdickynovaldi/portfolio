"use client";
import { motion } from "framer-motion";
import { TimelineDemo } from "./Timeline";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/lib/i18n/i18n-context";
export default function Experience() {
  const { t } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "0px 0px -200px 0px", // Mulai animasi sebelum elemen sepenuhnya terlihat
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Animasi bertahap untuk child elements
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section ref={ref}>
      <motion.div
        className="max-w-5xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-center mb-8"
        >
          {t("experience.title")}
        </motion.h2>
        <motion.div variants={itemVariants}>
          <TimelineDemo />
        </motion.div>
      </motion.div>
    </section>
  );
}
