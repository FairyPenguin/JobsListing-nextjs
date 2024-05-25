import Image from "next/image";
import styles from "./Navbar.module.css";
import LogoSvgIcon from "@/components/SvgIcons/LogoSvgIcon";
import Link from "next/link";

function Navbar() {
  return (
    <nav className={styles["nav"]}>
      <div className={styles["nav__container"]}>
        {/* Logo */}
        <a className={styles["logo"]} href="/">
          <LogoSvgIcon fill="#2d9cdb" className={styles["logo__icon"]} />
          <span className={styles["logo__text"]}></span>
        </a>

        <menu className={styles["nav__items__list"]}>
          <li>
            <Link href="/" className={styles["item__link"]}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/all-jobs" className={styles["item__link"]}>
              Jobs
            </Link>
          </li>

          <li>
            <Link href="/add-job" className={styles["item__link"]}>
              Add Job
            </Link>
          </li>
        </menu>
      </div>
    </nav>
  );
}

export default Navbar;
