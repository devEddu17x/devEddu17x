export type PortfolioLanguage = "en" | "es"

type Project = {
  name: string
  status: string
  duration: string
  description: string
  impact: string[]
  frontend: string[]
  backend: string[]
  cloud: string[]
  demo: string
  repos: { label: string; href: string }[]
  imagePath: string
  imageAlt: string
}

export type PortfolioContent = {
  nav: { projects: string; skills: string; about: string; contact: string }
  hero: {
    eyebrow: string
    greeting: string
    title: string
    description: string
    contact: string
    cv: string
    cvUrl: string
    cvFilename: string
    basedIn: string
  }
  proof: { value: string; label: string }[]
  projects: { eyebrow: string; title: string; intro: string; live: string; source: string; demo: string; mediaHint: string; stack: { frontend: string; backend: string; cloud: string }; items: Project[] }
  skills: { eyebrow: string; title: string; intro: string; items: { title: string; description: string; technologies: string[] }[] }
  about: { eyebrow: string; title: string; lead: string; paragraphs: string[]; educationLabel: string; education: string; languageLabel: string; language: string }
  contact: { eyebrow: string; title: string; intro: string; emailLabel: string; name: string; email: string; subject: string; message: string; send: string; direct: string; formNote: string }
  footer: string
}

const commonProjects = {
  telar: {
    name: "Telar",
    status: "Live · Client project",
    duration: "1 year",
    demo: "https://telar-app.eddux.dev/",
    repos: [
      { label: "Frontend", href: "https://github.com/devEddu17x/telar-front" },
      { label: "API", href: "https://github.com/devEddu17x/telar-backend-api" },
      { label: "Infrastructure", href: "https://github.com/devEddu17x/telar-infrastructure" },
    ],
    imagePath: "/projects/telar-banner.webp",
    imageAlt: "Telar system interface",
  },
  meetone: {
    name: "MeetOne",
    status: "Live · Startup",
    duration: "3 months",
    demo: "https://meetone.eddux.dev/",
    repos: [
      { label: "Frontend", href: "https://github.com/devEddu17x/meet-one-frontend" },
      { label: "Backend & infrastructure", href: "https://github.com/devEddu17x/meet-one-infrastructure" },
    ],
    imagePath: "/projects/meetone-banner.webp",
    imageAlt: "MeetOne video call interface",
  },
}

export const portfolioContent: Record<PortfolioLanguage, PortfolioContent> = {
  en: {
    nav: { projects: "Projects", skills: "Technical edge", about: "About", contact: "Contact" },
    hero: {
      eyebrow: "BACKEND & CLOUD ENGINEER",
      greeting: "Hi, I'm",
      title: "Eddu.",
      description: "I build production backend systems and cloud infrastructure that are secure, scalable, and built to last.",
      contact: "Contact me",
      cv: "View CV",
      cvUrl: "https://cdn.edducode.me/CV-En.pdf",
      cvFilename: "Eddu-CV-EN.pdf",
      basedIn: "Based in Peru · English B2",
    },
    proof: [
      { value: "4+", label: "years building software" },
      { value: "4K+", label: "GitHub contributions" },
      { value: "02", label: "live products" },
    ],
    projects: {
      eyebrow: "SELECTED WORK",
      title: "Real products. End-to-end ownership.",
      intro: "From a client-facing production system to a real-time startup, I own the work across application code, cloud architecture, delivery, and operations.",
      live: "Open live product",
      source: "Source",
      demo: "Live",
      mediaHint: "Add a product banner or system screenshot at",
      stack: { frontend: "Frontend", backend: "Backend", cloud: "Cloud & infrastructure" },
      items: [
        {
          ...commonProjects.telar,
          description: "Administrative platform for a garment manufacturer: employees, customers, garments, quotations, and production orders.",
          impact: ["Built primarily solo for a formal client", "Highly available Fargate/ECS deployment across two Availability Zones", "Secure delivery pipeline with GitHub OIDC, CI/CD, WAF, and managed secrets"],
          frontend: ["Next.js", "React", "TypeScript", "Tailwind"],
          backend: ["NestJS", "PostgreSQL", "TypeORM", "Cognito", "Swagger"],
          cloud: ["AWS ECS/Fargate", "RDS", "ALB", "S3 + CloudFront", "Terraform", "Cloudflare"],
        },
        {
          ...commonProjects.meetone,
          description: "Real-time language exchange platform that matches people for browser-based audio and video practice.",
          impact: ["P2P WebRTC calls with WebSocket signaling and matchmaking", "Serverless control plane built around Lambda, API Gateway, Cognito, and DynamoDB", "Avoided operating a private TURN server by using managed Cloudflare Calls relay"],
          frontend: ["Vue 3", "Vite", "Pinia", "AWS Amplify"],
          backend: ["Node.js Lambdas", "WebSockets", "WebRTC", "Matchmaking"],
          cloud: ["AWS Lambda", "API Gateway", "DynamoDB", "Cognito", "Terraform", "Cloudflare Calls"],
        },
      ],
    },
    skills: {
      eyebrow: "TECHNICAL EDGE",
      title: "Backend first. Cloud by design.",
      intro: "The areas where I do my best work: building reliable services, defining infrastructure as code, and making production delivery repeatable.",
      items: [
        { title: "Backend systems", description: "APIs, authentication, real-time communication, service boundaries, and documentation.", technologies: ["TypeScript", "Node.js", "NestJS", "REST", "OpenAPI", "WebSockets", "WebRTC"] },
        { title: "Cloud & IaC", description: "AWS and Cloudflare architectures designed for security, availability, scale, and cost awareness.", technologies: ["AWS", "Terraform / HCL", "ECS", "Lambda", "API Gateway", "Cloudflare", "IAM"] },
        { title: "Data & platforms", description: "Relational and NoSQL persistence, containers, Linux systems, automation, and observability.", technologies: ["PostgreSQL", "MySQL", "DynamoDB", "Docker", "Linux", "GitHub Actions", "Grafana"] },
        { title: "Distributed exploration", description: "Hands-on work with event processing, distributed computation, and computer vision pipelines.", technologies: ["Kafka", "Apache Spark", "PySpark", "CNN", "Cloudflare R2", "Socket.IO"] },
      ],
    },
    about: {
      eyebrow: "ABOUT",
      title: "I care about what happens after the code ships.",
      lead: "My core is backend and cloud. DevOps is the capability that lets me take responsibility for the whole path to production.",
      paragraphs: [
        "I build APIs and systems with the operational side in mind: identity, networking, secrets, delivery pipelines, observability, and recovery are part of the design—not an afterthought.",
        "I have spent years working with Docker and Linux, and now work confidently across AWS, Cloudflare, and Terraform. That makes it possible to move from a product requirement to a deployable, maintained service without losing sight of the backend.",
      ],
      educationLabel: "Professional education",
      education: "Systems Engineering & Artificial Intelligence",
      languageLabel: "Languages",
      language: "Spanish (native) · English (B2)",
    },
    contact: {
      eyebrow: "LET'S BUILD",
      title: "Have a backend or cloud challenge?",
      intro: "Tell me what you are building. I will get back to you at contact@eddux.dev.",
      emailLabel: "Direct email",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Open email draft",
      direct: "Or write directly",
      formNote: "The form opens your email client with the message prepared.",
    },
    footer: "Backend & Cloud Engineer · Peru",
  },
  es: {
    nav: { projects: "Proyectos", skills: "Fortalezas técnicas", about: "Sobre mí", contact: "Contacto" },
    hero: {
      eyebrow: "BACKEND & CLOUD ENGINEER",
      greeting: "Hola, soy",
      title: "Eddu.",
      description: "Construyo sistemas backend e infraestructura cloud de producción, seguros, escalables y pensados para durar.",
      contact: "Contáctame",
      cv: "Ver CV",
      cvUrl: "https://cdn.edducode.me/CV-ES.pdf",
      cvFilename: "Eddu-CV-ES.pdf",
      basedIn: "Desde Perú · Inglés B2",
    },
    proof: [
      { value: "4+", label: "años desarrollando software" },
      { value: "4K+", label: "contribuciones en GitHub" },
      { value: "02", label: "productos en producción" },
    ],
    projects: {
      eyebrow: "TRABAJO DESTACADO",
      title: "Productos reales. Responsabilidad de punta a punta.",
      intro: "Desde un sistema de producción para un cliente hasta una startup en tiempo real, asumo aplicación, arquitectura cloud, entrega y operación.",
      live: "Abrir producto",
      source: "Código",
      demo: "En vivo",
      mediaHint: "Agrega un banner o captura del sistema en",
      stack: { frontend: "Frontend", backend: "Backend", cloud: "Cloud e infraestructura" },
      items: [
        {
          ...commonProjects.telar,
          status: "En producción · Proyecto para cliente",
          duration: "1 año",
          imageAlt: "Interfaz del sistema Telar",
          description: "Plataforma administrativa para una empresa de confección: empleados, clientes, prendas, cotizaciones y órdenes de producción.",
          impact: ["Desarrollado principalmente de forma individual para un cliente formal", "Despliegue altamente disponible en Fargate/ECS sobre dos Availability Zones", "Pipeline de entrega seguro con GitHub OIDC, CI/CD, WAF y secretos gestionados"],
          frontend: ["Next.js", "React", "TypeScript", "Tailwind"],
          backend: ["NestJS", "PostgreSQL", "TypeORM", "Cognito", "Swagger"],
          cloud: ["AWS ECS/Fargate", "RDS", "ALB", "S3 + CloudFront", "Terraform", "Cloudflare"],
        },
        {
          ...commonProjects.meetone,
          status: "En producción · Startup",
          duration: "3 meses",
          imageAlt: "Interfaz de videollamada MeetOne",
          description: "Plataforma de intercambio de idiomas que empareja personas para practicar con audio y video directamente desde el navegador.",
          impact: ["Llamadas P2P con WebRTC, señalización WebSocket y matchmaking", "Plano de control serverless con Lambda, API Gateway, Cognito y DynamoDB", "Evita operar un TURN propio mediante relay gestionado de Cloudflare Calls"],
          frontend: ["Vue 3", "Vite", "Pinia", "AWS Amplify"],
          backend: ["Lambdas Node.js", "WebSockets", "WebRTC", "Matchmaking"],
          cloud: ["AWS Lambda", "API Gateway", "DynamoDB", "Cognito", "Terraform", "Cloudflare Calls"],
        },
      ],
    },
    skills: {
      eyebrow: "FORTALEZAS TÉCNICAS",
      title: "Backend primero. Cloud por diseño.",
      intro: "Las áreas donde aporto más valor: servicios confiables, infraestructura como código y una entrega a producción repetible.",
      items: [
        { title: "Sistemas backend", description: "APIs, autenticación, comunicación en tiempo real, límites de servicio y documentación.", technologies: ["TypeScript", "Node.js", "NestJS", "REST", "OpenAPI", "WebSockets", "WebRTC"] },
        { title: "Cloud e IaC", description: "Arquitecturas AWS y Cloudflare pensadas para seguridad, disponibilidad, escalabilidad y costos.", technologies: ["AWS", "Terraform / HCL", "ECS", "Lambda", "API Gateway", "Cloudflare", "IAM"] },
        { title: "Datos y plataformas", description: "Persistencia SQL y NoSQL, contenedores, sistemas Linux, automatización y observabilidad.", technologies: ["PostgreSQL", "MySQL", "DynamoDB", "Docker", "Linux", "GitHub Actions", "Grafana"] },
        { title: "Exploración distribuida", description: "Trabajo práctico con eventos, cómputo distribuido y pipelines de visión por computador.", technologies: ["Kafka", "Apache Spark", "PySpark", "CNN", "Cloudflare R2", "Socket.IO"] },
      ],
    },
    about: {
      eyebrow: "SOBRE MÍ",
      title: "Me importa lo que pasa después de desplegar el código.",
      lead: "Mi núcleo es backend y cloud. DevOps es la capacidad que me permite hacerme responsable de todo el camino a producción.",
      paragraphs: [
        "Construyo APIs y sistemas considerando su operación: identidad, red, secretos, pipelines de entrega, observabilidad y recuperación forman parte del diseño, no llegan al final.",
        "Llevo años trabajando con Docker y Linux, y actualmente me muevo con soltura entre AWS, Cloudflare y Terraform. Eso me permite convertir una necesidad de producto en un servicio desplegable y mantenible sin perder de vista el backend.",
      ],
      educationLabel: "Formación profesional",
      education: "Ingeniería de Sistemas e Inteligencia Artificial",
      languageLabel: "Idiomas",
      language: "Español (nativo) · Inglés (B2)",
    },
    contact: {
      eyebrow: "CONSTRUYAMOS",
      title: "¿Tienes un reto de backend o cloud?",
      intro: "Cuéntame qué estás construyendo. Te responderé en contact@eddux.dev.",
      emailLabel: "Correo directo",
      name: "Nombre",
      email: "Correo",
      subject: "Asunto",
      message: "Mensaje",
      send: "Abrir borrador de correo",
      direct: "O escríbeme directamente",
      formNote: "El formulario abre tu cliente de correo con el mensaje preparado.",
    },
    footer: "Backend & Cloud Engineer · Perú",
  },
}
