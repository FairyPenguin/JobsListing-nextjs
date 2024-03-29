import styles from "./Spacer.module.css"

type Spacer = {
  space: keyof typeof spaces;
}

const spaces = {
  "0.25rem": 1,
  "0.5rem": 2,
  "0.75rem": 3,
  "1rem": 4,
  "1.25rem": 5,
  "1.5rem": 6,
  "1.75rem": 7,
  "2rem": 8,
  "2.25rem": 9,
  "2.5rem": 10,
  "2.75rem": 11,
  "3rem": 12,
  "3.25rem": 13,
  "3.5rem": 14,
  "3.75rem": 15,
  "4rem": 16,
}

export default function Spacer({ space }: Spacer) {

  //Version with Global CSS calss
  // return <div className={`spacer${spaces[space]}`}></div>;
  return (
    // Version with CSS module class
    <div
      className={`${styles[`spacer${spaces[space]}`]} ${styles["spacer"]}`}
    >
    </div>
  );
}

