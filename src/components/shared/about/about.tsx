"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/lib/i18n/i18n-context";
import { translations } from "@/lib/i18n/translations";
import { h1 } from "framer-motion/client";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t, activeLocale } = useI18n();

  return (
    <section className="py-10 px-4" ref={ref}>
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
              {t("about.title")}
            </h2>
          </div>
          <div className="bg-muted/50 rounded-lg p-4 md:p-6">
            {activeLocale === "id" ? (
              <h1>{t("about.description")}</h1>
            ) : (
              <TextGenerateEffect
                className="text-sm md:text-xl lg:text-2xl"
                words={translations.en.about.description}
                inView={isInView}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
