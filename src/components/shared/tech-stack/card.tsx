"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { motion, useInView } from "framer-motion";

export function ThreeDCardDemo(props: {
  title: string;
  description: string;
  image: string;
  progress?: number;
}) {
  const progressRef = React.useRef(null);
  const isInView = useInView(progressRef, {
    once: true, // Ubah menjadi true agar animasi hanya dijalankan sekali
    margin: "0px 0px -100px 0px",
  });

  return (
    <CardContainer className="inter-var w-full max-w-[300px] md:w-[350px]">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-[350px] md:h-[400px] rounded-xl p-6 border flex flex-col">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white h-8 truncate"
        >
          {props.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {props.description}
        </CardItem>

        <CardItem
          translateZ="100"
          className="w-full mt-2 md:mt-4 flex-1 min-h-[120px] md:min-h-[150px]"
        >
          <Image
            src={props.image}
            height="1000"
            width="1000"
            className="h-full w-full object-scale-down rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        {/* Progress Bar */}
        <div className="flex-none" ref={progressRef}>
          <CardItem translateZ="70" className="w-full mt-4">
            <div className="flex justify-between text-xs text-neutral-600 dark:text-neutral-400 mb-1">
              <span>Skill Level</span>
              <span>{Math.min(Math.max(props.progress || 0, 0), 100)}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: isInView ? `${props.progress}%` : "0%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-2 bg-emerald-500 rounded-full"
              />
            </div>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
