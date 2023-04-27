import styles from './style.module.css'
import { motion, AnimatePresence } from 'framer-motion'

const Modal = ({ children, isOpen, onClose, name }) => {


    const background = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    // const content = {
    //     hidden: { height: 0, width: 0, opacity: 0 },
    //     visible: {
    //         height: 'fit-content', width: '100%', opacity: 1,
    //         transition: { delay: 0.3 }
    //     }
    // }

    const content = {
        hidden: { y: '-100vh' },
        visible: {
            y: 0,
            transition: { delay: 0.3 }
        }
    }

    if (!isOpen) return null

    return (
        <motion.div key={`${name}-background`} variants={background} initial='hidden' animate='visible' exit='hidden' className={styles.background} onClick={onClose}>
            <motion.div key={`${name}-content`} variants={content} className={styles.content} onClick={(e) => e.stopPropagation()}>
                <button className={styles.button} onClick={onClose}>X</button>
                {children}
            </motion.div>
        </motion.div>
    )
}

export default Modal;