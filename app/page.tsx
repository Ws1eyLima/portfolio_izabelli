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
import { ProjectImageCarousel } from "./project-image-carousel";

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
        "Transformo dados financeiros, operacionais e comerciais em dashboards, automações e análises que ajudam áreas de negócio a decidir com mais clareza.",
      stack: "Power BI • Python • SQL • DAX • Power Query • Análise Financeira",
      projectCta: "Ver projetos",
      contactCta: "Entrar em contato",
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
    projects: {
      eyebrow: "Projetos",
      title: "Projetos em destaque",
      description:
        "Dashboards e soluções analíticas apresentados a partir dos prints reais dos projetos desenvolvidos.",
      items: [
        {
          title: "Painel de Custos com Pessoal",
          status: "Concluído",
          images: [
            {
              src: "/assets/projects/painel-custos-pessoal.jpeg",
              alt: "Dashboard Painel de Custos com Pessoal com KPIs, tabela por setor e gráfico de distribuição de custo.",
            },
          ],
          description:
            "Dashboard desenvolvido no Power BI para monitoramento dos custos com pessoal de uma empresa com 40 colaboradores. O painel consolida dados de folha de pagamento, encargos e prêmios por setor, permitindo análises por período e por funcionário. Conta com componentes HTML customizados para uma experiência visual diferenciada.",
          functionalityTitle: "Principais funcionalidades",
          functionalities: [
            "KPIs de custo total, total de funcionários, média por funcionário e custo prêmio",
            "Tabela detalhada de folha, encargos e prêmios por setor",
            "Gráfico de pizza com distribuição percentual de custo por setor",
            "Filtros dinâmicos por mês, ano e nome do funcionário",
            "Componentes HTML customizados integrados ao Power BI",
          ],
          metricsTitle: "Métricas do projeto",
          metrics: [
            ["40", "Funcionários"],
            ["R$ 207k", "Custo total monitorado"],
            ["6", "Setores analisados"],
            ["3", "Filtros interativos"],
          ],
          techTitle: "Tecnologias",
          technologies: [
            "Power BI",
            "DAX",
            "HTML customizado",
            "CSS",
            "Visualização de dados",
            "RH / People Analytics",
          ],
        },
        {
          title: "Validador de Dados Automatizado",
          status: "Concluído",
          images: [
            {
              src: "/assets/projects/validador-dados-com-erros.jpeg",
              alt: "Painel Validador de Dados com 23 erros, 6 tipos de erro e tabela de inconsistências.",
            },
            {
              src: "/assets/projects/validador-dados-sem-erros.jpeg",
              alt: "Painel Validador de Dados sem erros, com semáforo verde e totais zerados.",
            },
          ],
          description:
            "Solução de validação automática de dados desenvolvida em Power Query (M) e integrada diretamente ao banco de dados de uma empresa. O sistema recebe os dados da fonte, aplica um conjunto de regras configuráveis e retorna um relatório detalhado de inconsistências, indicando o tipo de erro, a célula exata e o contexto do problema. Quando não há erros, o painel exibe um semáforo verde com total de ocorrências zerado.",
          functionalityTitle: "Tipos de validação suportados",
          functionalities: [
            "Verificação de colunas obrigatórias, faltando ou extras",
            "Detecção de células vazias e erros de célula",
            "Validação de lista de valores permitidos por coluna",
            "Contagem esperada de linhas com alerta de divergência",
            "Localização precisa do erro no formato ColunaLinha, como C12 e F7",
          ],
          metricsTitle: "Métricas do projeto",
          metrics: [
            ["5", "Tipos de validação"],
            ["88", "Linhas monitoradas"],
            ["10", "Colunas validadas"],
            ["22", "Distribuidores rastreados"],
          ],
          techTitle: "Tecnologias",
          technologies: [
            "Power BI",
            "Power Query (M)",
            "Banco de dados",
            "Funções reutilizáveis",
            "Tratamento de erros",
            "Qualidade de dados",
            "Automação",
          ],
        },
        {
          title: "Mapeamento de Prospecção B2B",
          status: "Concluído",
          images: [
            {
              src: "/assets/projects/prospeccao-b2b-capa.jpeg",
              alt: "Capa do projeto Mapeamento de Prospecção B2B Londrina 2026 com dados processados e total de empresas analisadas.",
            },
            {
              src: "/assets/projects/prospeccao-b2b-overview.jpeg",
              alt: "Dashboard Overview de Mercado com total de prospects, leads premium, capital social médio e maturidade do mercado.",
            },
            {
              src: "/assets/projects/prospeccao-b2b-prioridades.jpeg",
              alt: "Dashboard Prioridades Comerciais com leads premium, leads alto, prospects prioritários e matriz estratégica.",
            },
            {
              src: "/assets/projects/prospeccao-b2b-pipeline.jpeg",
              alt: "Dashboard Pipeline de Leads Prioritários com empresas, segmento, score, classificação e próximo passo.",
            },
          ],
          description:
            "Estudo estratégico de mercado que combina processamento de dados públicos da Receita Federal via Python com visualização em Power BI. Um script filtra e enriquece registros de CNPJs por cidade e segmento de atuação, gerando uma base qualificada de prospects com score de potencial, classificação por maturidade e pipeline de leads priorizados para abordagem comercial.",
          functionalityTitle: "Principais entregas",
          functionalities: [
            "Overview de mercado com capital social médio, tempo de maturidade e estrutura matrizes/filiais",
            "Score de potencial por CNPJ com classificação Premium e Alto",
            "Priorização estratégica cruzando maturidade de mercado com score de potencial",
            "Pipeline de leads com segmento, classificação e sugestão de próximo passo comercial",
            "Alertas de oportunidades perdidas, enriquecimento de e-mail e empresas veteranas",
          ],
          metricsTitle: "Métricas do projeto",
          metrics: [
            ["1.967", "Empresas analisadas"],
            ["185", "Leads premium"],
            ["632", "Prospects prioritários"],
            ["91,8", "Score médio do pipeline"],
          ],
          techTitle: "Tecnologias",
          technologies: [
            "Python",
            "Power BI",
            "Dados abertos",
            "Receita Federal",
            "Score de leads",
            "Segmentação B2B",
            "Inteligência comercial",
            "Prospecção ativa",
          ],
        },
        {
          title: "Mercado de Internet via Satélite — Starlink vs Hughes",
          status: "Concluído",
          images: [
            {
              src: "/assets/projects/starlink-hughes-capa.jpeg",
              alt: "Capa do projeto Análise de Mercado com mapa mundial roxo.",
            },
            {
              src: "/assets/projects/starlink-hughes-mercado.jpeg",
              alt: "Dashboard de mercado com assinantes Starlink e Hughes, evolução mensal e share.",
            },
            {
              src: "/assets/projects/starlink-hughes-regional.jpeg",
              alt: "Dashboard comparativo de desempenho regional entre Starlink e Hughes.",
            },
            {
              src: "/assets/projects/starlink-hughes-velocidade.jpeg",
              alt: "Dashboard de desempenho por velocidade e região.",
            },
            {
              src: "/assets/projects/starlink-hughes-tendencias.jpeg",
              alt: "Dashboard de tendências futuras do mercado de internet com previsão para Starlink e Hughes.",
            },
          ],
          description:
            "Estudo competitivo do mercado brasileiro de internet via satélite, comparando o crescimento da Starlink frente à Hughes entre junho de 2024 e janeiro de 2025. O projeto analisa evolução de assinantes, desempenho regional por velocidade de conexão e projeta tendências para os seis meses seguintes, entregando insights estratégicos sobre concentração de mercado e movimentos de expansão por região.",
          functionalityTitle: "Análises realizadas",
          functionalities: [
            "Evolução mensal da base de assinantes por operadora",
            "Participação e representatividade de mercado",
            "Comparativo regional de crescimento por estado e macrorregião",
            "Desempenho por faixa de velocidade",
            "Previsão de tendência para os próximos 6 meses com intervalo de confiança",
          ],
          metricsTitle: "Métricas do projeto",
          metrics: [
            ["502 K", "Assinantes analisados"],
            ["8 meses", "Série histórica"],
            ["5", "Regiões comparadas"],
            ["6 meses", "Horizonte de previsão"],
          ],
          techTitle: "Tecnologias",
          technologies: [
            "Power BI",
            "Análise competitiva",
            "Séries temporais",
            "Previsão de tendência",
            "Análise regional",
            "Telecom / Internet",
          ],
        },
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
        "I turn financial, operational and commercial data into dashboards, automations and analyses that help business teams make clearer decisions.",
      stack: "Power BI • Python • SQL • DAX • Power Query • Financial Analysis",
      projectCta: "View projects",
      contactCta: "Get in touch",
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
    projects: {
      eyebrow: "Projects",
      title: "Featured projects",
      description:
        "Dashboards and analytical solutions presented from real project screenshots.",
      items: [
        {
          title: "Payroll Cost Dashboard",
          status: "Completed",
          images: [
            {
              src: "/assets/projects/painel-custos-pessoal.jpeg",
              alt: "Payroll Cost Dashboard with KPIs, department table and cost distribution chart.",
            },
          ],
          description:
            "Power BI dashboard built to monitor personnel costs for a company with 40 employees. It consolidates payroll, charges and bonus data by department, supporting analysis by period and employee. It also uses custom HTML components for a differentiated visual experience.",
          functionalityTitle: "Main features",
          functionalities: [
            "KPIs for total cost, employee count, average cost per employee and bonus cost",
            "Detailed table with payroll, charges and bonuses by department",
            "Pie chart with percentage cost distribution by department",
            "Dynamic filters by month, year and employee name",
            "Custom HTML components integrated into Power BI",
          ],
          metricsTitle: "Project metrics",
          metrics: [
            ["40", "Employees"],
            ["R$ 207k", "Total cost monitored"],
            ["6", "Departments analyzed"],
            ["3", "Interactive filters"],
          ],
          techTitle: "Technologies",
          technologies: [
            "Power BI",
            "DAX",
            "Custom HTML",
            "CSS",
            "Data visualization",
            "HR / People Analytics",
          ],
        },
        {
          title: "Automated Data Validator",
          status: "Completed",
          images: [
            {
              src: "/assets/projects/validador-dados-com-erros.jpeg",
              alt: "Data Validator dashboard with 23 errors, 6 error types and an inconsistency table.",
            },
            {
              src: "/assets/projects/validador-dados-sem-erros.jpeg",
              alt: "Data Validator dashboard with no errors, green traffic light and zero totals.",
            },
          ],
          description:
            "Automated data validation solution developed in Power Query (M) and integrated directly with a company database. The system receives source data, applies configurable rules and returns a detailed inconsistency report, indicating error type, exact cell location and issue context. When there are no errors, the dashboard shows a green traffic light with zero occurrences.",
          functionalityTitle: "Supported validation types",
          functionalities: [
            "Required column checks, including missing or extra columns",
            "Empty cell and cell error detection",
            "Allowed-value list validation by column",
            "Expected row count checks with divergence alerts",
            "Precise error location in Excel-style notation, such as C12 and F7",
          ],
          metricsTitle: "Project metrics",
          metrics: [
            ["5", "Validation types"],
            ["88", "Rows monitored"],
            ["10", "Columns validated"],
            ["22", "Distributors tracked"],
          ],
          techTitle: "Technologies",
          technologies: [
            "Power BI",
            "Power Query (M)",
            "Database",
            "Reusable functions",
            "Error handling",
            "Data quality",
            "Automation",
          ],
        },
        {
          title: "B2B Prospecting Mapping",
          status: "Completed",
          images: [
            {
              src: "/assets/projects/prospeccao-b2b-capa.jpeg",
              alt: "Cover for the B2B Prospecting Mapping project Londrina 2026 with processed data and total companies analyzed.",
            },
            {
              src: "/assets/projects/prospeccao-b2b-overview.jpeg",
              alt: "Market Overview dashboard with total prospects, premium leads, average share capital and market maturity.",
            },
            {
              src: "/assets/projects/prospeccao-b2b-prioridades.jpeg",
              alt: "Commercial Priorities dashboard with premium leads, high leads, priority prospects and strategic matrix.",
            },
            {
              src: "/assets/projects/prospeccao-b2b-pipeline.jpeg",
              alt: "Priority Leads Pipeline dashboard with companies, segment, score, classification and next step.",
            },
          ],
          description:
            "Strategic market study combining public Receita Federal data processing in Python with Power BI visualization. A script filters and enriches CNPJ records by city and business segment, generating a qualified prospect base with potential score, maturity classification and prioritized lead pipeline for commercial outreach.",
          functionalityTitle: "Main deliverables",
          functionalities: [
            "Market overview with average share capital, maturity time and headquarters/branch structure",
            "Potential score by CNPJ with Premium and High classifications",
            "Strategic prioritization crossing market maturity with potential score",
            "Lead pipeline with segment, classification and suggested commercial next step",
            "Alerts for lost opportunities, e-mail enrichment and veteran companies",
          ],
          metricsTitle: "Project metrics",
          metrics: [
            ["1,967", "Companies analyzed"],
            ["185", "Premium leads"],
            ["632", "Priority prospects"],
            ["91.8", "Average pipeline score"],
          ],
          techTitle: "Technologies",
          technologies: [
            "Python",
            "Power BI",
            "Open data",
            "Receita Federal",
            "Lead scoring",
            "B2B segmentation",
            "Commercial intelligence",
            "Active prospecting",
          ],
        },
        {
          title: "Satellite Internet Market — Starlink vs Hughes",
          status: "Completed",
          images: [
            {
              src: "/assets/projects/starlink-hughes-capa.jpeg",
              alt: "Market Analysis project cover with a purple world map.",
            },
            {
              src: "/assets/projects/starlink-hughes-mercado.jpeg",
              alt: "Market dashboard with Starlink and Hughes subscribers, monthly evolution and share.",
            },
            {
              src: "/assets/projects/starlink-hughes-regional.jpeg",
              alt: "Regional performance comparison dashboard between Starlink and Hughes.",
            },
            {
              src: "/assets/projects/starlink-hughes-velocidade.jpeg",
              alt: "Speed and region performance dashboard.",
            },
            {
              src: "/assets/projects/starlink-hughes-tendencias.jpeg",
              alt: "Future internet market trends dashboard with forecast for Starlink and Hughes.",
            },
          ],
          description:
            "Competitive study of the Brazilian satellite internet market, comparing Starlink's growth against Hughes between June 2024 and January 2025. The project analyzes subscriber evolution, regional performance by connection speed and forecasts trends for the following six months, delivering strategic insights on market concentration and regional expansion movements.",
          functionalityTitle: "Analyses performed",
          functionalities: [
            "Monthly subscriber base evolution by operator",
            "Market participation and share analysis",
            "Regional growth comparison by state and macro-region",
            "Performance by speed range",
            "Six-month trend forecast with confidence interval",
          ],
          metricsTitle: "Project metrics",
          metrics: [
            ["502 K", "Subscribers analyzed"],
            ["8 months", "Historical series"],
            ["5", "Regions compared"],
            ["6 months", "Forecast horizon"],
          ],
          techTitle: "Technologies",
          technologies: [
            "Power BI",
            "Competitive analysis",
            "Time series",
            "Trend forecasting",
            "Regional analysis",
            "Telecom / Internet",
          ],
        },
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
            <Link href={anchor("projetos")}>{copy.nav.projects}</Link>
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

      <section id="projetos" className="section-shell scroll-mt-24 py-20">
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

        <div className="grid gap-6">
          {copy.projects.items.map((project) => (
            <Card key={project.title} className="overflow-hidden bg-white">
              <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                <ProjectImageCarousel images={project.images} />

                <div className="p-6 lg:p-8">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <Badge>{project.status}</Badge>
                    {project.technologies.slice(0, 2).map((technology) => (
                      <Badge key={technology} variant="secondary">
                        {technology}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-slate-950">
                    {project.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-700">{project.description}</p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {project.metrics.map(([value, label]) => (
                      <div key={label} className="rounded-md border bg-slate-50 p-4">
                        <strong className="block text-2xl text-slate-950">{value}</strong>
                        <span className="mt-1 block text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-6 border-t p-6 lg:grid-cols-[1fr_0.85fr] lg:p-8">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-primary">
                    {project.functionalityTitle}
                  </h4>
                  <div className="mt-4 grid gap-3">
                    {project.functionalities.map((item) => (
                      <div key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-primary">
                    {project.techTitle}
                  </h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <Badge key={technology} variant="secondary">
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
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
                <Link href="/assets/izabelli-soriano-cv.pdf" target="_blank">
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
