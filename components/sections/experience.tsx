import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Language, content } from "@/lib/translations";
import { FadeIn } from "@/components/ui/fade-in";

interface ExperienceProps {
  language: Language;
}

export function Experience({ language }: ExperienceProps) {
  const copy = content[language];

  return (
    <section id="experiencia" className="section-shell scroll-mt-24 py-20">
      <FadeIn>
        <div className="mb-8 grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              {copy.experience.eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-slate-950">
              {copy.experience.title}
            </h2>
          </div>
          <p className="leading-7 text-slate-700">
            {copy.experience.description}
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-4">
          {copy.experience.items.map((experience) => (
            <Card key={`${experience.company}-${experience.role}`}>
              <CardHeader>
                <Briefcase className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg">{experience.company}</CardTitle>
                <p className="text-sm font-semibold text-slate-700">{experience.role}</p>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                  {experience.period}
                </p>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-slate-700">
                {experience.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
