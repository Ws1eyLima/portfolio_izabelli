import {
  BarChart3,
  Code2,
  Database,
  FileBarChart2,
  LineChart,
  PieChart,
  Sigma,
  Sparkles,
  WalletCards,
} from "lucide-react";

export const iconMap = {
  BarChart3,
  Code2,
  Database,
  FileBarChart2,
  LineChart,
  PieChart,
  Sigma,
  Sparkles,
  WalletCards,
} as const;

export type IconName = keyof typeof iconMap;

export const content = {
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
        "Atua no Grupo JR8 com análises financeiras, controles de recebíveis e relatórios gerenciais. Recentemente, liderou um projeto orientado a dados que reduziu a inadimplência da empresa de 4% para 1%. Sua trajetória combina BI, gestão de contas, trade marketing, PCP e administração, conectando análise técnica às necessidades reais do negócio.",
      ],
      highlights: [
        "Analista de Dados Financeiros Pleno no Grupo JR8",
        "Experiência em BI, gestão de contas, trade marketing, PCP e rotinas administrativas",
        "Atuação com conciliação bancária, relatórios gerenciais e redução de inadimplência (de 4% para 1%)",
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
            "Redução expressiva da inadimplência de 4% para 1% via estratégia orientada a dados. Desenvolvimento de dashboards financeiros, análises de rentabilidade, conciliações bancárias e automação de processos no ERP.",
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
              alt: "Dashboard Pipeline de Leads Prioritários com empresas, segmento, score, classification e próximo passo.",
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
        ["Pandas & Streamlit", "Code2"],
        ["IA Generativa (LLMs)", "Sparkles"],
        ["Power BI", "BarChart3"],
        ["SQL", "Database"],
        ["DAX", "Sigma"],
        ["Power Query", "FileBarChart2"],
        ["Análise financeira", "LineChart"],
        ["Indicadores de desempenho", "PieChart"],
        ["Relatórios gerenciais", "FileBarChart2"],
        ["Gestão empresarial", "WalletCards"],
      ] as [string, IconName][],
    },
    footer: {
      title: "Contato",
      description: "Vamos conversar sobre dados e resultados?",
      email: "E-mail",
      phone: "+55 (19) 99578-7448",
      phoneLink: "https://wa.me/5519995787448",
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
        "At JR8 Group, she works with financial analysis, accounts receivable controls and management reports. Recently, she led a data-driven initiative that reduced company delinquency from 4% to 1%. Her background combines BI, account management, trade marketing, production planning and administration, connecting technical analysis with real business needs.",
      ],
      highlights: [
        "Mid-Level Financial Data Analyst at JR8 Group",
        "Experience in BI, account management, trade marketing, production planning and administrative routines",
        "Work with bank reconciliation, management reports, and delinquency reduction (from 4% to 1%)",
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
            "Significant delinquency reduction from 4% to 1% via data-driven strategy. Development of financial dashboards, profitability analysis, bank reconciliations, and ERP process automation.",
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
        ["Pandas & Streamlit", "Code2"],
        ["Generative AI (LLMs)", "Sparkles"],
        ["Power BI", "BarChart3"],
        ["SQL", "Database"],
        ["DAX", "Sigma"],
        ["Power Query", "FileBarChart2"],
        ["Financial analysis", "LineChart"],
        ["Performance indicators", "PieChart"],
        ["Management reports", "FileBarChart2"],
        ["Business management", "WalletCards"],
      ] as [string, IconName][],
    },
    footer: {
      title: "Contact",
      description: "Shall we talk about data and results?",
      email: "Email",
      phone: "+55 (19) 99578-7448",
      phoneLink: "https://wa.me/5519995787448",
      profile: "Download profile",
      photoAlt: "Photo of Izabelli Soriano",
    },
  },
} as const;

export type Language = keyof typeof content;
