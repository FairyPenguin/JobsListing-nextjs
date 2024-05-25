import Link from "next/link";
import styles from "./Card.module.css";

type CardPropsType = {
  background: "slate" | "gray";
  buttonBackground: "gray__card__button" | "slate__card__button";
  title: string;
  paragraph: string;
};

function Card({
  background,
  buttonBackground,
  title,
  paragraph,
}: CardPropsType) {
  return (
    <>
      <div className={`${styles["card"]} ${styles[`${background}`]}`}>
        <h2 className={styles["card__title"]}>{title}</h2>
        <p className={styles["card__description"]}>{paragraph}</p>
        <button
          className={`${styles["card__button"]} ${
            styles[`${buttonBackground}`]
          }`}
        >
          <Link href="/jobs" className={styles["card__link"]}>
            Browse Jobs
          </Link>
        </button>
      </div>
    </>
  );
}

export default Card;
