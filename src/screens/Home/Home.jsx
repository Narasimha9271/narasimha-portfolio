import styles from "./Home.module.css";
import Avatar from "./components/Avatar/Avatar";

import { Link } from "react-scroll";
import Resume from "../../assets/document/Resume.pdf";
import Button from "../../components/Button/Button";

import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";

const Home = () => {
    return (
        <section className={styles.Home} name="Home" id="main-content">
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi! I Am <span>Narasimha Palla</span>
                </h1>
                <h3 className={styles.subTitle}>
                    I am into{" "}
                    <Typed
                        strings={[
                            "Web Development",
                            "Machine Learning",
                            "Problem Solving",
                            "Engineering",
                        ]}
                        typeSpeed={200}
                        backSpeed={50}
                        loop
                    />
                </h3>

                <div className={styles.btnContainer}>
                    <Button isLink={true}>
                        <Link
                            href="#Projects"
                            to="Projects"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={0}
                        >
                            Explore
                        </Link>
                    </Button>
                    <Button link={Resume}>Resume</Button>
                </div>
            </div>

            <Avatar />
        </section>
    );
};

export { Home };
