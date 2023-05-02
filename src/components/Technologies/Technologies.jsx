import { motion } from 'framer-motion'
import technologies from '../../assets/technologies.json'
import style from './style.module.css'
import { shortDrop } from '../../utilities/animations'

export default function Technologies() {

    return (
        <>
            <p className={style.text}>Some technologies we may use...</p>

            <div className={style.container} >
                {technologies.map((tech, i) => {
                    return (
                        <motion.img
                            key={tech.alt}
                            variants={shortDrop}
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
        </>
    )
}