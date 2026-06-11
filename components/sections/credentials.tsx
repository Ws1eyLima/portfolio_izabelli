import { Globe2, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Language, content } from "@/lib/translations";
import { FadeIn } from "@/components/ui/fade-in";

interface CredentialsProps {
  language: Language;
}

export function Credentials({ language }: CredentialsProps) {
  const copy = content[language];

  return (
    <section id="credenciais" className="scroll-mt-24 border-y bg-white py-20">
      <div className="section-shell">
        <FadeIn>
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              {copy.credentials.eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-slate-950">
              {copy.credentials.title}
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <Card className="border-primary/20 bg-accent">
              <CardContent className="grid gap-5 p-6 sm:grid-cols-[auto_1fr]">
                <div className="grid h-14 w-14 place-items-center rounded-md bg-primary text-white">
                  <GraduationCap className="h-7 w-7" />
                </div>
                <div>
                  <Badge className="mb-3">{copy.credentials.educationBadge}</Badge>
                  <h3 className="font-serif text-2xl font-bold text-slate-950">
                    {copy.credentials.educationTitle}
                  </h3>
                  <p className="mt-2 text-base font-semibold text-slate-700">
                    {copy.credentials.institution}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {copy.credentials.educationText}
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="mb-5 flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-md bg-primary text-white">
                    <Globe2 className="h-7 w-7" />
                  </div>
                  <div>
                    <Badge variant="secondary">{copy.credentials.languageBadge}</Badge>
                    <h3 className="mt-2 font-serif text-2xl font-bold text-slate-950">
                      {copy.credentials.languageTitle}
                    </h3>
                  </div>
                </div>
                <div className="space-y-3">
                  {copy.credentials.languages.map(([language, level]) => (
                    <div
                      key={language}
                      className="flex items-center justify-between gap-4 rounded-md border bg-white px-4 py-3"
                    >
                      <span className="font-semibold text-slate-950">{language}</span>
                      <span className="text-sm font-medium text-slate-600">{level}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
