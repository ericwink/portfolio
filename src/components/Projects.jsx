import { motion } from 'framer-motion'
import projects from '../assets/projects.json'
import Card from './card/Card'

const cards = projects.map((project) => {
    return (
        <Card key={project.name} {...project} />
    )
})

const Projects = () => {
    return (
        <div id='projects'>
            {cards}
        </div>
    )
}

export default Projects