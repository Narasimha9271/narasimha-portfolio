import projectsData from "../../assets/data/Projects.json";
import urls from "../../assets/data/PersonalUrls.json";

export function MainProject() {
  return (
    <section id="Projects" className="projects-section section" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-heading"><div><p className="eyebrow">03 / Selected projects</p><h2 id="projects-title">What I’ve been building.</h2></div><p>Personal projects across backend services, <br />AI workflows, and full-stack applications.</p></div>
        <div className="project-grid">
          {projectsData.projects.map((project, index) => <article className={`project-card project-${index}`} key={project.title}>
            <div className="project-visual">
              <div className="project-caption"><span>0{index + 1} / Workflow overview</span><span aria-hidden="true">↗</span></div>
              <ol className="project-flow">{project.flow.map(step => <li key={step}>{step}</li>)}</ol>
            </div>
            <div className="project-body">
              <p className="eyebrow">{project.category}</p>
              <div className="project-title"><h3>{project.title}</h3><span className="date">{project.date}</span></div>
              <p>{project.description}</p>
              <ul className="detail-list">{project.highlights.map(item => <li key={item}>{item}</li>)}</ul>
              <ul className="tags" aria-label={`${project.title} technologies`}>{project.techStack.map(tech => <li key={tech}>{tech}</li>)}</ul>
              <div className="project-links"><a href={project.codeUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} code on GitHub`}>View code <span aria-hidden="true">↗</span></a>{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`}>Live demo <span aria-hidden="true">↗</span></a>}</div>
            </div>
          </article>)}
        </div>
        <details className="more-projects">
          <summary>More projects <span>Earlier work & experiments</span></summary>
          <div className="more-project-grid">{projectsData.moreProjects.map(project => <article key={project.title}><h3><a href={project.codeUrl} target="_blank" rel="noreferrer">{project.title} ↗</a></h3><p>{project.description}</p></article>)}</div>
          <a className="text-link" href={urls.gitHub} target="_blank" rel="noreferrer">Explore all repositories ↗</a>
        </details>
      </div>
    </section>
  );
}
