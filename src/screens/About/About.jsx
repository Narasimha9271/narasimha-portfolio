import urls from "../../assets/data/PersonalUrls.json";

export function About() {
  return (
    <section id="About" className="about-band section" aria-labelledby="about-title">
      <div className="container about-layout">
        <div><p className="eyebrow">01 / About</p><h2 id="about-title">From banking workflows<br />to backend systems.</h2></div>
        <div className="about-copy">
          <p>I’m a Bengaluru-based developer and an NIT Andhra Pradesh graduate. At Oracle Financial Services Software, I work on Oracle FLEXCUBE backend customizations, file ingestion, database workflows, and production fixes.</p>
          <p>Outside work, I build Java and Spring Boot applications, explore event-driven services with Kafka, and develop AI-assisted workflows. I’m looking for Java/backend and SDE opportunities where I can contribute to reliable software and grow as an engineer.</p>
          <a className="text-link" href={`mailto:${urls.email}`}>Let’s talk about an opportunity <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
