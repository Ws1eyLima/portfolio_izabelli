"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type ProjectImage = {
  src: string;
  alt: string;
};

export function ProjectImageCarousel({ images }: { images: readonly ProjectImage[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const image = images[currentIndex];
  const hasMultipleImages = images.length > 1;

  function showPrevious() {
    setCurrentIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  }

  function showNext() {
    setCurrentIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  }

  return (
    <div className="self-start border-b bg-slate-100 p-3 lg:border-b-0 lg:border-r">
      <div className="relative grid place-items-start">
        <Image
          src={image.src}
          alt={image.alt}
          width={1476}
          height={1065}
          className="h-auto w-full rounded-md object-contain shadow-sm"
          sizes="(min-width: 1024px) 58vw, 100vw"
        />

        {hasMultipleImages ? (
          <>
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Imagem anterior"
              className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border bg-white/90 text-slate-800 shadow-sm transition-colors hover:bg-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Proxima imagem"
              className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border bg-white/90 text-slate-800 shadow-sm transition-colors hover:bg-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        ) : null}
      </div>

      {hasMultipleImages ? (
        <div className="mt-3 flex items-center justify-center gap-2">
          {images.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ver imagem ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                index === currentIndex ? "w-7 bg-primary" : "w-2.5 bg-slate-300"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
