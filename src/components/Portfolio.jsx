import Project from "./Project"
import data from '../assets/projects.json'

export default function Portfolio() {
    return (
        <section id='portfolio'>
            <h2>Projects</h2>
            {data.map((project, index) => {
                return (
                    <Project key={index} index={index} project={project}
                    />
                )
            })}
        </section>
    )
}