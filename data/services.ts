export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "Full-Stack Development",
    description: "Building complete web applications from frontend interfaces to backend APIs and databases.",
    icon: "layers",
  },
  {
    title: "Business Applications",
    description: "Developing ERP, CRM, accounting, POS and administrative systems around real business workflows.",
    icon: "briefcase",
  },
  {
    title: "Backend & APIs",
    description: "Designing REST APIs, authentication, authorization, database models and business logic.",
    icon: "server",
  },
  {
    title: "Modern Web Experiences",
    description: "Creating responsive, accessible and interactive interfaces using React, Next.js and modern UI technologies.",
    icon: "monitor",
  },
];
