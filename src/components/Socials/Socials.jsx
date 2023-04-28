import { motion } from 'framer-motion'
import socials from '../../assets/socials.json'
import { fadeIn, button } from '../../utilities/animations'
import styles from './style.module.css'

const Socials = () => {

    const links = (
        socials.map((each) => {
            const { link, img, alt } = each
            return (
                <motion.li className={styles.social} variants={button} whileTap='tap' whileHover='hover'>
                    <a
                        href={link}
                        target="_blank">
                        <img src={img} alt={alt} />
                    </a>
                </motion.li>
            )
        })
    )

    return (
        <motion.ul
            className={styles.container}
            role='list'
            variants={fadeIn}
            initial='hidden'
            animate='visible'
        >
            {links}
        </motion.ul>
    )
}

export default Socials