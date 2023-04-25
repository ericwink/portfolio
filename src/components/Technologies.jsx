import { motion } from 'framer-motion'
import technologies from '../assets/technologies.json'

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
        <div id="technologies" >

            {technologies.map((tech, i) => {
                return <motion.img variants={imgVariant} custom={i} initial='hidden' whileInView='visible' className={tech.className} src={tech.img} alt={tech.alt} />
            })}

        </div >
    )
}