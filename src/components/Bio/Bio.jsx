import styles from './style.module.css'
import { motion } from 'framer-motion'
import { leftEnter } from '../../utilities/animations'
import IAmA from '../IAmA'

export default function Bio() {
    return (
        <section className={styles.bio}>
            <div className={styles.container}>
                <motion.div
                    variants={leftEnter}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    className={styles.titleContainer}>
                    <div className={styles.nameContainer}>
                        <h2 className={styles.title} >Hi, I'm Eric</h2>
                        <IAmA />
                    </div>
                    <img className={styles.eric} src="/eric.webp" alt="Eric" />
                </motion.div>
                <motion.p variants={leftEnter}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }} className={styles.text}
                >I’ve always had a passion for solving problems and building projects.
                </motion.p>
                <motion.p variants={leftEnter}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }} className={styles.text}>
                    As a Software Engineer, I thrive on tackling difficult challenges and utilizing various technologies to bring awesome applications and user experiences to life
                </motion.p>
                <motion.p variants={leftEnter}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }} className={styles.text}>
                    If you're interested in working together, email me through the button at the top, or use the contact form below!
                </motion.p>
            </div>
        </section>


    )
}