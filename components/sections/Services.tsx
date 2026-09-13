"use client";

import { services } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";
import {
  Layers,
  Briefcase,
  Server,
  Monitor,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  layers: <Layers size={22} />,
  briefcase: <Briefcase size={22} />,
  server: <Server size={22} />,
  monitor: <Monitor size={22} />,
};

export function Services() {
  return (
    <section className="section" id="services">
      <Reveal>
        <p className="eyebrow">What I Do</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="section-heading" style={{ marginTop: 24 }}>
          End-to-end{" "}
          <span className="gradient-text">capabilities.</span>
        </h2>
      </Reveal>

      <div className="services-grid">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={0.15 + i * 0.08}>
            <div className="service-card">
              <div className="service-icon">
                {iconMap[service.icon] || null}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
