import { Card, CardContent } from "@/components/ui/card";
import { Language, content, iconMap } from "@/lib/translations";
import { FadeIn } from "@/components/ui/fade-in";

interface SkillsProps {
  language: Language;
}

export function Skills({ language }: SkillsProps) {
  const copy = content[language];

  return (
    <section id="skills" className="scroll-mt-24 border-y bg-white py-20">
      <div className="section-shell">
        <FadeIn>
          <div className="mb-8 grid gap-4 lg:grid-cols-[0.6fr_1fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                {copy.skills.eyebrow}
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-slate-950">
                {copy.skills.title}
              </h2>
            </div>
            <p className="leading-7 text-slate-700">
              {copy.skills.description}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {copy.skills.items.map(([label, icon]) => {
              const Icon = iconMap[icon];

              return (
                <Card key={label} className="bg-white border-slate-200/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <CardContent className="flex items-center gap-3 p-4">
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-slate-700">{label}</span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
