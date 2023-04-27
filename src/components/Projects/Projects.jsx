import projects from '../../assets/projects.json'
import Card from '../card/Card'
import styles from './style.module.css'
import { motion } from 'framer-motion'

const cards = projects.map((project) => {
    return (
        <Card key={project.name} {...project} />
    )
})

const Projects = () => {

    return (
        <>
            <motion.div layout id='projects' className={styles.container}>
                {cards}
            </motion.div>
        </>
    )
}

export default Projects
