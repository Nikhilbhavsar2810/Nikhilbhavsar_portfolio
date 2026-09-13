export interface WorkflowStep {
  label: string;
  description: string;
  icon: string;
}

export const workflowSteps: WorkflowStep[] = [
  { label: "Idea", description: "Understanding requirements and project goals", icon: "lightbulb" },
  { label: "Architecture", description: "System design and technology decisions", icon: "git-branch" },
  { label: "Frontend", description: "Building responsive user interfaces", icon: "layout" },
  { label: "Backend", description: "Developing APIs and server logic", icon: "server" },
  { label: "Database", description: "Data modeling and storage solutions", icon: "database" },
  { label: "Integration", description: "Connecting systems and services", icon: "link" },
  { label: "Testing", description: "Quality assurance and bug fixing", icon: "check-circle" },
  { label: "Deployment", description: "Production release and monitoring", icon: "rocket" },
];
