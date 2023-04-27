import { useState } from 'react'
import projects from '../../assets/projects.json'
import Card from '../card/Card'
import styles from './style.module.css'
import { motion } from 'framer-motion'

const Projects = () => {
    const [projectArray, setProjectArray] = useState(projects)

    const cards = projectArray.map((project) => {
        return (
            <Card key={project.name} {...project} />
        )
    })

    return (
        <>
            <motion.div layout id='projects' className={styles.container}>
                {cards}
            </motion.div>
        </>
    )
}

export default Projects


//set state with the array of objects
//when I click an object, splice it out of the array
//put spliced object into modalState
//when we close the modal, push the item to the end of the original array