export type Locale = 'en' | 'es';

export const locales: Locale[] = ['en', 'es'];

export type KPI = {
  label: string;
  value: string;
};

export type CaseStudy = {
  title: string;
  summary: string;
  stack: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  website: string;
  logo: CompanyLogo;
  period: string;
  highlights: string[];
};

export type CompanyLogo = {
  src: string;
  width: number;
  height: number;
};

export type ProjectLinkKind = 'website' | 'appStore' | 'googlePlay';

export type ProjectLink = {
  kind: ProjectLinkKind;
  label: string;
  href: string;
};

export type Project = {
  name: string;
  role?: string;
  period?: string;
  status?: string;
  summary: string;
  stack: string[];
  links: ProjectLink[];
};

export type EducationItem = {
  period: string;
  title: string;
  institution: string;
  location: string;
};

export type Profile = {
  fullName: string;
  headline: string;
  jobTitle: string;
  summary: string;
  location: string;
  linkedin: string;
  github: string;
  email: string;
  cvUrl: string;
};

export type TechCategoryId = 'frontend' | 'backend' | 'cloud' | 'quality' | 'languages';

export type TechCategory = {
  id: TechCategoryId;
  title: string;
  items: string[];
};

export type HomeCopy = {
  metaTitle: string;
  metaDescription: string;
  ogImageAlt: string;
  skipToContent: string;
  sections: {
    impact: string;
    experience: string;
    projects: string;
    stack: string;
    contact: string;
  };
  mainNavLabel: string;
  languageLabel: string;
  colorModeLabel: string;
  roleChip: string;
  heroTitle: string;
  projectsButton: string;
  linkedinButton: string;
  factsLabel: string;
  trustedBy: string;
  impactTitle: string;
  impactSummary: string;
  careerTimeline: string;
  careerTimelineSummary: string;
  currentTag: string;
  projectsTitle: string;
  projectsSummary: string;
  coreStack: string;
  coreStackSummary: string;
  contactTitle: string;
  contactSummary: string;
  linkedinContactButton: string;
  downloadCvButton: string;
  companyWebsiteLabel: string;
  projectLinkLabel: string;
  footerNote: string;
};

export type PortfolioContent = {
  profile: Profile;
  kpis: KPI[];
  experiences: ExperienceItem[];
  caseStudies: CaseStudy[];
  projects: Project[];
  techCategories: TechCategory[];
};

const linkedin = 'https://www.linkedin.com/in/sergi-arias-fern%C3%A1ndez-ab2729148/';
const github = 'https://github.com/sarias980';
const email = 'info@sarias.dev';

const logos = {
  deepdots: { src: '/logos/deepdots.svg', width: 805, height: 160 },
  coachendo: { src: '/logos/coachendo.webp', width: 100, height: 100 },
  uve: { src: '/logos/uve-solutions.webp', width: 274, height: 93 },
  alten: { src: '/logos/alten.webp', width: 64, height: 104 },
  admira: { src: '/logos/admira.svg', width: 500, height: 130 },
} satisfies Record<string, CompanyLogo>;

const profileEn: Profile = {
  fullName: 'Sergi Arias Fernández',
  headline: 'Senior Full-Stack Engineer · React, React Native & TypeScript',
  jobTitle: 'Senior Full-Stack Engineer',
  summary:
    'Senior full-stack engineer with 10+ years building web and mobile products. I take products from idea to production: frontend architecture, API and database, apps live on the App Store and Google Play, payments and CI/CD.',
  location: 'Barcelona, Spain',
  linkedin,
  github,
  email,
  cvUrl: '/cv/Sergi_Arias_Fernandez_CV_EN.pdf',
};

const profileEs: Profile = {
  ...profileEn,
  headline: 'Ingeniero Full-Stack Senior · React, React Native y TypeScript',
  jobTitle: 'Ingeniero Full-Stack Senior',
  summary:
    'Ingeniero full-stack senior con más de 10 años construyendo productos web y móviles. Llevo productos de la idea a producción: arquitectura frontend, API y base de datos, apps publicadas en App Store y Google Play, pagos y CI/CD.',
  location: 'Barcelona, España',
  cvUrl: '/cv/Sergi_Arias_Fernandez_CV_ES.pdf',
};

const kpisEn: KPI[] = [
  { label: 'Years of experience', value: '10+' },
  { label: 'Projects delivered', value: '20+' },
  { label: 'From infrastructure to app', value: 'Full-stack' },
];

const kpisEs: KPI[] = [
  { label: 'Años de experiencia', value: '10+' },
  { label: 'Proyectos entregados', value: '20+' },
  { label: 'De la infraestructura a la app', value: 'Full-stack' },
];

const experiencesEn: ExperienceItem[] = [
  {
    role: 'Frontend Technical Lead',
    company: 'Deepdots',
    website: 'https://deepdots.com',
    logo: logos.deepdots,
    period: 'Sep 2023 – Present',
    highlights: [
      'Led the frontend architecture from project inception in a distributed multi-repository environment.',
    ],
  },
  {
    role: 'Senior Frontend Engineer',
    company: 'Coachendo',
    website: 'https://coachendo.com',
    logo: logos.coachendo,
    period: '2022 – 2023',
    highlights: ['Designed a complete multi-platform frontend architecture based on React.'],
  },
  {
    role: 'Apps Technical Lead',
    company: 'UVE Solutions',
    website: 'https://uvesolutions.com',
    logo: logos.uve,
    period: '2021 – 2022',
    highlights: ['Implemented two hybrid apps for multiple platforms.'],
  },
  {
    role: 'Senior Multi Platform Developer',
    company: 'Alten',
    website: 'https://www.alten.com',
    logo: logos.alten,
    period: '2018 – 2021',
    highlights: ['Implemented two hybrid apps across multiple platforms.'],
  },
  {
    role: 'Junior Multi Platform Developer',
    company: 'Admira Digital Networks',
    website: 'https://www.admira.com',
    logo: logos.admira,
    period: '2015 – 2018',
    highlights: ['Developed new web platform features and reusable components.'],
  },
];

const experiencesEs: ExperienceItem[] = [
  {
    ...experiencesEn[0],
    role: 'Líder Técnico Frontend',
    period: 'Sep 2023 – Actualidad',
    highlights: [
      'Lideré la arquitectura frontend desde el inicio del proyecto en un entorno distribuido con múltiples repositorios.',
    ],
  },
  {
    ...experiencesEn[1],
    role: 'Ingeniero Frontend Senior',
    highlights: ['Diseñé una arquitectura frontend completa y multiplataforma basada en React.'],
  },
  {
    ...experiencesEn[2],
    role: 'Líder Técnico de Apps',
    highlights: ['Implementé dos aplicaciones híbridas para múltiples plataformas.'],
  },
  {
    ...experiencesEn[3],
    role: 'Desarrollador Senior Multiplataforma',
    highlights: ['Implementé dos aplicaciones híbridas en múltiples plataformas.'],
  },
  {
    ...experiencesEn[4],
    role: 'Desarrollador Junior Multiplataforma',
    highlights: ['Desarrollé nuevas funcionalidades web y componentes reutilizables.'],
  },
];

// Impact cards describe the current role at Deepdots.
const caseStudiesEn: CaseStudy[] = [
  {
    title: 'Architecture from Day 0',
    summary:
      'Built the frontend foundation from scratch in a distributed, multi-repository setup aligned with product roadmap constraints.',
    stack: ['React', 'TypeScript', 'Redux', 'Monorepo Strategy'],
  },
  {
    title: 'Data-Driven Product at Scale',
    summary:
      'Implemented interfaces and flows for a platform that processes and visualizes 10k+ feedback inputs per day.',
    stack: ['React', 'GCP', 'BigQuery', 'Node.js Integration'],
  },
  {
    title: 'Quality and Team Enablement',
    summary:
      'Defined engineering standards, CI/CD pipelines and review practices while mentoring new team members.',
    stack: ['GitHub Actions', 'Jest', 'Code Review', 'Onboarding'],
  },
];

const caseStudiesEs: CaseStudy[] = [
  {
    title: 'Arquitectura desde el día 0',
    summary:
      'Construí la base frontend desde cero en una configuración distribuida y multi-repositorio alineada con las restricciones del roadmap de producto.',
    stack: ['React', 'TypeScript', 'Redux', 'Estrategia Monorepo'],
  },
  {
    title: 'Producto data-driven a escala',
    summary:
      'Implementé interfaces y flujos para una plataforma que procesa y visualiza más de 10k entradas de feedback por día.',
    stack: ['React', 'GCP', 'BigQuery', 'Integración Node.js'],
  },
  {
    title: 'Calidad y habilitación del equipo',
    summary:
      'Definí estándares de ingeniería, pipelines de CI/CD y prácticas de revisión mientras mentorizaba a nuevos miembros del equipo.',
    stack: ['GitHub Actions', 'Jest', 'Code Review', 'Onboarding'],
  },
];

const touryTellerLinks = (websiteLabel: string): ProjectLink[] => [
  { kind: 'website', label: websiteLabel, href: 'https://touryteller.com' },
  { kind: 'appStore', label: 'App Store', href: 'https://apps.apple.com/es/app/touryteller/id6761470076' },
  {
    kind: 'googlePlay',
    label: 'Google Play',
    href: 'https://play.google.com/store/apps/details?id=com.touryteller',
  },
];

const projectsEn: Project[] = [
  {
    name: 'TouryTeller',
    role: 'Founding engineer',
    summary:
      'Gamified city tour app live on the App Store and Google Play. Users explore the city through challenges, geolocated checkpoints and points-and-levels progression; local creators publish and sell their tours from their own dashboard, with Stripe Connect payouts. I built the whole product: infrastructure, API, mobile app, admin panel, a self-hosted machine translation service and the design.',
    stack: [
      'React Native',
      'Fastify',
      'Prisma',
      'PostgreSQL',
      'Redis',
      'Stripe',
      'Mapbox',
      'FastAPI',
      'Railway',
      'GitHub Actions',
    ],
    links: touryTellerLinks('touryteller.com'),
  },
  {
    name: 'ACM Barcelona',
    summary:
      'Website for a Barcelona motorcycle workshop founded by former Ducati racing-team mechanics. It leads with that differentiator and drives visitors to call, message on WhatsApp or request a quote.',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    links: [{ kind: 'website', label: 'acmbarcelona.com', href: 'https://acmbarcelona.com' }],
  },
  {
    name: 'lidiamourelo.com',
    summary:
      'Spanish and Catalan website for an online psychology practice, with a technical and SEO audit. I traced five SEO issues (broken canonicals, duplicate hreflang, identical meta descriptions…) to a single root cause, head tags duplicated during prerendering, and fixed it in production.',
    stack: ['React', 'Vite', 'Prerendering', 'Firebase Hosting'],
    links: [{ kind: 'website', label: 'lidiamourelo.com', href: 'https://lidiamourelo.com' }],
  },
  {
    name: 'Corvi',
    status: 'In development',
    summary:
      'Private invoicing tool for Spanish freelancers: correct numbering and totals, corrective invoices, payments and a copy of every document in the accountant’s Google Drive. Tax rules are enforced in the database schema, and it all runs on Cloudflare’s free tier.',
    stack: ['React', 'Vite', 'Cloudflare Workers', 'Hono', 'D1', 'Playwright'],
    links: [],
  },
  {
    name: 'Mint5.io',
    role: 'Founding engineer',
    period: '2021 – 2022',
    summary:
      'Platform to mint NFTs from Instagram posts and trade them. As a founding engineer I led the web and mobile frontend with Ionic and Angular, with Web3 integration on Polygon.',
    stack: ['Ionic', 'Angular', 'Web3', 'Polygon'],
    links: [],
  },
];

const projectsEs: Project[] = [
  {
    ...projectsEn[0],
    role: 'Ingeniero del equipo fundador',
    summary:
      'App de rutas urbanas gamificadas publicada en App Store y Google Play. Los usuarios recorren la ciudad con retos, checkpoints geolocalizados y progresión por puntos y niveles; los creadores locales publican y venden sus rutas desde un panel propio, con cobros por Stripe Connect. Construí el producto entero: infraestructura, API, app móvil, panel de administración, un servicio propio de traducción automática y el diseño.',
  },
  {
    ...projectsEn[1],
    summary:
      'Web de un taller de motos de Barcelona fundado por exmecánicos del equipo de competición de Ducati. Pone ese valor diferencial en primer plano y lleva al visitante a llamar, escribir por WhatsApp o pedir presupuesto.',
  },
  {
    ...projectsEn[2],
    summary:
      'Web en español y catalán de una consulta de psicología online, con auditoría técnica y SEO. Detecté que cinco errores de SEO (canonicals rotos, hreflang duplicado, meta descriptions idénticas…) tenían una sola causa, etiquetas del head duplicadas al prerenderizar, y lo corregí en producción.',
    stack: ['React', 'Vite', 'Prerenderizado', 'Firebase Hosting'],
  },
  {
    ...projectsEn[3],
    status: 'En desarrollo',
    summary:
      'Aplicación privada para facturar como autónomo: numeración y totales correctos, rectificativas, cobros y copia de cada documento en el Drive de la gestoría. Las reglas fiscales están en el esquema de la base de datos y todo funciona en el plan gratuito de Cloudflare.',
  },
  {
    ...projectsEn[4],
    role: 'Ingeniero del equipo fundador',
    summary:
      'Plataforma para crear NFTs a partir de publicaciones de Instagram y comerciar con ellos. Como ingeniero del equipo fundador lideré el frontend web y móvil con Ionic y Angular, con integración Web3 en Polygon.',
  },
];

// Not rendered yet; kept for the CV and future use.
export const education: EducationItem[] = [
  {
    period: '2016 – 2018',
    title: 'Development of Multi Platform Applications',
    institution: 'Institut Poblenou',
    location: 'Barcelona',
  },
  {
    period: '2014 – 2016',
    title: 'Computer Systems Management in the Network',
    institution: 'Institut Puig',
    location: 'Barcelona',
  },
];

const techCategoriesEn: TechCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend & mobile',
    items: ['React', 'React Native', 'TypeScript', 'Next.js', 'Redux', 'Zustand', 'TanStack Query'],
  },
  {
    id: 'backend',
    title: 'Backend',
    items: ['Node.js', 'Fastify', 'PostgreSQL', 'Prisma', 'Redis', 'Python (FastAPI)'],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    items: ['GCP', 'BigQuery', 'Firebase', 'Cloudflare', 'Railway', 'Docker', 'GitHub Actions'],
  },
  {
    id: 'quality',
    title: 'Quality',
    items: ['Jest', 'Vitest', 'Testing Library', 'Playwright', 'Sentry'],
  },
  {
    id: 'languages',
    title: 'Languages',
    items: ['Spanish', 'Catalan', 'English'],
  },
];

const techCategoriesEs: TechCategory[] = [
  { ...techCategoriesEn[0], title: 'Frontend y móvil' },
  techCategoriesEn[1],
  { ...techCategoriesEn[2], title: 'Cloud y DevOps' },
  { ...techCategoriesEn[3], title: 'Calidad' },
  { ...techCategoriesEn[4], title: 'Idiomas', items: ['Español', 'Catalán', 'Inglés'] },
];

const homeCopy: Record<Locale, HomeCopy> = {
  en: {
    metaTitle: 'Sergi Arias Fernández · Senior Full-Stack Engineer',
    metaDescription:
      'Senior full-stack engineer in Barcelona. React, React Native and TypeScript: web and mobile products from idea to production.',
    ogImageAlt: 'Sergi Arias Fernández, Senior Full-Stack Engineer',
    skipToContent: 'Skip to content',
    sections: {
      impact: 'Impact',
      experience: 'Experience',
      projects: 'Projects',
      stack: 'Stack',
      contact: 'Contact',
    },
    mainNavLabel: 'Main',
    languageLabel: 'Language',
    colorModeLabel: 'Dark mode',
    roleChip: profileEn.headline,
    heroTitle: 'Web and mobile products, from idea to production',
    projectsButton: 'See projects',
    linkedinButton: 'LinkedIn',
    factsLabel: 'Key facts',
    trustedBy: 'Trusted by',
    impactTitle: 'Impact at Deepdots',
    impactSummary: 'Frontend technical lead for a data-driven React and TypeScript product, from day 0.',
    careerTimeline: 'Experience',
    careerTimelineSummary: 'From multi-platform apps to technical leadership and full-stack products.',
    currentTag: 'Current',
    projectsTitle: 'Projects',
    projectsSummary:
      'Web and mobile products built end to end with React, React Native and TypeScript, from the database to the stores.',
    coreStack: 'Core stack',
    coreStackSummary: 'Technologies I use in production, from the interface to the infrastructure.',
    contactTitle: 'Get in touch',
    contactSummary: 'The quickest way to reach me is by email or LinkedIn.',
    linkedinContactButton: 'LinkedIn',
    downloadCvButton: 'Download CV',
    companyWebsiteLabel: 'Open {{company}} website',
    projectLinkLabel: '{{project}} on {{target}}',
    footerNote: 'Full-stack engineer based in Barcelona.',
  },
  es: {
    metaTitle: 'Sergi Arias Fernández · Ingeniero Full-Stack Senior',
    metaDescription:
      'Ingeniero full-stack senior en Barcelona. React, React Native y TypeScript: productos web y móviles de la idea a producción.',
    ogImageAlt: 'Sergi Arias Fernández, Ingeniero Full-Stack Senior',
    skipToContent: 'Saltar al contenido',
    sections: {
      impact: 'Impacto',
      experience: 'Trayectoria',
      projects: 'Proyectos',
      stack: 'Stack',
      contact: 'Contacto',
    },
    mainNavLabel: 'Principal',
    languageLabel: 'Idioma',
    colorModeLabel: 'Modo oscuro',
    roleChip: profileEs.headline,
    heroTitle: 'Productos web y móviles, de la idea a producción',
    projectsButton: 'Ver proyectos',
    linkedinButton: 'LinkedIn',
    factsLabel: 'Datos clave',
    trustedBy: 'Han confiado en mí',
    impactTitle: 'Impacto en Deepdots',
    impactSummary:
      'Líder técnico frontend de un producto data-driven con React y TypeScript, desde el día 0.',
    careerTimeline: 'Trayectoria',
    careerTimelineSummary: 'De las apps multiplataforma al liderazgo técnico y los productos full-stack.',
    currentTag: 'Actual',
    projectsTitle: 'Proyectos',
    projectsSummary:
      'Productos web y móviles construidos de principio a fin con React, React Native y TypeScript, de la base de datos a las stores.',
    coreStack: 'Stack principal',
    coreStackSummary: 'Tecnologías que uso en producción, de la interfaz a la infraestructura.',
    contactTitle: 'Contacto',
    contactSummary: 'La forma más rápida de contactarme es por email o LinkedIn.',
    linkedinContactButton: 'LinkedIn',
    downloadCvButton: 'Descargar CV',
    companyWebsiteLabel: 'Abrir web de {{company}}',
    projectLinkLabel: '{{project}} en {{target}}',
    footerNote: 'Ingeniero full-stack en Barcelona.',
  },
};

const portfolioContent: Record<Locale, PortfolioContent> = {
  en: {
    profile: profileEn,
    kpis: kpisEn,
    experiences: experiencesEn,
    caseStudies: caseStudiesEn,
    projects: projectsEn,
    techCategories: techCategoriesEn,
  },
  es: {
    profile: profileEs,
    kpis: kpisEs,
    experiences: experiencesEs,
    caseStudies: caseStudiesEs,
    projects: projectsEs,
    techCategories: techCategoriesEs,
  },
};

export const getPortfolioContent = (locale: Locale): PortfolioContent => portfolioContent[locale];

export const getHomeCopy = (locale: Locale): HomeCopy => homeCopy[locale];
