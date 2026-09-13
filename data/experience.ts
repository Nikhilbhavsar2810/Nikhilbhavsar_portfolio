export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    period: "Current",
    role: "Software Developer",
    company: "ABSS",
    description:
      "Building and contributing to MERN-stack web applications — translating business requirements into production-ready interfaces, APIs, and business logic across multiple enterprise products.",
    highlights: [
      "Full-stack development across CRM, accounting, e-commerce, and POS platforms",
      "Building REST APIs, authentication systems, and database models",
      "Developing responsive interfaces with React, TypeScript, and Ant Design",
      "Working with Redux Toolkit for complex application state management",
      "Implementing role-based access control and business workflow logic",
    ],
  },
];
