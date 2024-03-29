import Image from "next/image"
import styles from "./Navbar.module.css"
import LogoSvgIcon from "@/components/SvgIcons/LogoSvgIcon"



function Navbar() {
    return (

        <nav className={styles["nav"]}>
            <div className={styles["nav__container"]}>
                {/* Logo */}
                <a className={styles["logo"]} href="/">
                    <LogoSvgIcon
                        className={styles["logo__icon"]}
                    />
                    <span className={styles["logo__text"]}>
                        JS Jobs Query
                    </span>
                </a>

                <menu className={styles["nav__items__list"]}>
                    <li>
                        <a
                            href="/index"
                            className={styles["item__link"]}
                        >Home</a>
                    </li>

                    <li>
                        <a
                            href="/jobs"
                            className={styles["item__link"]}

                        >Jobs</a>
                    </li>

                    <li>
                        <a
                            href="/add-job"
                            className={styles["item__link"]}

                        >Add Job</a>
                    </li>
                </menu>
            </div>
        </nav>


    )
}

export default Navbar



