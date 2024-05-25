import Image from "next/image";
import styles from "./Navbar.module.css";
import LogoSvgIcon from "@/components/SvgIcons/LogoSvgIcon";
import NavitemLink from "./NavitemLink/NavitemLink";

function Navbar() {
  // Navigation Items Array

  const navigationItems = [
    { title: "Home", url: "/" },
    { title: "Jobs", url: "/all-jobs" },
    { title: "Add Job", url: "/add-job" },
  ];

  return (
    <nav className={styles["nav"]}>
      <div className={styles["nav__container"]}>
        {/* Logo */}
        <a className={styles["logo"]} href="/">
          <LogoSvgIcon fill="#2d9cdb" className={styles["logo__icon"]} />
          <span className={styles["logo__text"]}></span>
        </a>

        <menu className={styles["nav__items__list"]}>
          {navigationItems.map((item, index) => {
            return <NavitemLink key={index} navItem={item} />;
          })}
        </menu>
      </div>
    </nav>
  );
}

export default Navbar;
