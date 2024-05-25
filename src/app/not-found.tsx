// ======/ Imports /======

// CSS-Module File Import
import Link from "next/link";
import styles from "./styles/not_found.module.css";
import Spacer from "@/components/UiComponents/Spacer/Spacer";
import NotFoundSvgIcon from "@/components/SvgIcons/NotFoundSvgIcon";

// Main Component Exported Function

export default function NotFound() {
  return (
    <section className={styles["notfound__section"]}>
      <NotFoundSvgIcon
        className={styles["notfound__icon"]}
        width={75}
        height={75}
        fill="#e77728"
      />

      <h1 className={styles["notfound__heading"]}>404 Not Found</h1>
      <p className={styles["notfound__paragraph"]}>This page does not exist</p>

      <Link href="/" className={styles["notfound__link"]}>
        Go Back
      </Link>
    </section>
  );
}
