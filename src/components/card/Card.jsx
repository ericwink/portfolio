import styles from './card.module.css'
import { motion } from 'framer-motion'
import { button, dropIn } from '../../utilities/animations'

const Card = ({ size, onClick, project }) => {
    const { name, subtitle, description, live, github, video_source, img_source } = project

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

    if (size === 'small') return (
        <motion.button layout key={`${name}small`} variants={dropIn} initial='hidden' animate='visible' exit='hidden' whileHover='hover' whileFocus='hover' className={styles.container} onClick={onClick} >
            {image}
            <div className={styles.info}>
                <h2 className={styles.title}>{name}</h2>
            </div>
        </motion.button>
    )

    return (
        <div className={styles.big}>
            {video}
            <div className={styles.info}>
                <div>
                    <h3>{name}</h3>
                    <h5>{subtitle}</h5>
                </div>
                <p>{description}</p>
                <div className={styles.buttons}>
                    {live && <motion.button variants={button} whileHover='hover' whileFocus='hover' whileTap='tap' className='btn highlight'><a href={live} target="_blank">View Site</a></motion.button>}
                    {github && <motion.button variants={button} whileHover='hover' whileFocus='hover' whileTap='tap' className='btn'><a href={github} target="_blank">View Code</a></motion.button>}
                </div>
            </div>
        </div>
    )
}

export default Card