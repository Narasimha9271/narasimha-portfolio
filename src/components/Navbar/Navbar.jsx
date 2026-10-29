import { useRef, useState } from "react";
import Resume from "../../assets/document/Resume.pdf";

const sections = ["About", "Experience", "Projects", "Skills", "Education"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  function handleKeyDown(event) {
    if (event.key === "Escape" && open) {
      setOpen(false);
      toggleRef.current.focus();
    }
  }

  return (
    <header className="site-header" onKeyDown={handleKeyDown}>
      <nav className="nav-shell container" aria-label="Main navigation">
        <a className="wordmark" href="#Home" onClick={() => setOpen(false)} aria-label="Narasimha Palla, home">
          <span className="monogram" aria-hidden="true">np.</span>
          <span>Narasimha Palla</span>
        </a>
        <button ref={toggleRef} className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
          {open ? "Close menu" : "Menu"}
        </button>
        <div id="main-navigation" className={`nav-links ${open ? "is-open" : ""}`}>
          {sections.map((section) => <a key={section} href={`#${section}`} onClick={() => setOpen(false)}>{section}</a>)}
          <a className="nav-resume" href={Resume} target="_blank" rel="noreferrer">Resume <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
    </header>
  );
}
