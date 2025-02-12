"use client";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight-new";
import {
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="py-10 md:py-44">
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
  );
}
