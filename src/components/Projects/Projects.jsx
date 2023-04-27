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
        setTimeout(() => {
            setProjectModal(...toShow)
        }, '2000')
    }

    const pushProject = (project) => {
        const temp = [...projectArray]
        temp.push(project)
        setProjectModal(null)
        setProjectArray(temp)
    }

    const cards = projectArray.map((project, index) => {
        return (
            <AnimatePresence initial={false}>
                <Card size='small' key={project.name} project={project} onClick={() => pullProject(index)} />
            </AnimatePresence>
        )
    })

    return (
        <>
            <motion.div className={styles.container}>
                {cards}
            </motion.div>

            {projectModal &&
                <AnimatePresence>
                    <Modal
                        key={`${projectModal.name}-yes`}
                        name={projectModal.name}
                        onClose={() => pushProject(projectModal)}>
                        <Card project={projectModal} size='big' />
                    </Modal>
                </AnimatePresence>
            }
        </>
    )
}

export default Projects


//set state with the array of objects
//when I click an object, splice it out of the array
//put spliced object into modalState
//when we close the modal, push the item to the end of the original array