import styles from './card.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from '../Modal/Modal'
import useModal from '../Modal/useModal'

const Card = ({ name, subtitle, description, live, github, video_source, img_source }) => {
    const { isOpen, openModal, closeModal } = useModal()

    const video = (
        <video className={styles.videoContainer} autoplay='false' loop='true' muted='true'>
            <source src={video_source} type='video/mp4' />
        </video>
    )

    const image = (
        <div className={styles.videoContainer}>
            <img className={styles.img} src={img_source} alt={name} />
        </div>

    )

    if (!isOpen) return (
        <AnimatePresence initial={false} >
            <motion.div layout initial={{ y: '-100vh' }} animate={{ y: 0 }} exit={{ y: '-100vh' }} className={styles.container} onClick={openModal} >
                {image}
                <div className={styles.info}>
                    <h2 className={styles.title}>{name}</h2>
                </div>
            </motion.div>
        </AnimatePresence>
    )


    return (
        <>
            <AnimatePresence mode='wait'>
                <Modal key={`${name}-yes`} isOpen={isOpen} onClose={closeModal} name={name}>
                    <div className={styles.big} onClick={closeModal} >
                        {video}
                        <div className={styles.info}>
                            <div>
                                <h3>{name}</h3>
                                <h5>{subtitle}</h5>
                            </div>
                            <p>{description}</p>
                            <div className={styles.buttons}>
                                {live && <button className='highlight'><a href={live} target="_blank">View Site</a></button>}
                                {github && <button><a href={github} target="_blank">View Code</a></button>}
                            </div>
                        </div>
                    </div>
                </Modal>
            </AnimatePresence>
        </>
    )
}

export default Card