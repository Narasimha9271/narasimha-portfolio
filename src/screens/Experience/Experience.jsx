const roles = [
  {
    company: "Oracle Financial Services Software",
    role: "Associate Technical Consultant",
    date: "June 2025 — Present",
    location: "Bengaluru, India",
    current: true,
    points: [
      "Develop and customize Oracle FLEXCUBE backend workflows, business logic, and enterprise integrations for banking clients.",
      "Redesigned the file-ingestion workflow from server-side pickups to direct client uploads, including parsing, validation, and database persistence.",
      "Build PL/SQL modules and batch integrations, and resolve high-priority production issues through targeted patches."
    ],
    skills: ["Oracle FLEXCUBE", "PL/SQL", "File ingestion", "Production support"]
  },
  {
    company: "Braini Academy",
    role: "Coding Mentor",
    date: "May — July 2023",
    location: "Proddatur, India",
    points: ["Taught C, C++, and Python to more than 100 students through programming lessons and problem-solving practice."],
    skills: ["C / C++", "Python", "Mentoring"]
  }
];

export function Experience() {
  return (
    <section id="Experience" className="section container" aria-labelledby="experience-title">
      <div className="section-heading"><div><p className="eyebrow">02 / Experience</p><h2 id="experience-title">Where I’ve contributed.</h2></div><p>Enterprise banking software <br />and hands-on technical mentoring.</p></div>
      <div className="experience-list">
        {roles.map((job) => <article className="experience-card" key={job.company}>
          <div className="experience-meta"><p className="date">{job.date}</p><p>{job.location}</p>{job.current && <span className="current-label">Current role</span>}</div>
          <div><h3>{job.role}</h3><p className="company">{job.company}</p><ul className="detail-list">{job.points.map(point => <li key={point}>{point}</li>)}</ul><ul className="tags" aria-label="Technologies and focus">{job.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div>
        </article>)}
      </div>
    </section>
  );
}
