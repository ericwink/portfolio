import { useState } from 'react'
import styles from './card.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from '../Modal/Modal'
import useModal from '../Modal/useModal'

const Card = ({ name, subtitle, description, live, github, video_source, img_source }) => {
    const { isOpen, openModal, closeModal } = useModal()

    const big = {
        hidden: { width: 0, height: 0 },
        visible: {
            width: '100%', height: '100%',
        }
    }

    const video = (
        <video className={styles.videoContainer} autoplay='false' loop='true' muted='true'>
            <source src={video_source} type='video/mp4' />
        </video>
    )

    const image = <img className={styles.img} src={img_source} alt={name} />

    const details = (
        <>
            <p>{description}</p>
            <div className={styles.buttons}>
                {live && <button className='highlight'><a href={live} target="_blank">View Site</a></button>}
                {github && <button><a href={github} target="_blank">View Code</a></button>}
            </div>
        </>
    )


    if (!isOpen) return (
        <AnimatePresence initial={false} mode='wait'>
            <motion.div initial={{ y: '-100vh' }} animate={{ y: 0 }} className={styles.container} onClick={openModal} >
                <div className={styles.videoContainer}>
                    {image}
                </div>
                <div className={styles.info}>
                    <div className='titles'>
                        <h2 className={styles.title}>{name}</h2>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )


    return (
        <AnimatePresence>
            <Modal key={`${name}-yes`} isOpen={isOpen} onClose={closeModal} name={name}>
                <div className={styles.big} onClick={closeModal} >
                    <div className={styles.videoContainer}>
                        {video}
                    </div>
                    <div className={styles.info}>
                        <div className='titles'>
                            <h3 >{name}</h3>
                            <h5>{subtitle}</h5>
                        </div>
                        {details}
                    </div>
                </div>
            </Modal>
        </AnimatePresence>
    )
}

export default Card