import Resume from "../../assets/document/Resume.pdf";
import urls from "../../assets/data/PersonalUrls.json";

export function Home() {
  return (
    <section id="Home" className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Open to Java / Backend / SDE roles</p>
        <h1 id="hero-title">Narasimha<br /><span>Palla.</span></h1>
        <p className="hero-role">Backend development.<br />Real business problems.</p>
        <p className="hero-description">Associate Technical Consultant at Oracle Financial Services Software. I work on banking workflows and build projects with Java, Spring Boot, SQL, and Kafka.</p>
        <div className="actions">
          <a className="button button-primary" href="#Projects">View my projects <span aria-hidden="true">↗</span></a>
          <a className="button button-secondary" href={Resume} target="_blank" rel="noreferrer">View resume <span aria-hidden="true">↗</span></a>
        </div>
        <div className="social-links" aria-label="Find me online">
          <a href={urls.gitHub} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={urls.linkedIn} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={`mailto:${urls.email}`}>Email ↗</a>
        </div>
      </div>
      <aside className="hero-panel" aria-label="My work at a glance">
        <div className="panel-top"><span className="eyebrow">What I work on</span><span className="panel-index">01 / 03</span></div>
        <div className="system-map" aria-hidden="true">
          <div className="system-node">Client request</div><span className="flow-line" />
          <div className="system-node system-node-main">Business logic <span>Validate · Process · Persist</span></div><span className="flow-line" />
          <div className="system-branches"><div className="system-node">Database</div><div className="system-node">Events</div></div>
        </div>
        <div className="panel-row"><span className="row-number">01</span><div><h2>Banking workflows</h2><p>FLEXCUBE · PL/SQL · Integrations</p></div></div>
        <div className="panel-row"><span className="row-number">02</span><div><h2>Java backend projects</h2><p>Spring Boot · REST APIs · Kafka</p></div></div>
        <div className="panel-row"><span className="row-number">03</span><div><h2>AI applications</h2><p>Invoice extraction · Human review</p></div></div>
      </aside>
    </section>
  );
}
