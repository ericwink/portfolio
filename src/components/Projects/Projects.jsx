import projects from '../../assets/projects.json'
import Card from '../card/Card'
import styles from './style.module.css'

const cards = projects.map((project) => {
    return (
        <Card key={project.name} {...project} />
    )
})

const Projects = () => {

    return (
        <>

            <div id='projects' className={styles.container}>
                {cards}
            </div>
        </>
    )
}

export default Projects