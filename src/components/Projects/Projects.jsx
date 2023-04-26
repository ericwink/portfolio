import { motion, AnimatePresence } from 'framer-motion'
import projects from '../../assets/projects.json'
import Card from '../card/Card'
import styles from './style.module.css'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import useModal from '../Modal/useModal'

const cards = projects.map((project) => {

    return (
        <Card key={project.name} {...project} />
    )
})

const Projects = () => {
    const [selectedCard, setSelectedCard] = useState(null)
    const { isOpen, openModal, closeModal } = useModal()

    return (
        <>

            <div id='projects' className={styles.container}>
                {cards}
            </div>
            <button onClick={openModal}>OPEN</button>
            <Modal isOpen={isOpen} onClose={closeModal}>This is a test</Modal>
        </>
    )
}

export default Projects