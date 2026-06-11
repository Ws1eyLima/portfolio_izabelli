import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Language, content } from "@/lib/translations";
import { ProjectImageCarousel } from "@/app/project-image-carousel";
import { FadeIn } from "@/components/ui/fade-in";

interface ProjectsProps {
  language: Language;
}

export function Projects({ language }: ProjectsProps) {
  const copy = content[language];
  const isEnglish = language === "en";

  const overviewLabel = isEnglish ? "Overview" : "Visão Geral";
  const specsLabel = isEnglish ? "Technical Details" : "Detalhes Técnicos";

  return (
    <section id="projetos" className="section-shell scroll-mt-24 py-20">
      <FadeIn>
        <div className="mb-8 grid gap-4 lg:grid-cols-[0.65fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              {copy.projects.eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-slate-950">
              {copy.projects.title}
            </h2>
          </div>
          <p className="leading-7 text-slate-700">{copy.projects.description}</p>
        </div>
      </FadeIn>

      <div className="grid gap-8">
        {copy.projects.items.map((project, index) => (
          <FadeIn key={project.title} delay={index * 0.1}>
            <Card className="overflow-hidden bg-white border-slate-200/60 shadow-soft hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                <ProjectImageCarousel images={project.images} />

                <div className="flex flex-col p-6 lg:p-8">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{project.status}</Badge>
                    {project.technologies.slice(0, 2).map((technology) => (
                      <Badge key={technology} variant="secondary" className="text-slate-600 bg-slate-100">
                        {technology}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold text-slate-950">
                    {project.title}
                  </h3>
                  
                  <Tabs defaultValue="overview" className="mt-6 flex-1 flex flex-col">
                    <TabsList className="grid w-full grid-cols-2 bg-slate-100/80">
                      <TabsTrigger value="overview">{overviewLabel}</TabsTrigger>
                      <TabsTrigger value="specs">{specsLabel}</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="overview" className="flex-1 mt-4 animate-in fade-in-50 duration-500">
                      <p className="leading-7 text-slate-700 text-sm md:text-base">{project.description}</p>
                    </TabsContent>

                    <TabsContent value="specs" className="flex-1 mt-4 animate-in fade-in-50 duration-500 space-y-6">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-primary mb-3">
                          {project.functionalityTitle}
                        </h4>
                        <div className="grid gap-2.5">
                          {project.functionalities.map((item) => (
                            <div key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary/70" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-primary mb-3">
                          {project.techTitle}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((technology) => (
                            <Badge key={technology} variant="outline" className="border-slate-200 font-normal">
                              {technology}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
