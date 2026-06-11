import { Metadata } from "next";
import { Language } from "@/lib/translations";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Credentials } from "@/components/sections/credentials";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Footer } from "@/components/sections/footer";

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const isEnglish = params?.lang === "en";

  const title = isEnglish
    ? "Izabelli | BI & Finance Analyst"
    : "Izabelli | Analista de BI e Financeiro";
  
  const description = isEnglish
    ? "Portfolio of Izabelli, a BI and finance analyst focused on dashboards, indicators, and data-driven decision making."
    : "Portfólio de Izabelli, analista de BI e financeiro focada em dashboards, indicadores e análises para tomada de decisão.";

  const baseUrl = "https://www.izabellianalytics.com";

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    openGraph: {
      type: "website",
      url: baseUrl,
      title,
      description,
      siteName: "Izabelli Analytics",
      images: [
        {
          url: "/assets/izabelli.jpeg",
          width: 800,
          height: 800,
          alt: "Izabelli - BI & Finance Analyst",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/izabelli.jpeg"],
    },
  };
}

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  const language: Language = params?.lang === "en" ? "en" : "pt";
  const isEnglish = language === "en";
  const anchor = (id: string) => (isEnglish ? `/?lang=en#${id}` : `#${id}`);

  return (
    <main className="min-h-screen bg-slate-50">
      <Header language={language} isEnglish={isEnglish} />
      <Hero language={language} anchor={anchor} />
      <Credentials language={language} />
      <Projects language={language} />
      <Skills language={language} />
      <Footer language={language} />
    </main>
  );
}
