import styles from "./CardsWrapper.module.css"

function CardsWrapper({ children }: { children: React.ReactNode }) {
    return (
        <section className={styles["cards__container"]}>
            <div className={styles["cards__grid"]}>
                {children}
            </div>
        </section>
    )
}

export default CardsWrapper