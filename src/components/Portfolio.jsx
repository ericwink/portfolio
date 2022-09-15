import Project from "./Project"
import data from '../assets/projects.json'

const width = window.innerWidth;

export default function Portfolio({ addToFadeDowns, addToFlips }) {
    return (
        <section id='portfolio' ref={addToFadeDowns}>
            <h2>Portfolio</h2>
            {data.map((project, index) => {
                return (
                    <Project key={index} index={index} project={project} width={width} addToFlips={addToFlips} addToFadeDowns={addToFadeDowns}
                    />
                )
            })}
            <img className='mern' src="/mernlogo.png" alt="MERN stack logo" ref={addToFadeDowns} />
        </section>
    )
}