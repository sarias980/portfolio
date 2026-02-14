export type KPI = {
  label: string;
  value: string;
};

export type CaseStudy = {
  title: string;
  summary: string;
  impact: string;
  stack: string[];
  link: string;
};

export type LeadershipPillar = {
  title: string;
  description: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  website: string;
  logoUrl: string;
  period: string;
  highlights: string[];
};

export type PersonalProject = {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
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
  summary: string;
  linkedin: string;
  email: string;
  phone: string;
};

export type TechCategory = {
  title: string;
  items: string[];
};

export type Locale = 'en' | 'es';

export type HomeCopy = {
  sections: {
    impact: string;
    contact: string;
  };
  languageLabel: string;
  darkModeLabel: string;
  lightModeLabel: string;
  roleChip: string;
  heroTitle: string;
  impactButton: string;
  linkedinButton: string;
  currentRole: string;
  trustedBy: string;
  resultsMatrix: string;
  impactTitle: string;
  deliveryModel: string;
  deliveryModelSummary: string;
  journeyLog: string;
  careerTimeline: string;
  careerTimelineSummary: string;
  currentTag: string;
  stackMatrix: string;
  coreStack: string;
  coreStackSummary: string;
  contactTitle: string;
  contactSummary: string;
  linkedinContactButton: string;
  companyWebsiteLabel: string;
};

export type PortfolioContent = {
  profile: Profile;
  kpis: KPI[];
  experiences: ExperienceItem[];
  caseStudies: CaseStudy[];
  techCategories: TechCategory[];
};

export const profile: Profile = {
  fullName: 'Sergi Arias Fernández',
  headline: 'Senior Frontend Engineer | Frontend Technical Lead | React & TypeScript Specialist',
  summary:
    'Senior Frontend Engineer with 9+ years of experience building scalable web applications and leading frontend architecture from scratch.',
  linkedin: 'https://www.linkedin.com/in/sergi-arias-fern%C3%A1ndez-ab2729148/',
  email: 'sarias980@gmail.com',
  phone: '+34 657317670',
};

export const kpis: KPI[] = [
  { label: 'Years of experience', value: '9+' },
  { label: 'Projects delivered', value: '20+' },
  { label: 'Continents impacted', value: '3' },
];

export const experiences: ExperienceItem[] = [
  {
    role: 'Frontend Technical Lead',
    company: 'Deepdots',
    website: 'https://deepdots.com',
    logoUrl: '/logos/deepdots-clean.png',
    period: 'Sep 2023 - Present',
    highlights: [
      'Led the frontend architecture from project inception in a distributed multi-repository environment.',
      'Designed and implemented scalable React + TypeScript solutions for a data-driven product processing 10k+ feedback inputs daily.',
      'Defined development methodologies, documentation standards and CI/CD workflows using GitHub Actions.',
      'Integrated frontend applications with Node.js services and BigQuery on GCP.',
      'Established Redux-based state management architecture and a testing strategy using Jest.',
      'Conducted code reviews and enforced high code quality standards across the team.',
      'Collaborated closely with Product and clients to design and deliver optimized user interfaces.',
      'Contributed to team growth from 3 to 6 engineers by defining technical standards and onboarding processes.',
    ],
  },
  {
    role: 'Senior Frontend Engineer',
    company: 'Coachendo',
    website: 'https://coachendo.com',
    logoUrl: '/logos/coachendo-clean.png',
    period: '2022 - 2023',
    highlights: [
      'Designed a complete multi-platform frontend architecture based on React.',
      'Implemented an admin web app to manage app content.',
      'Developed a chat-focused PWA with an atomic design structure.',
      'Defined auto-deploy and hosting workflows in Firebase.',
    ],
  },
  {
    role: 'Apps Technical Lead',
    company: 'UVE Solutions',
    website: 'https://uvesolutions.com',
    logoUrl: '/logos/uve-solutions-clean.png',
    period: '2021 - 2022',
    highlights: [
      'Implemented two hybrid apps for multiple platforms.',
      'Coordinated two small development teams as technical lead.',
      'Defined technical tasks and effort estimations for team execution.',
      'Collaborated in technical meetings to improve company architecture decisions.',
    ],
  },
  {
    role: 'Senior Multi Platform Developer',
    company: 'Alten',
    website: 'https://www.alten.com',
    logoUrl: '/logos/alten-clean.png',
    period: '2018 - 2021',
    highlights: [
      'Implemented two hybrid apps across multiple platforms.',
      'Defined technical tasks and estimations for team execution.',
      'Supported internal teams in app implementation and delivery.',
    ],
  },
  {
    role: 'Junior Multi Platform Developer',
    company: 'Admira Digital Networks',
    website: 'https://www.admira.com',
    logoUrl: '/logos/admira-text_green.svg',
    period: '2015 - 2018',
    highlights: [
      'Developed new web platform features and reusable components.',
      'Improved code quality and resolved product bugs.',
      'Designed custom technical solutions for clients.',
    ],
  },
];

export const personalProjects: PersonalProject[] = [
  {
    role: 'Software Engineer (Founder Team)',
    company: 'Mint5.io',
    period: '2021 - Present',
    summary:
      'Mint5 is a platform to create NFTs from Instagram posts, then sell and trade them through a simplified flow.',
    highlights: [
      'Part of the founding team as software engineer.',
      'Owned frontend implementation for web and mobile experiences.',
      'Integrated product flows with Web3 capabilities using Ionic and React.',
    ],
  },
];

// Case studies are grouped by impact area so the UI can scale when new roles are added.
export const caseStudies: CaseStudy[] = [
  {
    title: 'Architecture from Day 0 at Deepdots',
    summary:
      'Built the frontend foundation from scratch in a distributed, multi-repository environment aligned with product roadmap constraints.',
    impact:
      'Enabled predictable delivery, scalable ownership and stable growth across an expanding engineering team.',
    stack: ['React', 'TypeScript', 'Redux', 'GitHub Actions'],
    link: profile.linkedin,
  },
  {
    title: 'Data-Driven Product at Scale',
    summary:
      'Implemented interfaces and workflows for a platform that processes and visualizes 10k+ feedback inputs per day.',
    impact:
      'Improved usability and decision-making speed for high-volume data operations with robust frontend patterns.',
    stack: ['React', 'Node.js APIs', 'BigQuery', 'GCP'],
    link: profile.linkedin,
  },
  {
    title: 'Multi-Platform Delivery Across Roles',
    summary:
      'Delivered hybrid and web applications in different industries while evolving from developer to technical leadership.',
    impact:
      'Sustained delivery quality across product, architecture and team-coordination responsibilities.',
    stack: ['React', 'Angular', 'Ionic', 'React Native'],
    link: profile.linkedin,
  },
];

export const leadershipPillars: LeadershipPillar[] = [
  {
    title: 'Architecture with Product Focus',
    description:
      'I define frontend architecture around business goals so technical decisions directly support product outcomes.',
  },
  {
    title: 'Operational Excellence',
    description:
      'I build clear workflows, documentation and CI/CD pipelines so teams can ship fast without compromising quality.',
  },
  {
    title: 'Team Multiplication',
    description:
      'I mentor engineers through standards, reviews and onboarding processes that scale quality as teams grow.',
  },
];

export const education: EducationItem[] = [
  {
    period: '2016 - 2018',
    title: 'Development of Multi Platform Applications',
    institution: 'Institute Poble Nou',
    location: 'Barcelona',
  },
  {
    period: '2014 - 2016',
    title: 'Computer Systems Management in the Network',
    institution: 'Institute Puig',
    location: 'Barcelona',
  },
];

export const languages: string[] = ['Spanish', 'Catalan', 'English'];

export const techStack: string[] = [
  'React',
  'TypeScript',
  'JavaScript',
  'Angular',
  'Ionic',
  'React Native',
  'Redux',
  'Firebase',
  'Node.js',
  'BigQuery',
  'GCP',
  'GitHub Actions',
  'Jest',
  'SQL',
  'NoSQL',
  'Product Collaboration',
];

export const techCategories: TechCategory[] = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'Angular', 'Ionic', 'React Native', 'Redux'],
  },
  {
    title: 'Backend & Data',
    items: ['Node.js', 'BigQuery', 'SQL', 'NoSQL'],
  },
  {
    title: 'Cloud & Delivery',
    items: ['Firebase', 'GCP', 'GitHub Actions', 'Jest'],
  },
  {
    title: 'Collaboration',
    items: ['Product Collaboration'],
  },
  {
    title: 'Languages',
    items: languages,
  },
];

const profileEs: Profile = {
  fullName: 'Sergi Arias Fernández',
  headline: 'Ingeniero Frontend Senior | Líder Técnico Frontend | Especialista en React y TypeScript',
  summary:
    'Ingeniero Frontend senior con más de 9 años de experiencia creando aplicaciones web escalables y liderando arquitectura frontend desde cero.',
  linkedin: profile.linkedin,
  email: profile.email,
  phone: profile.phone,
};

const kpisEs: KPI[] = [
  { label: 'Años de experiencia', value: '9+' },
  { label: 'Proyectos entregados', value: '20+' },
  { label: 'Continentes impactados', value: '3' },
];

const experiencesEs: ExperienceItem[] = [
  {
    role: 'Líder Técnico Frontend',
    company: 'Deepdots',
    website: 'https://deepdots.com',
    logoUrl: '/logos/deepdots-clean.png',
    period: 'Sep 2023 - Actualidad',
    highlights: [
      'Lideré la arquitectura frontend desde el inicio del proyecto en un entorno distribuido con múltiples repositorios.',
      'Diseñé e implementé soluciones escalables con React + TypeScript para un producto data-driven que procesa más de 10k entradas de feedback al día.',
      'Definí metodologías de desarrollo, estándares de documentación y flujos CI/CD con GitHub Actions.',
      'Integré aplicaciones frontend con servicios Node.js y BigQuery en GCP.',
      'Establecí una arquitectura de estado basada en Redux y una estrategia de testing con Jest.',
      'Realicé code reviews y mantuve altos estándares de calidad en todo el equipo.',
      'Colaboré estrechamente con Producto y clientes para diseñar y entregar interfaces optimizadas.',
      'Contribuí al crecimiento del equipo de 3 a 6 ingenieros definiendo estándares técnicos y procesos de onboarding.',
    ],
  },
  {
    role: 'Ingeniero Frontend Senior',
    company: 'Coachendo',
    website: 'https://coachendo.com',
    logoUrl: '/logos/coachendo-clean.png',
    period: '2022 - 2023',
    highlights: [
      'Diseñé una arquitectura frontend completa y multiplataforma basada en React.',
      'Implementé una app web de administración para gestionar el contenido de la aplicación.',
      'Desarrollé una PWA orientada a chat con estructura de diseño atómico.',
      'Definí flujos de auto-deploy y hosting en Firebase.',
    ],
  },
  {
    role: 'Líder Técnico de Apps',
    company: 'UVE Solutions',
    website: 'https://uvesolutions.com',
    logoUrl: '/logos/uve-solutions-clean.png',
    period: '2021 - 2022',
    highlights: [
      'Implementé dos aplicaciones híbridas para múltiples plataformas.',
      'Coordiné dos equipos pequeños de desarrollo como líder técnico.',
      'Definí tareas técnicas y estimaciones de esfuerzo para la ejecución del equipo.',
      'Colaboré en reuniones técnicas para mejorar decisiones de arquitectura de la compañía.',
    ],
  },
  {
    role: 'Desarrollador Senior Multiplataforma',
    company: 'Alten',
    website: 'https://www.alten.com',
    logoUrl: '/logos/alten-clean.png',
    period: '2018 - 2021',
    highlights: [
      'Implementé dos aplicaciones híbridas en múltiples plataformas.',
      'Definí tareas técnicas y estimaciones para la ejecución del equipo.',
      'Di soporte a equipos internos en implementación y entrega de aplicaciones.',
    ],
  },
  {
    role: 'Desarrollador Junior Multiplataforma',
    company: 'Admira Digital Networks',
    website: 'https://www.admira.com',
    logoUrl: '/logos/admira-text_green.svg',
    period: '2015 - 2018',
    highlights: [
      'Desarrollé nuevas funcionalidades web y componentes reutilizables.',
      'Mejoré la calidad del código y resolví bugs de producto.',
      'Diseñé soluciones técnicas personalizadas para clientes.',
    ],
  },
];

const caseStudiesEs: CaseStudy[] = [
  {
    title: 'Arquitectura desde el día 0 en Deepdots',
    summary:
      'Construí la base frontend desde cero en un entorno distribuido y multi-repositorio, alineado con las restricciones del roadmap de producto.',
    impact:
      'Habilité una entrega predecible, ownership escalable y crecimiento estable en un equipo de ingeniería en expansión.',
    stack: ['React', 'TypeScript', 'Redux', 'GitHub Actions'],
    link: profile.linkedin,
  },
  {
    title: 'Producto data-driven a escala',
    summary:
      'Implementé interfaces y flujos para una plataforma que procesa y visualiza más de 10k entradas de feedback al día.',
    impact:
      'Mejoré la usabilidad y la velocidad de decisión en operaciones de datos de alto volumen con patrones frontend robustos.',
    stack: ['React', 'Node.js APIs', 'BigQuery', 'GCP'],
    link: profile.linkedin,
  },
  {
    title: 'Entrega multiplataforma en distintos roles',
    summary:
      'Entregué aplicaciones híbridas y web en diferentes industrias mientras evolucionaba de desarrollador a liderazgo técnico.',
    impact:
      'Mantuve la calidad de entrega en responsabilidades de producto, arquitectura y coordinación de equipos.',
    stack: ['React', 'Angular', 'Ionic', 'React Native'],
    link: profile.linkedin,
  },
];

const languagesEs: string[] = ['Español', 'Catalán', 'Inglés'];

const techCategoriesEs: TechCategory[] = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'Angular', 'Ionic', 'React Native', 'Redux'],
  },
  {
    title: 'Backend y Datos',
    items: ['Node.js', 'BigQuery', 'SQL', 'NoSQL'],
  },
  {
    title: 'Cloud y Delivery',
    items: ['Firebase', 'GCP', 'GitHub Actions', 'Jest'],
  },
  {
    title: 'Colaboración',
    items: ['Colaboración con Producto'],
  },
  {
    title: 'Idiomas',
    items: languagesEs,
  },
];

const homeCopy: Record<Locale, HomeCopy> = {
  en: {
    sections: { impact: 'Impact', contact: 'Contact' },
    languageLabel: 'Select language',
    darkModeLabel: 'Enable dark mode',
    lightModeLabel: 'Enable light mode',
    roleChip: 'Senior Frontend Engineer · Frontend Technical Lead',
    heroTitle: 'Product-focused frontend architecture',
    impactButton: 'See impact',
    linkedinButton: 'Open LinkedIn',
    currentRole: 'Current Role',
    trustedBy: 'Trusted by',
    resultsMatrix: 'Results Matrix',
    impactTitle: 'Impact',
    deliveryModel: 'Delivery Model',
    deliveryModelSummary:
      'A repeatable execution model with architecture standards, CI/CD automation and team enablement.',
    journeyLog: 'Journey Log',
    careerTimeline: 'Career Timeline',
    careerTimelineSummary: 'Architecture ownership, product delivery and team growth over time.',
    currentTag: 'Current',
    stackMatrix: 'Stack Matrix',
    coreStack: 'Core Stack',
    coreStackSummary: 'Selected technologies used repeatedly in production environments.',
    contactTitle: 'Let’s build the next high-impact product.',
    contactSummary:
      'If your team needs senior frontend leadership with execution focus, I am open to connect.',
    linkedinContactButton: 'Contact on LinkedIn',
    companyWebsiteLabel: 'Open {{company}} website',
  },
  es: {
    sections: { impact: 'Impacto', contact: 'Contacto' },
    languageLabel: 'Seleccionar idioma',
    darkModeLabel: 'Activar modo oscuro',
    lightModeLabel: 'Activar modo claro',
    roleChip: 'Ingeniero Frontend Senior · Líder Técnico Frontend',
    heroTitle: 'Arquitectura frontend orientada a producto.',
    impactButton: 'Ver impacto',
    linkedinButton: 'Abrir LinkedIn',
    currentRole: 'Rol actual',
    trustedBy: 'Han confiado en mí',
    resultsMatrix: 'Matriz de resultados',
    impactTitle: 'Impacto',
    deliveryModel: 'Modelo de entrega',
    deliveryModelSummary:
      'Un modelo de ejecución repetible con estándares de arquitectura, automatización CI/CD y habilitación del equipo.',
    journeyLog: 'Recorrido profesional',
    careerTimeline: 'Timeline profesional',
    careerTimelineSummary: 'Ownership de arquitectura, entrega de producto y crecimiento del equipo en el tiempo.',
    currentTag: 'Actual',
    stackMatrix: 'Matriz tecnológica',
    coreStack: 'Stack principal',
    coreStackSummary: 'Tecnologías seleccionadas usadas de forma recurrente en entornos de producción.',
    contactTitle: 'Construyamos el próximo producto de alto impacto.',
    contactSummary:
      'Si tu equipo necesita liderazgo frontend senior con foco en ejecución, estaré encantado de conectar.',
    linkedinContactButton: 'Contactar por LinkedIn',
    companyWebsiteLabel: 'Abrir web de {{company}}',
  },
};

const portfolioContent: Record<Locale, PortfolioContent> = {
  en: {
    profile,
    kpis,
    experiences,
    caseStudies,
    techCategories,
  },
  es: {
    profile: profileEs,
    kpis: kpisEs,
    experiences: experiencesEs,
    caseStudies: caseStudiesEs,
    techCategories: techCategoriesEs,
  },
};

export const getPortfolioContent = (locale: Locale): PortfolioContent => portfolioContent[locale];

export const getHomeCopy = (locale: Locale): HomeCopy => homeCopy[locale];
