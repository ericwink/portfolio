import styles from './style.module.css'
import { motion } from 'framer-motion'
import { leftEnter } from '../../utilities/animations'

const OfferCard = ({ step, img, text }) => {
    return (
        <motion.article className={styles.cardContainer} variants={leftEnter} whileInView='visible' initial='hidden' viewport={{ once: true }}  >
            <div className={styles.imgContainer}>
                <img className={styles.img} src={img} alt={step} />
                <h1 className={styles.title}>{step}</h1>
            </div>
            <p className={styles.text}>{text}</p>
        </motion.article>
    )
}

export default OfferCard