import urls from "../../assets/data/PersonalUrls.json";
import Resume from "../../assets/document/Resume.pdf";

export function Footer() {
  return <footer id="Contact" className="site-footer"><div className="container">
    <div className="contact-layout"><div><p className="eyebrow">Let’s connect</p><h2>Have a backend role<br />in mind?</h2><p>I’m interested in Java/backend and SDE opportunities.</p></div><a className="button button-light" href={`mailto:${urls.email}`}>Get in touch <span aria-hidden="true">↗</span></a></div>
    <div className="footer-bottom"><a className="email-link" href={`mailto:${urls.email}`}>{urls.email}</a><div className="social-links"><a href={urls.gitHub} target="_blank" rel="noreferrer">GitHub ↗</a><a href={urls.linkedIn} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={Resume} target="_blank" rel="noreferrer">Resume ↗</a></div><p>© {new Date().getFullYear()} Narasimha Palla</p></div>
  </div></footer>;
}
