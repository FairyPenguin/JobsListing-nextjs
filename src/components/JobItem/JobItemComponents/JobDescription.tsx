"use client";

import { useState } from "react";
import styles from "./JobDescription.module.css";

export default function JobItemDescription({
  jobDescription,
}: {
  jobDescription: string;
}) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let descriptionText = jobDescription;

  if (!showFullDescription) {
    descriptionText = descriptionText.substring(0, 90) + "...";
  }

  return (
    <>
      <div className={styles["job__item__description"]}>
        <p>{descriptionText}</p>
      </div>

      <button
        onClick={() => setShowFullDescription((prevState) => !prevState)}
        className={styles["showmore__btn"]}
      >
        {showFullDescription ? "Less" : "More"}
      </button>
    </>
  );
}
