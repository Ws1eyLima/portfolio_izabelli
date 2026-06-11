import Image from "next/image";
import Link from "next/link";
import { Download, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Language, content } from "@/lib/translations";

interface HeroProps {
  language: Language;
  anchor: (id: string) => string;
}

export function Hero({ language, anchor }: HeroProps) {
  const copy = content[language];

  return (
    <section id="home" className="section-shell min-h-[560px] scroll-mt-24 py-20 lg:py-28 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
      <div className="max-w-3xl flex-1 text-center lg:text-left">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
          {copy.hero.eyebrow}
        </p>
        <h1 className="mt-5 font-serif text-5xl font-bold leading-[0.95] text-slate-950 sm:text-6xl lg:text-7xl">
          {copy.hero.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-700">
          {copy.hero.description}
        </p>
        <p className="mt-5 text-base font-semibold text-primary">
          {copy.hero.stack}
        </p>
        <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
          <Button asChild size="lg">
            <Link href={anchor("projetos")}>
              <Sparkles className="h-4 w-4" />
              {copy.hero.projectCta}
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="mailto:izabellic_soriano@hotmail.com">
              <Mail className="h-4 w-4" />
              {copy.hero.contactCta}
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-slate-300">
            <Link href="/assets/izabelli-soriano-cv.pdf" target="_blank">
              <Download className="h-4 w-4" />
              {copy.hero.resumeCta}
            </Link>
          </Button>
        </div>
      </div>
      <div className="relative shrink-0 mb-8 lg:mb-0">
        <div className="relative h-48 w-48 sm:h-64 sm:w-64 lg:h-[340px] lg:w-[340px] overflow-hidden rounded-full border-[6px] border-white shadow-xl bg-slate-100">
          <Image
            src="/assets/izabelli-hero.jpeg"
            alt="Izabelli Soriano"
            fill
            className="object-cover"
            priority
            sizes="(min-width: 1024px) 340px, (min-width: 640px) 256px, 192px"
          />
        </div>
      </div>
    </section>
  );
}
