import { useState } from 'react'
import projects from '../../assets/projects.json'
import Card from '../card/Card'
import styles from './style.module.css'
import { motion, AnimatePresence } from 'framer-motion'

const Projects = () => {
    const [projectState, setProjectState] = useState(projects)

    const cards = projectState.map((project) => {
        return (
            <Card key={`${project.name}card`} {...project} />
        )
    })

    return (
        <motion.div className={styles.container}>
            {cards}
        </motion.div>

    )
}

export default Projects
