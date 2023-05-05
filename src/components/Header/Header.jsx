import Logo from '../Logo'
import Socials from "../Socials/Socials"
import logoName from '/logo-name.svg'
import arrow from '/chevron-down.svg'
import styles from './style.module.css'
import { motion } from 'framer-motion'
import { fadeIn, fadeInArrow } from "../../utilities/animations"


export default function Header() {

    return (
        <header className={styles.container}>
            <Logo />
            <motion.img
                className={styles.logo}
                src={logoName}
                alt="EricWinkDev"
                variants={fadeIn}
                initial='hidden'
                animate='visible' />
            <h1 className={styles.hidden}>EricWinkDev</h1>
            <h2 className={styles.hidden}>Custom Coding Solutions</h2>
            <Socials />
            <motion.img
                variants={fadeInArrow}
                initial='hidden'
                animate='visible'
                src={arrow}
                alt="arrow down"
                className={styles.arrow} />
        </header>
    )
}