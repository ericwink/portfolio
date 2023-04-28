import styles from './style.module.css'
import { motion } from 'framer-motion'
import { closeButton } from '../../utilities/animations'

const Modal = ({ children, onClose, name }) => {


    const background = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    const content = {
        hidden: { y: '-100vh' },
        visible: {
            y: 0,
            transition: { delay: 0.3 }
        }
    }

    return (
        <motion.div key={`${name}background`} variants={background} initial='hidden' animate='visible' exit='hidden' className={styles.background} onClick={onClose} role='dialog' aria-modal='true'>
            <motion.div key={`${name}content`} variants={content} className={styles.content} onClick={(e) => e.stopPropagation()}>
                <motion.button variants={closeButton} initial='initial' whileHover='hover' whileFocus='hover' whileTap='tap' className={styles.button} onClick={onClose}>X</motion.button>
                {children}
            </motion.div>
        </motion.div>

    )
}

export default Modal;