export interface SkillGroup {
  label: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    icon: "layout",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Ant Design", "Redux Toolkit"],
  },
  {
    label: "Backend",
    icon: "server",
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "Authorization", "API Architecture"],
  },
  {
    label: "Database",
    icon: "database",
    skills: ["MongoDB", "SQL"],
  },
  {
    label: "Tools",
    icon: "wrench",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Swagger", "Vercel"],
  },
];
