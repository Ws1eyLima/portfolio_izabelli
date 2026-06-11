import { BarChart3, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Language, content } from "@/lib/translations";
import { FadeIn } from "@/components/ui/fade-in";

interface AboutProps {
  language: Language;
}

export function About({ language }: AboutProps) {
  const copy = content[language];

  return (
    <section id="sobre" className="scroll-mt-24 border-y bg-white py-20">
      <div className="section-shell">
        <FadeIn>
          <div className="mb-4 flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-primary text-white">
              <BarChart3 className="h-5 w-5" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-slate-950">{copy.about.title}</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <p className="max-w-2xl text-lg leading-8 text-slate-700">
                {copy.about.paragraphs[0]}
              </p>
              <p className="mt-4 max-w-2xl leading-7 text-slate-700">
                {copy.about.paragraphs[1]}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {copy.about.highlights.map((highlight) => (
                <Card key={highlight} className="border-primary/15">
                  <CardContent className="p-5">
                    <CheckCircle2 className="mb-4 h-6 w-6 text-primary" />
                    <p className="text-sm font-semibold leading-6 text-slate-700">{highlight}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
