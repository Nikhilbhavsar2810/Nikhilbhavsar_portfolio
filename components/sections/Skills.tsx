import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/ui/Reveal";
export function Skills() {
  return (
    <section className="section skills">
      <Reveal>
        <p className="eyebrow">02 / Capabilities</p>
      </Reveal>
      <div className="skill-grid">
        {skillGroups.map((group, index) => (
          <Reveal key={group.label} delay={index * 0.1}>
            <article className="skill-group">
              <span>0{index + 1}</span>
              <h3>{group.label}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
