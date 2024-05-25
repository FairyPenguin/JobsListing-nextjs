// ======/ Imports /======
import Link from "next/link";
// CSS-Module File Import
import styles from "./ViewAll.module.css";

// Main Component Exported Function

export default function ViewAll() {
  return (
    <section className={styles["jobs__viewall"]}>
      <Link href="/all-jobs" className={styles["jobs__viewall__link"]}>
        View All Jobs
      </Link>
    </section>
  );
}
