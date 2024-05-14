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
                    <h3>Web technologies</h3>
                    <li>React</li>
                    <li>jQuery</li>
                    <li>HTML and CSS</li>
                    <li>Tailwind and MUI</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>Mongo DB</li>
                    <li>Docker</li>
                </div>
                <div>
                    <h3>Machine Learning</h3>
                    <li>Supervised Machine Learning</li>
                    <li>Deep Learning</li>
                    <li>Reinforcement Learning</li>
                    <li>Artificial Intelligence</li>
                </div>
                <div>
                    <h3>Programming Languages</h3>
                    <li>C++</li>
                    <li>C</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                </div>
                <div>
                    <h3>Primary Tools</h3>
                    <li>Text Editor: VSCode</li>
                    <li>Postman</li>
                    <li>Git </li>
                    <li>GitHub</li>
                    <li>Bash</li>
                </div>
            </div>
        </section>
    );
};

export { Skills };
