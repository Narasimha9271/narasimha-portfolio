const groups = [
  { label: "Backend & messaging", skills: ["Java", "Spring Boot", "REST APIs", "Apache Kafka", "PL/SQL", "Node.js", "Express"] },
  { label: "Databases & tools", skills: ["MySQL", "PostgreSQL", "MongoDB", "Git", "Docker", "IntelliJ IDEA", "Eclipse"] },
  { label: "Frontend & AI applications", skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML / CSS", "Tailwind CSS", "Python", "FastAPI", "OpenAI API"] },
  { label: "Computer science", skills: ["Data structures & algorithms", "Object-oriented programming", "DBMS", "Operating systems", "Computer networks", "System design", "C / C++"] }
];

export function Skills() {
  return <section id="Skills" className="section container" aria-labelledby="skills-title">
    <div className="section-heading"><div><p className="eyebrow">04 / Skills</p><h2 id="skills-title">My engineering toolkit.</h2></div><p>Technologies used across professional work, <br />personal projects, and foundational study.</p></div>
    <div className="skills-grid">{groups.map((group, index) => <article className="skill-group" key={group.label}><span className="skill-number">0{index + 1}</span><h3>{group.label}</h3><ul className="tags">{group.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></article>)}</div>
  </section>;
}
