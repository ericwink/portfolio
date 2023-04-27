import { useState } from 'react'
import projects from '../../assets/projects.json'
import Card from '../card/Card'
import styles from './style.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import useModal from '../Modal/useModal'
import Modal from '../Modal/Modal'

const Projects = () => {
    const [projectArray, setProjectArray] = useState(projects)
    const [projectModal, setProjectModal] = useState(null)

    const pullProject = (index) => {
        const temp = [...projectArray]
        const toShow = temp.splice(index, 1)
        setProjectArray(temp)
        setProjectModal(...toShow)
    }

    const pushProject = (project) => {
        const temp = [...projectArray]
        temp.push(project)
        setProjectModal(null)
        setProjectArray(temp)
    }

    const cards = projectArray.map((project, index) => {
        return (
            <Card key={`${project.name}card`} size='small' project={project} onClick={() => pullProject(index)} />
        )
    })

    return (
        <>
            <motion.div className={styles.container}>
                <AnimatePresence initial={false}>
                    {cards}


                    {projectModal &&
                        <Modal
                            key={`${projectModal.name}modal`}
                            name={projectModal.name}
                            onClose={() => pushProject(projectModal)}>
                            <Card project={projectModal} size='big' />
                        </Modal>
                    }
                </AnimatePresence>
            </motion.div>

        </>
    )
}

export default Projects