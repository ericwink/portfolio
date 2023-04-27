import { useState } from 'react'
import styles from './card.module.css'
import { motion } from 'framer-motion'
import Modal from '../Modal/Modal'
import useModal from '../Modal/useModal'

const Card = ({ name, subtitle, description, live, github, video_source, img_source }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const { isOpen, openModal, closeModal } = useModal()

    const expandCard = {
        expanded: { maxWidth: '90%' },
        shrink: { maxWidth: '25%', minWidth: 150 }
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
        <div className={styles.container} onClick={openModal} >
            <div className={styles.videoContainer}>
                {image}
            </div>
            <div className={styles.info}>
                <div className='titles'>
                    <h2 className={styles.title}>{name}</h2>
                </div>
            </div>
        </div>
    )


    return (
        <Modal isOpen={isOpen} onClose={closeModal}>
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
    )
}

export default Card