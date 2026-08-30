import { experience } from "@/data/experience";
import { Reveal } from "@/components/ui/Reveal";
export function Experience() { return <section className="section experience"><Reveal><p className="eyebrow">03 / Experience</p></Reveal>{experience.map((item) => <Reveal key={item.company}><article className="role"><p>{item.period}</p><div><h2>{item.role}<br /><em>{item.company}</em></h2><p>{item.description}</p></div></article></Reveal>)}</section>; }
