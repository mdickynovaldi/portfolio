"use client";

import { GraduationCap } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

import { educationData } from "@/data/education-data";
import { Calendar, MapPin } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px",
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="pt-20 md:pt-60 relative antialiased" ref={ref}>
      <div className="min-h-screen p-4 transition-colors duration-200 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 1 }}
          className="max-w-full md:max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-6"
        >
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-8"
          >
            Education History
          </motion.h2>
          <div className="space-y-8">
            {educationData.map((entry, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ scale: 1.02 }}
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-primary before:to-blue-600"
              >
                <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary" />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-700/50 dark:to-gray-700/30 p-6 rounded-lg shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-primary dark:text-primary/80">
                        {entry.institution}
                      </h3>
                      <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mt-1">
                        {entry.degree}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 text-primary/80 mr-2" />
                        <span className="text-gray-600 dark:text-gray-300">
                          {entry.year}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-600 gap-4">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-primary/80 mr-2" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {entry.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-6 h-6 text-primary/80" />
                      <span className="text-gray-600 dark:text-gray-300 font-medium">
                        GPA: {entry.gpa}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
