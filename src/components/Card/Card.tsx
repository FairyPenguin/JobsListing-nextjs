import styles from "./Card.module.css"

type CardPropsType = {
    background: "slate" | "gray",
    buttonBackground: "gray__card__button" | "slate__card__button",
    title: string,
    paragraph: string
}

function Card({ background, buttonBackground, title, paragraph }: CardPropsType) {
    return (

        <>

            <div className={`${styles["card"]} ${styles[`${background}`]}`}>
                <h2 className={styles["card__title"]}>{title}</h2>
                <p className={styles["card__description"]}>
                    {paragraph}
                </p>
                <button className={`${styles["card__button"]} ${styles[`${buttonBackground}`]}`}>
                    <a
                        href="/jobs"
                        className={styles["card__link"]}
                    >
                        Browse Jobs
                    </a>
                </button>
            </div>


            {/* <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold">For Employers</h2>
                <p className="mt-2 mb-4">
                    List your job to find the perfect developer for the role
                </p>
                <a
                    href="/add-job.html"
                    className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
                >
                    Add Job
                </a>
            </div> */}
        </>
    )
}

export default Card