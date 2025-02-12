import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipWords } from "@/components/ui/flip-words";

export default function Title() {
  return (
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
  );
}
