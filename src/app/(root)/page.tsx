"use client";

import { BackgroundLines } from "@/components/ui/background-lines";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FlipWords } from "@/components/ui/flip-words";
import { useEffect, useRef, useState } from "react";
import { Calendar } from "lucide-react";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { TimelineDemo } from "@/components/shared/experience/Timeline";
import { educationData } from "@/data/education-data";
import { ThreeDCardDemo } from "@/components/shared/tech-stack/card";
import { Button } from "@/components/ui/button";
import { techStackData } from "@/data/techstack-data";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { portfolioData } from "@/data/portfolio-data";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";
import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight-new";
import Image from "next/image";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [isTechExpanded, setIsTechExpanded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-white dark:bg-black">
      {/* Title Section */}
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 min-h-[calc(100dvh-4rem)]">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-5xl lg:text-7xl font-sans py-4 md:py-10 relative z-20 font-bold tracking-tight">
            Moch Dicky Novaldi.
          </h1>
          <div className="text-xl md:text-3xl lg:text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 text-center">
            As a
            <FlipWords
              words={[
                "Full Stack Developer",
                "Mobile Developer",
                "Unity Developer",
              ]}
              className="ml-2"
            />
          </div>
        </div>
      </BackgroundLines>

      {/* About Me Section */}
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-4 md:mb-6">
              {/* Profile Photo */}
              <div className="group relative w-32 h-32 md:w-80 md:h-80 rounded-full border-4 border-primary/50 shadow-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <Image
                  src="https://ucarecdn.com/b43d078a-35a1-4cbb-9992-95b6719c9384/-/preview/500x500/"
                  alt="Dicky Novaldi"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-fill group-hover:scale-110 transition-transform duration-300"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-6xl font-bold text-center md:text-left bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                About Me
              </h2>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 md:p-6" ref={ref}>
              <TextGenerateEffect
                className="text-sm md:text-xl lg:text-2xl"
                words="Hi! I'm Moch Dicky Novaldi, usually called Aldi 🚀 - a Fullstack Developer from Malang, Indonesia 🌴. With 3+ years of experience in software development, I specialize in building end-to-end web & mobile applications. Proficient in MERN Stack (MongoDB, Express, React, Node.js), React Native for mobile development, and Unity for game development. Always passionate about creating impactful and scalable technology solutions!"
                start={isVisible}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="pt-20 md:pt-60 relative antialiased">
        <div className="min-h-screen p-4 transition-colors duration-200 relative z-10">
          <div className="max-w-full md:max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-6">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-8">
              Education History
            </h2>
            <div className="space-y-8">
              {educationData.map((entry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-primary before:to-blue-600"
                >
                  <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary" />
                  <div className="bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-700/50 dark:to-gray-700/30 p-6 rounded-lg shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
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
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
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
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <BackgroundBeams className="absolute inset-0 z-0" />
      </section>

      {/* Experience Section */}
      <section>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
          <TimelineDemo />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 md:py-44">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
          Skills
        </h2>
        <div className="container mx-auto px-2 md:px-4 py-6 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
            {techStackData
              .slice(0, isTechExpanded ? techStackData.length : 6)
              .map((tech, index) => (
                <ThreeDCardDemo
                  key={tech.title}
                  title={tech.title}
                  description={tech.description}
                  image={tech.image}
                  progress={tech.progress}
                />
              ))}
          </div>
          {!isTechExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mt-12"
            >
              <Button
                onClick={() => setIsTechExpanded(true)}
                className="px-8 py-3 rounded-full flex items-center gap-2"
              >
                <span>Show All Skills</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-10 md:py-44">
        <div className="w-full px-2 md:px-4 py-4 md:py-12">
          <div className="overflow-x-hidden">
            <HeroParallax products={portfolioData} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <div className="h-[20rem] md:h-[40rem] w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight />
          <div className="p-4 max-w-7xl mx-auto relative z-10 w-full flex items-center justify-center">
            <div className=" md:hidden flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold text-center mb-4">
                If you want to know more about me
              </h1>
              <Link href="https://wa.me/6285156262400" target="_blank">
                <Button className="px-8 py-3 rounded-full flex items-center gap-2">
                  <IconBrandWhatsapp className="h-5 w-5" />
                  <span>Contact Me</span>
                </Button>
              </Link>
            </div>
            <div className="hidden md:block">
              <Link href="https://wa.me/6285156262400" target="_blank">
                <TextRevealCard
                  text="Hover over the card "
                  revealText="Click to Contact me "
                  className="w-full md:w-auto"
                >
                  <TextRevealCardTitle className="text-lg md:text-xl">
                    If you want to know more about me
                  </TextRevealCardTitle>
                  <TextRevealCardDescription className="text-sm md:text-base">
                    you can contact me
                  </TextRevealCardDescription>
                </TextRevealCard>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
