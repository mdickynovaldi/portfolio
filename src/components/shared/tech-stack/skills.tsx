"use client";
import { techStackData } from "@/data/techstack-data";
import { ThreeDCardDemo } from "./card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "0px 0px -200px 0px",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section ref={ref} className="py-20 md:py-44">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8"
        >
          Skills
        </motion.h2>
        <motion.div
          className="container mx-auto px-2 md:px-4 py-6 md:py-12"
          variants={itemVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
            {techStackData.map((tech) => (
              <motion.div key={tech.title} variants={itemVariants}>
                <ThreeDCardDemo
                  title={tech.title}
                  description={tech.description}
                  image={tech.image}
                  progress={tech.progress}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
