import education from "../../assets/data/Education.json";
import urls from "../../assets/data/PersonalUrls.json";

export function Education() {
  return <section id="Education" className="education-section section" aria-labelledby="education-title"><div className="container">
    <div className="section-heading"><div><p className="eyebrow">05 / Foundations</p><h2 id="education-title">Education & problem solving.</h2></div></div>
    <div className="education-grid">
      {education.milestones.map(item => <article className="education-card" key={item.title}><p className="eyebrow">NIT Andhra Pradesh</p><h3>{item.title}</h3><p>{item.address}</p><p className="date">{item.year}</p>{item.highlights.map(highlight => <strong className="education-score" key={highlight}>{highlight}</strong>)}</article>)}
      <article className="practice-card"><p className="eyebrow">Consistent practice</p><div className="practice-stats"><div><strong>750+</strong><span>LeetCode problems</span></div><div><strong>100+</strong><span>GeeksforGeeks problems</span></div></div><p>Building fluency in data structures, algorithms, and problem solving.</p><div className="social-links"><a href={urls.leetCode} target="_blank" rel="noreferrer">LeetCode ↗</a><a href="https://www.geeksforgeeks.org/user/narasimham2j3/" target="_blank" rel="noreferrer">GeeksforGeeks ↗</a></div></article>
    </div>
  </div></section>;
}
