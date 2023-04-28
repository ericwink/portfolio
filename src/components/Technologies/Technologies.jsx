import { motion } from 'framer-motion'
import technologies from '../../assets/technologies.json'
import style from './style.module.css'

export default function Technologies() {

    const imgVariant = {
        hidden: { opacity: 0, y: -30 },
        visible: i => ({
            opacity: 100,
            y: 0,
            transition: {
                delay: i * 0.2
            }
        })
    }

    return (
        <div className={style.container} >
            {technologies.map((tech, i) => {
                return (
                    <motion.img
                        key={tech.alt}
                        variants={imgVariant}
                        custom={i}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                        className={tech.invert ? style.invert : style.img}
                        src={tech.img}
                        alt={tech.alt} />
                )
            })}
        </div>
    )
}