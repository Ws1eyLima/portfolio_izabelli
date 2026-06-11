import Link from "next/link";
import { Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Language, content } from "@/lib/translations";

interface HeroProps {
  language: Language;
  anchor: (id: string) => string;
}

export function Hero({ language, anchor }: HeroProps) {
  const copy = content[language];

  return (
    <section id="home" className="section-shell min-h-[560px] scroll-mt-24 py-20 lg:py-28">
      <div className="max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
          {copy.hero.eyebrow}
        </p>
        <h1 className="mt-5 max-w-3xl font-serif text-5xl font-bold leading-[0.95] text-slate-950 sm:text-6xl lg:text-7xl">
          {copy.hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
          {copy.hero.description}
        </p>
        <p className="mt-5 text-base font-semibold text-primary">
          {copy.hero.stack}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
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
        </div>
      </div>
    </section>
  );
}
