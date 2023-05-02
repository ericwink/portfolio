import { useState } from 'react'
import projects from '../../assets/projects.json'
import Card from '../card/Card'
import styles from './style.module.css'
import { AnimatePresence } from 'framer-motion'
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
        <section className={styles.projects}>
            <div className={styles.projectsContainer}>
                <h2>Projects</h2>
                <p>Click to see what we could build together...</p>
                <div className={styles.cardContainer}>
                    <AnimatePresence initial={false} >
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
                </div>
            </div>
        </section>
    )
}

export default Projects