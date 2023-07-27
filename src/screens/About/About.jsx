import { UseActiveOnScroll } from "../../hooks/useActiveOnScroll";
import styles from "./About.module.css";

import Resume from "../../assets/document/Resume.pdf";
import Button from "../../components/Button/Button";

const About = () => {
    const { observerRef: sectionRef, isVisible } = UseActiveOnScroll(0.3);

    return (
        <section
            className={`${styles.About} ${isVisible ? "active" : ""}`}
            name="About"
            ref={sectionRef}
        >
            <h1
                className="section-header"
                style={{ "--x": "5%", "--y": "0rem" }}
            >
                About
            </h1>

            <div className={styles.content}>
                <p>
                    Hi!, I am Narasimha Palla, and currently studying Electrical
                    Engineering at NIT AndhraPradesh.
                </p>
                <p>I am a Web-Development intern at VRIT Labs</p>
                <p>I am a Web-Development intern at CALLVCAL</p>
                <p>I am web-developer at GDSC NITAP.</p>
                <p>I enjoy building websites and exploring new technologies.</p>
                <p className={styles.email}>
                    Let's Start a Conversation:
                    <a href="mailto:narasimha.04.p.l@gmail.com?subject=Hi!">
                        narasimha.04.p.l@gmail.com
                    </a>
                </p>
                <Button link={Resume}>Resume</Button>
            </div>
        </section>
    );
};

export { About };
