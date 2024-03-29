import styles from "./Hero.module.css"


type HeroPropsType = {
    title: string,
    subtitle: string
}

function Hero({
    title = "Jobs for the JavaScript Devs",
    subtitle = "Find the job that fits your skills and needs" }: HeroPropsType) {
    return (
        <section className={styles["hero"]}>
            <div className={styles["hero__inner__wrapper"]}>
                <h1
                    className={styles["hero__title"]}
                >
                    {title}
                </h1>
                <p className={styles["hero__paragraph"]}>
                    {subtitle}
                </p>
            </div>
        </section>
    )
}

export default Hero