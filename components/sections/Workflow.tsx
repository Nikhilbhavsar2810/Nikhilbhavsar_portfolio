"use client";

import { workflowSteps } from "@/data/workflow";
import { Reveal } from "@/components/ui/Reveal";
import {
  Lightbulb,
  GitBranch,
  Layout,
  Server,
  Database,
  Link,
  CheckCircle,
  Rocket,
  ChevronRight,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  lightbulb: <Lightbulb size={18} />,
  "git-branch": <GitBranch size={18} />,
  layout: <Layout size={18} />,
  server: <Server size={18} />,
  database: <Database size={18} />,
  link: <Link size={18} />,
  "check-circle": <CheckCircle size={18} />,
  rocket: <Rocket size={18} />,
};

export function Workflow() {
  return (
    <section className="section section-alt" id="workflow">
      <Reveal>
        <p className="eyebrow">Process</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="section-heading" style={{ marginTop: 24 }}>
          How I{" "}
          <span className="gradient-text">build.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="workflow-track">
          {workflowSteps.map((step, i) => (
            <div key={step.label} className="workflow-step">
              <div className="workflow-step-number">
                0{i + 1}
              </div>
              <div className="workflow-step-icon">
                {iconMap[step.icon] || null}
              </div>
              <h4>{step.label}</h4>
              <p>{step.description}</p>
              {i < workflowSteps.length - 1 && (
                <span className="workflow-arrow">
                  <ChevronRight size={14} />
                </span>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
