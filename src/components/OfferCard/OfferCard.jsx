import styles from './style.module.css'

const OfferCard = ({ step, img, text }) => {
    return (
        <article className={styles.cardContainer}>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={img} alt={step} />
                <h1 className={styles.title}>{step}</h1>
            </div>
            <p className={styles.text}>{text}</p>
        </article>
    )
}

export default OfferCard