import { motion } from 'framer-motion'
import projects from '../assets/projects.json'
import Card from './card/Card'

const cards = projects.map((project) => {
    return (
        <Card key={project.name}>
            <h1>{project.name}</h1>
        </Card>
    )
})

const Projects = () => {
    return (
        <>
            {cards}
        </>
    )
}

export default Projects