import { useState } from 'react'
import styles from './card.module.css'
import { motion } from 'framer-motion'

const Card = ({ name, description, live, github, source, subtitle, type }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(prev => !prev)
    }

    const expandCard = {
        expanded: { maxWidth: 600 },
        shrink: { maxWidth: 250 }
    }

    const video = (
        <video className={styles.videoContainer} autoplay='false' loop='true' muted='true'>
            <source src={source} type='video/mp4' />
        </video>
    )

    const image = <img src={source} alt="" />

    return (
        <motion.div variants={expandCard} initial='shrink' animate={isOpen ? 'expanded' : 'shrink'} className={styles.container} onClick={handleClick} >
            <div className={styles.videoContainer}>
                {type === 'video' ? video : image}
            </div>
            <div className={styles.info}>
                <div className='titles'>
                    <h3 >{name}</h3>
                    <h5>{subtitle}</h5>
                </div>
                <p>{description}</p>
                <div className={styles.buttons}>
                    {live && <button className='highlight'><a href={live} target="_blank">View Site</a></button>}
                    {github && <button><a href={github} target="_blank">View Code</a></button>}
                </div>
            </div>

        </motion.div>
    )
}

export default Card