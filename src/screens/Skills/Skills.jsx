import { UseActiveOnScroll } from "../../hooks/useActiveOnScroll";
import styles from "./Skills.module.css";

const Skills = () => {
    const { observerRef: sectionRef, isVisible } = UseActiveOnScroll(0.2);

    return (
        <section
            className={`${styles.Skills} ${isVisible ? "active" : ""}`}
            name="Skills"
            ref={sectionRef}
        >
            <div className={styles.content}>
                <h1
                    className="section-header"
                    style={{ "--x": "5%", "--y": "0rem" }}
                >
                    Skills
                </h1>

                <div>
                    <h3>Frontend</h3>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>HTML and CSS</li>
                    <li>Tailwind</li>
                </div>
                <div>
                    <h3>Programmming Languages</h3>
                    <li>C++</li>
                    <li>C</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                </div>
                <div>
                    <h3>Primary Tools</h3>
                    <li>Text Editor: VSCode</li>
                    <li>Git </li>
                    <li>GitHub</li>
                    <li>Bash</li>
                </div>
            </div>
        </section>
    );
};

export { Skills };
