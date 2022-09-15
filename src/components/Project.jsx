export default function Project({ index, width, addToFlips, addToFadeDowns, project }) {
    return (
        <div className="project" ref={index === 0 ? null : width <= 800 ? addToFlips : addToFadeDowns}>
            <img src={project.source} alt="" />
            <div className='info'>
                <div className='titles'>
                    <h3 >{project.name}</h3>
                    <h4>{project.subtitle}</h4>
                </div>
                <p>{project.description}</p>
                <div className='buttons'>
                    <button className='highlight'><a href={project.live} target="_blank">View Site</a></button>
                    <button><a href={project.github} target="_blank">View Code</a></button>
                </div>
            </div>
        </div>
    )
}