import { useEffect, useState } from "react";
import { useScrollHandler } from "./hooks/useScrollHandler";
import { useDocumentTitle } from "./hooks/useDocumentTitle";

import styles from "./Navbar.module.css";

import { Link } from "react-scroll";
import { BiMenu, BiX } from "react-icons/bi";

const sectionNames = [
    { name: "Home", offset: -100 },
    { name: "About", offset: -80 },
    { name: "Skills", offset: -250 },
    { name: "Projects", offset: 0 },
    { name: "Education", offset: -80 },
];

const Navbar = () => {
    const scroll = useScrollHandler(80);
    const [showMenu, setShowMenu] = useState(false);
    const setDocumentTitle = useDocumentTitle("Narasimha's Portfolio");

    useEffect(() => {
        document.body.classList.toggle("hidden", showMenu);
    }, [showMenu]);

    return (
        <nav
            className={`main-nav ${styles.Navbar} ${
                scroll ? styles.sticky : ""
            }`}
        >
            <div className={styles.headerContainer}>
                <p className={styles.logo}>Narasimha</p>
                <div
                    className={`${styles.toggle} ${
                        showMenu ? styles.active : ""
                    }`}
                    onClick={() => setShowMenu(() => !showMenu)}
                >
                    <BiMenu className={`${styles.icon} ${styles.menuIcon}`} />
                    <BiX className={`${styles.icon} ${styles.closeIcon}`} />
                </div>
            </div>

            <div
                className={`${styles.menuBackdrop} ${
                    showMenu ? styles.active : ""
                }`}
            ></div>
            <ul className={`${styles.menu} ${showMenu ? styles.active : ""}`}>
                {sectionNames.map(({ name, offset }) => {
                    return (
                        <li key={name}>
                            <Link
                                activeClass={styles.active}
                                href={`#${name}`} // Adding this so that tab button works on navbar
                                to={name}
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={offset}
                                onClick={() => setShowMenu(() => !showMenu)}
                                onSetActive={() =>
                                    setDocumentTitle(
                                        `Narasimha's Portfolio | ${name}`
                                    )
                                }
                                className={
                                    name === "Projects"
                                        ? styles.projectLink
                                        : ""
                                }
                            >
                                <span>{name}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
