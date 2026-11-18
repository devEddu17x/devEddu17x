export type PortfolioLanguage = "en" | "es";

type Project = {
  name: string;
  status: string;
  duration: string;
  description: string;
  impact: string[];
  frontend: string[];
  backend: string[];
  cloud: string[];
  demo: string;
  repos: { label: string; href: string }[];
  imagePath: string;
  imageAlt: string;
};

type CertificationItem = {
  title: string;
  issuer: string;
  period: string;
  badgePath: string;
  badgeAlt: string;
  verifyUrl: string;
};

export type PortfolioContent = {
  nav: {
    projects: string;
    about: string;
    education: string;
    skills: string;
    contact: string;
  };
  hero: {
    role: string;
    greeting: string;
    title: string;
    description: string;
    contact: string;
    cv: string;
    cvUrl: string;
    cvFilename: string;
  };
  proof: { value: string; label: string }[];
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    live: string;
    source: string;
    demo: string;
    mediaHint: string;
    stackLabel: string;
    stack: { frontend: string; backend: string; cloud: string };
    items: Project[];
  };
  skills: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; description: string; technologies: string[] }[];
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    paragraphs: string[];
  };
  education: {
    eyebrow: string;
    academicTitle: string;
    degree: string;
    institution: string;
    institutionUrl: string;
    languageLabel: string;
    language: string;
    certificationsTitle: string;
    verifyLabel: string;
    certifications: CertificationItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    emailLabel: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    direct: string;
    formNote: string;
  };
  notFound: {
    eyebrow: string;
    title: string;
    description: string;
    backHome: string;
    viewProjects: string;
    terminalError: string;
  };
  footer: string;
};

const commonProjects = {
  telar: {
    name: "Telar",
    status: "Live · Client project",
    duration: "1 year ago",
    demo: "https://telar-app.eddux.dev/",
    repos: [
      { label: "Frontend", href: "https://github.com/devEddu17x/telar-front" },
      { label: "API", href: "https://github.com/devEddu17x/telar-backend-api" },
      {
        label: "Infrastructure",
        href: "https://github.com/devEddu17x/telar-infrastructure",
      },
    ],
    imagePath: "/projects/telar-banner.webp",
    imageAlt: "Telar system interface",
  },
  meetone: {
    name: "MeetOne",
    status: "Live · Startup",
    duration: "3 months ago",
    demo: "https://meetone.eddux.dev/",
    repos: [
      {
        label: "Frontend",
        href: "https://github.com/devEddu17x/meet-one-frontend",
      },
      {
        label: "Backend & infrastructure",
        href: "https://github.com/devEddu17x/meet-one-infrastructure",
      },
    ],
    imagePath: "/projects/meetone-banner.webp",
    imageAlt: "MeetOne video call interface",
  },
};

const cvBaseUrl = `${process.env.NEXT_PUBLIC_CV_BASE_URL}`.replace(/\/+$/, "");

export const portfolioContent: Record<PortfolioLanguage, PortfolioContent> = {
  en: {
    nav: {
      projects: "Projects",
      about: "About",
      education: "Education",
      skills: "Technical edge",
      contact: "Contact",
    },
    hero: {
      role: "AWS Solutions Architect & Cloud Engineer",
      greeting: "Hi, I'm",
      title: "Eddu.",
      description:
        "I design scalable, resilient, and secure AWS cloud architectures.",
      contact: "Contact me",
      cv: "Download CV",
      cvUrl: `${cvBaseUrl}/MAMANI_AZABACHE_EDUARDO_JAVIER_CV-en.pdf`,
      cvFilename: "Eddu-CV-EN.pdf",
    },
    proof: [
      { value: "4+", label: "years building software" },
      { value: "4K+", label: "GitHub contributions" },
      { value: "02", label: "product owner" },
    ],
    projects: {
      eyebrow: "SELECTED WORK",
      title: "Real products. End-to-end ownership.",
      intro:
        "From a client-facing production system to a real-time startup, I own the work across application code, cloud architecture, delivery, and operations.",
      live: "Open live product",
      source: "Source",
      demo: "Live",
      mediaHint: "Add a product banner or system screenshot at",
      stackLabel: "Tech stack & architecture",
      stack: {
        frontend: "Frontend",
        backend: "Backend",
        cloud: "Cloud & infrastructure",
      },
      items: [
        {
          ...commonProjects.telar,
          description:
            "Administrative platform for a garment manufacturer: employees, customers, garments, quotations, and production orders.",
          impact: [
            "Highly available Fargate/ECS deployment across two Availability Zones",
            "Secure delivery pipeline with GitHub OIDC, CI/CD, WAF, and managed secrets",
          ],
          frontend: ["Next.js", "React", "TypeScript", "Tailwind"],
          backend: ["NestJS", "PostgreSQL", "TypeORM", "Cognito", "Swagger"],
          cloud: [
            "AWS",
            "ECS/Fargate",
            "Aurora (PostgreSQL)",
            "ALB",
            "S3 + CloudFront",
            "Terraform",
            "Cloudflare",
          ],
        },
        {
          ...commonProjects.meetone,
          description:
            "Real-time language exchange platform that matches people for browser-based audio and video practice.",
          impact: [
            "Serverless with WebRTC P2P calls, WebSocket signaling, and matchmaking",
            "Cloudflare Calls integration as P2P fallback",
          ],
          frontend: ["Vue 3", "Vite", "Pinia", "AWS Amplify"],
          backend: ["Node.js Lambdas", "WebSockets", "WebRTC", "Matchmaking"],
          cloud: [
            "AWS Lambda",
            "API Gateway",
            "DynamoDB",
            "Cognito",
            "Terraform",
            "Cloudflare Calls",
          ],
        },
      ],
    },
    skills: {
      eyebrow: "TECHNICAL EDGE",
      title: "Core Stack & Domains",
      intro:
        "Designing solutions across the AWS ecosystem — from compute, networking, and IAM to messaging, data, and observability.",
      items: [
        {
          title: "Cloud & Architecture",
          description:
            "AWS and Cloudflare architectures designed for security, scalability, and fault tolerance, defined as code.",
          technologies: [
            "AWS",
            "Terraform",
            "Cloudflare",
            "ECS",
            "Lambda",
            "API Gateway",
          ],
        },
        {
          title: "DevOps & Observability",
          description:
            "Containers, continuous integration automation, secure environment deployments, and monitoring.",
          technologies: [
            "Docker",
            "Linux",
            "GitHub Actions",
            "OIDC",
            "CloudWatch",
            "Grafana",
          ],
        },
        {
          title: "Backend & APIs",
          description:
            "Business logic, authentication, real-time communication, and service boundaries.",
          technologies: [
            "TypeScript",
            "Node.js",
            "NestJS",
            "REST",
            "OpenAPI",
            "WebSockets",
            "WebRTC",
          ],
        },
        {
          title: "Data & Messaging",
          description:
            "Relational persistence, NoSQL, message queues, event streams, and distributed data processing.",
          technologies: [
            "PostgreSQL",
            "DynamoDB",
            "Amazon SQS",
            "S3",
            "Kafka",
            "Apache Spark",
            "Cloudflare R2",
          ],
        },
      ],
    },
    about: {
      eyebrow: "ABOUT",
      title: "Architecture with production accountability.",
      lead: "I design AWS cloud systems from end to end: from infrastructure architecture and security to stable operations.",
      paragraphs: [
        "My focus is designing resilient, cost-efficient AWS architectures defined in Terraform, treating infrastructure, automation, and security as part of a single engineering flow.",
        "I also build production APIs and services in Node.js and TypeScript, keeping cloud architecture aligned with the real needs of the application layer.",
      ],
    },
    education: {
      eyebrow: "EDUCATION",
      academicTitle: "Professional education",
      degree: "Systems Engineering & Artificial Intelligence",
      institution: "Universidad Privada Antenor Orrego",
      institutionUrl: "https://upao.edu.pe/",
      languageLabel: "Languages",
      language: "Spanish (native) · English (B2)",
      certificationsTitle: "Certifications",
      verifyLabel: "Verify on Credly",
      certifications: [
        {
          title: "AWS Certified Solutions Architect – Associate",
          issuer: "Amazon Web Services (AWS)",
          period: "Nov 2026 – Nov 2029",
          badgePath: "/badges/aws-certified-solutions-architect-associate.png",
          badgeAlt: "AWS Certified Solutions Architect – Associate badge",
          verifyUrl:
            "https://www.credly.com/badges/6f6b779e-b8da-4b26-bc39-ec74ec1ea7d7/public_url",
        },
      ],
    },
    contact: {
      eyebrow: "LET'S BUILD",
      title: "Have a cloud or backend challenge?",
      intro:
        "Tell me what you are building. I will get back to you at contact@eddux.dev.",
      emailLabel: "Direct email",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send message",
      sending: "Sending...",
      success: "Message sent successfully! I will reply as soon as possible.",
      error:
        "Could not send message. Please try again or write directly to contact@eddux.dev",
      direct: "Or write directly",
      formNote: "Your message will be sent instantly.",
    },
    notFound: {
      eyebrow: "HTTP 404 // ROUTE_EXCEPTION",
      title: "Not found.",
      description: "The requested route does not exist.",
      backHome: "Return to Home",
      viewProjects: "View Selected Work",
      terminalError:
        "ERR_404_NOT_FOUND: Resource URI unresolved on eddux website.",
    },
    footer: "AWS Solutions Architect & Cloud Engineer · Perú",
  },
  es: {
    nav: {
      projects: "Proyectos",
      about: "Sobre mí",
      education: "Educación",
      skills: "Fortalezas técnicas",
      contact: "Contacto",
    },
    hero: {
      role: "AWS Solutions Architect & Cloud Engineer",
      greeting: "Hola, soy",
      title: "Eddu.",
      description:
        "Diseño arquitecturas cloud en AWS escalables, resilientes y seguras.",
      contact: "Contáctame",
      cv: "Descargar CV",
      cvUrl: `${cvBaseUrl}/MAMANI_AZABACHE_EDUARDO_JAVIER_CV-es.pdf`,
      cvFilename: "Eddu-CV-ES.pdf",
    },
    proof: [
      { value: "4+", label: "años desarrollando software" },
      { value: "4K+", label: "contribuciones en GitHub" },
      { value: "02", label: "productos en producción" },
    ],
    projects: {
      eyebrow: "TRABAJO DESTACADO",
      title: "Productos reales. Responsabilidad técnica total.",
      intro:
        "Desde un sistema de producción para un cliente hasta una startup en tiempo real, asumo aplicación, arquitectura cloud, entrega y operación.",
      live: "Abrir producto",
      source: "Código",
      demo: "En vivo",
      mediaHint: "Agrega un banner o captura del sistema en",
      stackLabel: "Stack y arquitectura",
      stack: {
        frontend: "Frontend",
        backend: "Backend",
        cloud: "Cloud e infraestructura",
      },
      items: [
        {
          ...commonProjects.telar,
          status: "En producción · Proyecto para cliente",
          duration: "hace 1 año",
          imageAlt: "Interfaz del sistema Telar",
          description:
            "Plataforma administrativa para una empresa de confección: empleados, clientes, prendas, cotizaciones y órdenes de producción.",
          impact: [
            "Despliegue altamente disponible en Fargate/ECS sobre dos Availability Zones",
            "Pipeline de entrega seguro con GitHub OIDC, CI/CD, WAF y secretos gestionados",
          ],
          frontend: ["Next.js", "React", "TypeScript", "Tailwind"],
          backend: ["NestJS", "PostgreSQL", "TypeORM", "Cognito", "Swagger"],
          cloud: [
            "AWS",
            "ECS/Fargate",
            "Aurora (PostgreSQL)",
            "ALB",
            "S3 + CloudFront",
            "Terraform",
            "Cloudflare",
          ],
        },
        {
          ...commonProjects.meetone,
          status: "En producción · Startup",
          duration: "hace 3 meses",
          imageAlt: "Interfaz de videollamada MeetOne",
          description:
            "Plataforma de intercambio de idiomas que empareja personas para practicar con audio y video directamente desde el navegador.",
          impact: [
            "Serverless con llamadas P2P con WebRTC, WebSocket y matchmaking",
            "Integración de Cloudflare Calls como fallback de P2P",
          ],
          frontend: ["Vue 3", "Vite", "Pinia", "AWS Amplify"],
          backend: ["Lambdas Node.js", "WebSockets", "WebRTC", "Matchmaking"],
          cloud: [
            "AWS Lambda",
            "API Gateway",
            "DynamoDB",
            "Cognito",
            "Terraform",
            "Cloudflare Calls",
          ],
        },
      ],
    },
    skills: {
      eyebrow: "FORTALEZAS TÉCNICAS",
      title: "Stack principal y dominios",
      intro:
        "Diseño soluciones sobre el ecosistema completo de AWS — desde cómputo, redes e IAM hasta mensajería, datos y observabilidad.",
      items: [
        {
          title: "Cloud & Architecture",
          description:
            "Arquitecturas en AWS y Cloudflare diseñadas para seguridad, escalabilidad y tolerancia a fallos, definidas como código.",
          technologies: [
            "AWS",
            "Terraform",
            "Cloudflare",
            "ECS",
            "Lambda",
            "API Gateway",
          ],
        },
        {
          title: "DevOps & Observability",
          description:
            "Contenedores, automatización de integración continua, despliegues seguros por entornos y monitorización.",
          technologies: [
            "Docker",
            "Linux",
            "GitHub Actions",
            "OIDC",
            "CloudWatch",
            "Grafana",
          ],
        },
        {
          title: "Backend & APIs",
          description:
            "Lógica de negocio, autenticación, comunicación en tiempo real y límites de servicio.",
          technologies: [
            "TypeScript",
            "Node.js",
            "NestJS",
            "REST",
            "OpenAPI",
            "WebSockets",
            "WebRTC",
          ],
        },
        {
          title: "Data & Messaging",
          description:
            "Persistencia relacional, NoSQL, colas de mensajes, flujos de eventos y procesamiento distribuido.",
          technologies: [
            "PostgreSQL",
            "DynamoDB",
            "Amazon SQS",
            "S3",
            "Kafka",
            "Apache Spark",
            "Cloudflare R2",
          ],
        },
      ],
    },
    about: {
      eyebrow: "SOBRE MÍ",
      title: "Arquitectura pensada para operar en producción.",
      lead: "Diseño sistemas en AWS de extremo a extremo: desde la arquitectura de infraestructura y seguridad hasta su operación estable.",
      paragraphs: [
        "Mi enfoque está centrado en diseñar arquitecturas en AWS resilientes y eficientes en costos mediante Terraform, integrando infraestructura, automatización y seguridad en un mismo flujo.",
        "También desarrollo APIs y servicios en Node.js y TypeScript, alineando la arquitectura cloud con el comportamiento real de la aplicación.",
      ],
    },
    education: {
      eyebrow: "EDUCACIÓN",
      academicTitle: "Formación profesional",
      degree: "Ingeniería de Sistemas e Inteligencia Artificial",
      institution: "Universidad Privada Antenor Orrego",
      institutionUrl: "https://upao.edu.pe/",
      languageLabel: "Idiomas",
      language: "Español (nativo) · Inglés (B2)",
      certificationsTitle: "Certificaciones",
      verifyLabel: "Verificar en Credly",
      certifications: [
        {
          title: "AWS Certified Solutions Architect – Associate",
          issuer: "Amazon Web Services (AWS)",
          period: "Nov 2026 – Nov 2029",
          badgePath: "/badges/aws-certified-solutions-architect-associate.png",
          badgeAlt: "Insignia AWS Certified Solutions Architect – Associate",
          verifyUrl:
            "https://www.credly.com/badges/6f6b779e-b8da-4b26-bc39-ec74ec1ea7d7/public_url",
        },
      ],
    },
    contact: {
      eyebrow: "CONSTRUYAMOS",
      title: "¿Tienes un reto cloud o de backend?",
      intro:
        "Cuéntame qué estás construyendo. Te responderé en contact@eddux.dev.",
      emailLabel: "Correo directo",
      name: "Nombre",
      email: "Correo",
      subject: "Asunto",
      message: "Mensaje",
      send: "Enviar mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado con éxito! Te responderé lo antes posible.",
      error:
        "No se pudo enviar el mensaje. Intenta de nuevo o escribe a contact@eddux.dev",
      direct: "O escríbeme directamente",
      formNote: "Tu mensaje me llegará inmediatamente.",
    },
    notFound: {
      eyebrow: "HTTP 404 // RUTA_NO_ENCONTRADA",
      title: "Endpoint no encontrado.",
      description: "La ruta solicitada no existe.",
      backHome: "Volver al Inicio",
      viewProjects: "Ver Trabajo Destacado",
      terminalError:
        "ERR_404_NOT_FOUND: Ruta URI no resuelta en eddux website.",
    },
    footer: "AWS Solutions Architect & Cloud Engineer · Perú",
  },
};
