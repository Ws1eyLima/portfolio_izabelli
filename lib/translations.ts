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
      credentials: "Credenciais",
      projects: "Projetos",
      skills: "Competências",
      contact: "Contato",
      language: "Selecionar idioma",
    },
    hero: {
      eyebrow: "BI, dados e análise de negócios",
      title: "Data & Business Intelligence Analyst",
      description:
        "Analista de Dados e Business Intelligence com atuação em finanças, operações e inteligência comercial. Experiência na construção de dashboards, automações e relatórios gerenciais que organizam dados dispersos, reduzem processos manuais e apoiam decisões estratégicas com indicadores confiáveis.",
      stack: "Power BI • SQL • Python • DAX • Power Query • Análise Financeira",
      projectCta: "Ver projetos",
      contactCta: "Entrar em contato",
      resumeCta: "Ver currículo",
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
          title: "Painel de Faturamento e Metas",
          status: "Concluído",
          images: [
            {
              src: "/assets/projects/faturamento-capa.jpeg",
              alt: "Dashboard Gerencial de Faturamento exibindo o panorama geral financeiro.",
            },
            {
              src: "/assets/projects/faturamento-detalhes.jpeg",
              alt: "Dashboard Gerencial de Faturamento detalhando métricas por unidade de negócio.",
            },
          ],
          description:
            "Desenvolvimento de dashboard gerencial para acompanhamento de indicadores comerciais e financeiros, permitindo uma análise consolidada do faturamento, atingimento de metas e desempenho das unidades de negócio. O projeto foi construído utilizando Power BI como plataforma principal e DAX para as medidas complexas, com customizações visuais exclusivas criadas através de HTML e CSS, proporcionando uma interface moderna e intuitiva.",
          functionalityTitle: "Principais funcionalidades",
          functionalities: [
            "Acompanhamento consolidado do faturamento frente às metas estabelecidas",
            "Análise de desempenho segmentada por unidades de negócio e períodos",
            "Componentes visuais customizados integrados ao Power BI via HTML e CSS",
            "Indicadores comerciais interativos e filtros dinâmicos de drill-down",
          ],
          techTitle: "Tecnologias",
          technologies: [
            "Power BI",
            "DAX",
            "HTML",
            "CSS",
            "Inteligência Comercial",
            "Gestão Financeira",
          ],
        },
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
      credentials: "Credentials",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      language: "Select language",
    },
    hero: {
      eyebrow: "BI, data and business analysis",
      title: "Data & Business Intelligence Analyst",
      description:
        "Data and Business Intelligence Analyst with experience across finance, operations and commercial intelligence. Skilled in building dashboards, automations and management reports that organize scattered data, reduce manual processes and support strategic decisions with reliable indicators.",
      stack: "Power BI • Python • SQL • DAX • Power Query • Financial Analysis",
      projectCta: "View projects",
      contactCta: "Get in touch",
      resumeCta: "View resume",
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
          title: "Revenue & Goals Dashboard",
          status: "Completed",
          images: [
            {
              src: "/assets/projects/faturamento-capa.jpeg",
              alt: "Managerial Revenue Dashboard showing the overall financial overview.",
            },
            {
              src: "/assets/projects/faturamento-detalhes.jpeg",
              alt: "Managerial Revenue Dashboard detailing metrics by business unit.",
            },
          ],
          description:
            "Development of a management dashboard for tracking commercial and financial indicators, allowing a consolidated analysis of revenue, goal achievement, and business unit performance. The project was built using Power BI as the main platform and DAX for complex measures, with custom visual adaptations created through HTML and CSS, providing a modern and intuitive interface.",
          functionalityTitle: "Main features",
          functionalities: [
            "Consolidated tracking of revenue against established goals",
            "Performance analysis segmented by business units and periods",
            "Custom visual components integrated into Power BI via HTML and CSS",
            "Interactive commercial indicators and dynamic drill-down filters",
          ],
          techTitle: "Technologies",
          technologies: [
            "Power BI",
            "DAX",
            "HTML",
            "CSS",
            "Commercial Intelligence",
            "Financial Management",
          ],
        },
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
