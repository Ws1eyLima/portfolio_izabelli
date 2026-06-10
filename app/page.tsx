import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  Briefcase,
  CheckCircle2,
  Database,
  Download,
  FileBarChart2,
  Github,
  Globe2,
  GraduationCap,
  LineChart,
  Linkedin,
  Mail,
  PieChart,
  Code2,
  Sigma,
  Sparkles,
  WalletCards,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const iconMap = {
  BarChart3,
  Code2,
  Database,
  FileBarChart2,
  LineChart,
  PieChart,
  Sigma,
  WalletCards,
};

const content = {
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      credentials: "Credenciais",
      projects: "Projetos",
      skills: "Competências",
      contact: "Contato",
      language: "Selecionar idioma",
    },
    hero: {
      eyebrow: "Dados, BI e decisão estratégica",
      title: "Data & Business Intelligence Analyst",
      description:
        "Transformo dados financeiros e operacionais em análises claras para apoiar decisões estratégicas, conectar áreas do negócio e dar mais confiança aos indicadores.",
      stack: "Python • Power BI • SQL • DAX • Análise Financeira",
      projectCta: "Ver projetos",
      contactCta: "Entrar em contato",
    },
    dashboardPreview: {
      title: "Financial Intelligence Dashboard",
      period: "mai/2024 - abr/2025",
      chartTitle: "Receita líquida por mês",
      categoryTitle: "Receita por categoria",
      categories: ["Serviços 45%", "Produtos 35%", "Soluções 20%"],
      metrics: [
        ["Receita líquida", "R$ 24,8 Mi", "+18,6% vs ano anterior"],
        ["Lucro bruto", "R$ 8,2 Mi", "+15,2% vs ano anterior"],
        ["Margem bruta", "33,1%", "-2,3 p.p. vs ano anterior"],
        ["EBITDA", "R$ 5,6 Mi", "+13,7% vs ano anterior"],
      ],
    },
    about: {
      title: "Sobre",
      paragraphs: [
        "Analista de Dados Financeiros Pleno, com atuação focada em transformar dados financeiros e operacionais em indicadores claros para apoiar decisões estratégicas.",
        "Atua no Grupo JR8 com análises financeiras, controles de recebíveis, inadimplência, relatórios gerenciais e melhoria de processos. Sua trajetória combina BI, gestão de contas, trade marketing, PCP e administração, conectando análise técnica às necessidades reais do negócio.",
      ],
      highlights: [
        "Analista de Dados Financeiros Pleno no Grupo JR8",
        "Experiência em BI, gestão de contas, trade marketing, PCP e rotinas administrativas",
        "Atuação com conciliação bancária, relatórios gerenciais, inadimplência e indicadores",
      ],
    },
    experience: {
      eyebrow: "Trajetória",
      title: "Experiência profissional",
      description:
        "Perfil construído entre financeiro, BI, gestão de contas e operações, com foco em transformar dados dispersos em visão executiva, processos mais confiáveis e indicadores acionáveis.",
      items: [
        {
          company: "Grupo JR8",
          role: "Finance Data Analyst Pleno",
          period: "nov/2025 - atual",
          description:
            "Análises financeiras, conciliações bancárias, indicadores de recebíveis, inadimplência, relatórios gerenciais e melhoria de processos no ERP.",
        },
        {
          company: "ProPonto",
          role: "Business Intelligence e Gestão de Contas",
          period: "out/2023 - nov/2025",
          description:
            "Dashboards e relatórios em Power BI, análises com bases de dados, automações em Excel, validador de dados e insights para campanhas de trade marketing.",
        },
        {
          company: "Pavan Zanetti",
          role: "PCP e Administração",
          period: "fev/2021 - out/2023",
          description:
            "Planejamento e controle de produção, acompanhamento de compras, priorização de demandas, logística e controles administrativos em Excel.",
        },
        {
          company: "Almeida & Scaglia Engenharia",
          role: "Assistente administrativo",
          period: "fev/2020 - mai/2020",
          description:
            "Atendimento, rotinas de recepção, atualização cadastral e apoio administrativo com pacote Office.",
        },
      ],
    },
    credentials: {
      eyebrow: "Credenciais",
      title: "Formação e idiomas",
      educationBadge: "Formação acadêmica",
      educationTitle: "Gestão Empresarial",
      institution: "Fatec Americana Ministro Ralph Biasi",
      educationText:
        "Graduação com base em gestão, processos, análise de negócios e tomada de decisão, complementando a atuação técnica em dados, BI e finanças.",
      languageBadge: "Idiomas",
      languageTitle: "Comunicação global",
      languages: [
        ["Inglês", "Profissional"],
        ["Espanhol", "Básico"],
        ["Chinês", "Básico"],
      ],
    },
    project: {
      eyebrow: "Projetos",
      title: "Dashboards em organização",
      description:
        "Esta área será dedicada aos dashboards desenvolvidos, com contexto do problema, indicadores, processo de construção e principais resultados.",
      statusBadge: "Em breve",
      note: "Os projetos serão incorporados com imagens, descrições e, quando possível, links de visualização.",
      viewDashboard: "Ver dashboard",
      documentation: "Ver documentação",
      cards: [
        ["Dashboard financeiro", "Receita, margem, DRE, fluxo de caixa e visão executiva."],
        ["Inadimplência", "Recebíveis, aging, cobrança e acompanhamento de riscos."],
        ["Gestão e operações", "Indicadores de desempenho, processos e análises gerenciais."],
      ],
    },
    skills: {
      eyebrow: "Competências",
      title: "Competências técnicas e de negócio",
      description:
        "Ferramentas e competências aplicadas na construção de análises, indicadores, automações e dashboards para gestão financeira e tomada de decisão.",
      items: [
        ["Python", "Code2"],
        ["Power BI", "BarChart3"],
        ["SQL", "Database"],
        ["DAX", "Sigma"],
        ["Power Query", "FileBarChart2"],
        ["Análise financeira", "LineChart"],
        ["Indicadores de desempenho", "PieChart"],
        ["Relatórios gerenciais", "FileBarChart2"],
        ["Gestão empresarial", "WalletCards"],
      ],
    },
    footer: {
      title: "Contato",
      description: "Vamos conversar sobre dados e resultados?",
      email: "E-mail",
      profile: "Baixar perfil",
      photoAlt: "Foto de Izabelli Soriano",
    },
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      credentials: "Credentials",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      language: "Select language",
    },
    hero: {
      eyebrow: "Data, BI and strategic decision-making",
      title: "Data & Business Intelligence Analyst",
      description:
        "I transform financial and operational data into clear insights that support strategic decisions, connect business areas and bring more confidence to performance indicators.",
      stack: "Python • Power BI • SQL • DAX • Financial Analysis",
      projectCta: "View projects",
      contactCta: "Get in touch",
    },
    dashboardPreview: {
      title: "Financial Intelligence Dashboard",
      period: "May/2024 - Apr/2025",
      chartTitle: "Net revenue by month",
      categoryTitle: "Revenue by category",
      categories: ["Services 45%", "Products 35%", "Solutions 20%"],
      metrics: [
        ["Net revenue", "R$ 24.8M", "+18.6% vs previous year"],
        ["Gross profit", "R$ 8.2M", "+15.2% vs previous year"],
        ["Gross margin", "33.1%", "-2.3 p.p. vs previous year"],
        ["EBITDA", "R$ 5.6M", "+13.7% vs previous year"],
      ],
    },
    about: {
      title: "About",
      paragraphs: [
        "Mid-Level Financial Data Analyst focused on transforming financial and operational data into clear indicators that support strategic decisions.",
        "At JR8 Group, she works with financial analysis, accounts receivable controls, delinquency indicators, management reports and process improvement. Her background combines BI, account management, trade marketing, production planning and administration, connecting technical analysis with real business needs.",
      ],
      highlights: [
        "Mid-Level Financial Data Analyst at JR8 Group",
        "Experience in BI, account management, trade marketing, PCP and administrative routines",
        "Work with bank reconciliation, management reports, delinquency and performance indicators",
      ],
    },
    experience: {
      eyebrow: "Career path",
      title: "Professional experience",
      description:
        "A profile built across finance, BI, account management and operations, focused on turning scattered data into executive visibility, more reliable processes and actionable indicators.",
      items: [
        {
          company: "Grupo JR8",
          role: "Mid-Level Finance Data Analyst",
          period: "Nov/2025 - present",
          description:
            "Financial analysis, bank reconciliations, accounts receivable indicators, delinquency monitoring, management reports and ERP process improvement.",
        },
        {
          company: "ProPonto",
          role: "Business Intelligence and Account Management",
          period: "Oct/2023 - Nov/2025",
          description:
            "Power BI dashboards and reports, database-driven analysis, Excel automation, data validator development and insights for trade marketing campaigns.",
        },
        {
          company: "Pavan Zanetti",
          role: "Production Planning and Administration",
          period: "Feb/2021 - Oct/2023",
          description:
            "Production planning and control, purchase follow-up, demand prioritization, logistics and administrative controls in Excel.",
        },
        {
          company: "Almeida & Scaglia Engenharia",
          role: "Administrative Assistant",
          period: "Feb/2020 - May/2020",
          description:
            "Customer service, reception routines, registration updates and administrative support using Microsoft Office.",
        },
      ],
    },
    credentials: {
      eyebrow: "Credentials",
      title: "Education and languages",
      educationBadge: "Education",
      educationTitle: "Business Management",
      institution: "Fatec Americana Ministro Ralph Biasi",
      educationText:
        "Degree focused on management, processes, business analysis and decision-making, complementing her technical work in data, BI and finance.",
      languageBadge: "Languages",
      languageTitle: "Global communication",
      languages: [
        ["English", "Professional Working"],
        ["Spanish", "Basic"],
        ["Chinese", "Basic"],
      ],
    },
    project: {
      eyebrow: "Projects",
      title: "Dashboards in progress",
      description:
        "This area will be dedicated to dashboards, including business context, indicators, build process and main results.",
      statusBadge: "Coming soon",
      note: "Projects will be added with images, descriptions and, whenever possible, visualization links.",
      viewDashboard: "View dashboard",
      documentation: "View documentation",
      cards: [
        ["Financial dashboard", "Revenue, margin, managerial income statement, cash flow and executive view."],
        ["Delinquency", "Receivables, aging, collection and risk monitoring."],
        ["Management and operations", "Performance indicators, processes and management analysis."],
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Technical and business skills",
      description:
        "Tools and skills applied to build analyses, indicators, automations and dashboards for financial management and decision-making.",
      items: [
        ["Python", "Code2"],
        ["Power BI", "BarChart3"],
        ["SQL", "Database"],
        ["DAX", "Sigma"],
        ["Power Query", "FileBarChart2"],
        ["Financial analysis", "LineChart"],
        ["Performance indicators", "PieChart"],
        ["Management reports", "FileBarChart2"],
        ["Business management", "WalletCards"],
      ],
    },
    footer: {
      title: "Contact",
      description: "Shall we talk about data and results?",
      email: "Email",
      profile: "Download profile",
      photoAlt: "Photo of Izabelli Soriano",
    },
  },
} as const;

type Language = keyof typeof content;

function MetricCard({
  title,
  value,
  detail,
}: {
  title: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-md border bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold text-slate-500">{title}</p>
      <strong className="mt-2 block text-2xl font-bold text-slate-950">{value}</strong>
      <span className="mt-1 block text-xs font-medium text-emerald-600">{detail}</span>
    </div>
  );
}

function MiniChart({ title }: { title: string }) {
  const bars = [34, 48, 42, 58, 68, 61, 72, 84, 78, 92];

  return (
    <div className="rounded-md border bg-white p-4">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold">{title}</p>
        <Badge variant="secondary">+18,6%</Badge>
      </div>
      <div className="flex h-32 items-end gap-2">
        {bars.map((height, index) => (
          <div key={index} className="flex flex-1 items-end">
            <div
              className="w-full rounded-t bg-primary"
              style={{ height: `${height}%`, opacity: 0.42 + index * 0.05 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardPreview({ copy }: { copy: (typeof content)[Language]["dashboardPreview"] }) {
  return (
    <Card className="border-slate-200 bg-white/95 shadow-dashboard">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg">{copy.title}</CardTitle>
        <div className="rounded-md border px-3 py-1 text-xs text-slate-500">{copy.period}</div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {copy.metrics.map(([title, value, detail]) => (
            <MetricCard key={title} title={title} value={value} detail={detail} />
          ))}
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.35fr_0.9fr]">
          <MiniChart title={copy.chartTitle} />
          <div className="rounded-md border bg-white p-4">
            <p className="mb-4 text-sm font-semibold">{copy.categoryTitle}</p>
            <div className="grid grid-cols-[110px_1fr] items-center gap-5">
              <div className="h-24 w-24 rounded-full bg-[conic-gradient(#0b4aa2_0_45%,#2563eb_45%_80%,#93c5fd_80%_100%)] p-5">
                <div className="h-full w-full rounded-full bg-white" />
              </div>
              <div className="space-y-3 text-xs">
                {copy.categories.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  const language: Language = params?.lang === "en" ? "en" : "pt";
  const copy = content[language];
  const isEnglish = language === "en";
  const anchor = (id: string) => (isEnglish ? `/?lang=en#${id}` : `#${id}`);

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <nav className="section-shell flex h-16 items-center justify-between gap-6">
          <Link href={anchor("home")} className="font-serif text-2xl font-bold text-slate-950">
            Izabelli
          </Link>
          <div className="hidden items-center gap-7 text-sm font-semibold text-slate-700 md:flex">
            <Link href={anchor("sobre")}>{copy.nav.about}</Link>
            <Link href={anchor("experiencia")}>{copy.nav.experience}</Link>
            <Link href={anchor("credenciais")}>{copy.nav.credentials}</Link>
            <Link href={anchor("projeto")}>{copy.nav.projects}</Link>
            <Link href={anchor("skills")}>{copy.nav.skills}</Link>
            <Link href={anchor("contato")}>{copy.nav.contact}</Link>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 items-center rounded-md border bg-white p-1 text-xs font-bold text-slate-600"
              aria-label={copy.nav.language}
            >
              <Link
                href="/"
                className={`rounded px-2.5 py-1.5 transition-colors ${
                  !isEnglish ? "text-primary shadow-sm" : "hover:bg-accent"
                }`}
                aria-current={!isEnglish ? "true" : undefined}
              >
                PT
              </Link>
              <Link
                href="/?lang=en"
                className={`rounded px-2.5 py-1.5 transition-colors ${
                  isEnglish ? "text-primary shadow-sm" : "hover:bg-accent"
                }`}
                aria-current={isEnglish ? "true" : undefined}
              >
                EN
              </Link>
            </div>
            <Button asChild>
              <Link href={anchor("contato")}>
                <Mail className="h-4 w-4" />
                {copy.nav.contact}
              </Link>
            </Button>
          </div>
        </nav>
      </header>

      <section id="home" className="section-shell grid min-h-[650px] scroll-mt-24 items-center gap-10 py-16 lg:grid-cols-[0.82fr_1fr] lg:py-24">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            {copy.hero.eyebrow}
          </p>
          <h1 className="mt-5 max-w-2xl font-serif text-5xl font-bold leading-[0.95] text-slate-950 sm:text-6xl lg:text-7xl">
            {copy.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
            {copy.hero.description}
          </p>
          <p className="mt-5 text-base font-semibold text-primary">
            {copy.hero.stack}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href={anchor("projeto")}>
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
        <DashboardPreview copy={copy.dashboardPreview} />
      </section>

      <section id="sobre" className="scroll-mt-24 border-y bg-white py-20">
        <div className="section-shell">
          <div>
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
          </div>
        </div>
      </section>

      <section id="experiencia" className="section-shell scroll-mt-24 py-20">
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
      </section>

      <section id="credenciais" className="scroll-mt-24 border-y bg-white py-20">
        <div className="section-shell">
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
        </div>
      </section>

      <section id="projeto" className="section-shell scroll-mt-24 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              {copy.project.eyebrow}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <h2 className="font-serif text-4xl font-bold text-slate-950">
                {copy.project.title}
              </h2>
              <Badge variant="secondary">{copy.project.statusBadge}</Badge>
            </div>
            <p className="mt-4 max-w-xl leading-7 text-slate-700">
              {copy.project.description}
            </p>
            <p className="mt-4 max-w-xl text-sm font-medium leading-6 text-slate-600">
              {copy.project.note}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {copy.project.cards.map(([title, text]) => (
              <Card key={title} className="bg-white">
                <CardHeader>
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-slate-700">{text}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-24 border-y bg-white py-20">
        <div className="section-shell">
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
                <Card key={label} className="bg-white">
                  <CardContent className="flex items-center gap-3 p-4">
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-semibold">{label}</span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <footer id="contato" className="bg-primary py-10 text-white">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex items-center gap-5">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white/30 bg-white/10">
                <Image
                  src="/assets/izabelli.jpeg"
                  alt={copy.footer.photoAlt}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold">{copy.footer.title}</h2>
                <p className="mt-1 text-sm text-white/80">{copy.footer.description}</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                className="flex items-center gap-3"
                href="https://www.linkedin.com/in/izabellisoriano/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="text-sm font-semibold">LinkedIn</span>
              </Link>
              <Link
                className="flex items-center gap-3"
                href="https://github.com/bellis0ri4ano"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="text-sm font-semibold">GitHub</span>
              </Link>
              <Link className="flex items-center gap-3" href="mailto:izabellic_soriano@hotmail.com">
                <Mail className="h-5 w-5" />
                <span className="text-sm font-semibold">{copy.footer.email}</span>
              </Link>
              <Button asChild variant="secondary">
                <Link href="/assets/izabelli-profile.pdf" target="_blank">
                  <Download className="h-4 w-4" />
                  {copy.footer.profile}
                </Link>
              </Button>
            </div>
          </div>
          <Separator className="my-8 bg-white/20" />
          <p className="text-center text-sm text-white/80">© 2026 Izabelli</p>
        </div>
      </footer>
    </main>
  );
}
