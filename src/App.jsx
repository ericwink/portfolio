import data from './assets/projects.json'

function App() {
  const year = new Date().getFullYear()



  return (
    <>
      <header id='header'>
        <h1>Eric Winkelspecht</h1>
        <p className='title2'>Software Engineer specializing in Web Application Development</p>
        <ul role='list'>
          <li><a href="mailto:eric.winkelspecht@gmail.com" target="_blank"><img src="/mail.png" alt="mail" /></a></li>
          <li><a href="https://github.com/ericwink" target="_blank"><img src="/github.png" alt="github" /></a></li>
          <li><a href="https://www.linkedin.com/in/eric-winkelspecht/" target="_blank"><img src="/linkedin.png" alt="linkedin" /></a></li>
          <li><a href="https://twitter.com/ericwinkdev" target="_blank"><img src="/twitter.png" alt="" /></a></li>
        </ul>
      </header>
      <section id='bio' className='fadeup'>
        <img src="/eric.jpg" alt="" />
        <h2>Who I am</h2>
        <p>With a 10 year career in the IT solutions industry as a respected leader in various roles like Inside Sales, Senior Management, Training, Warehouse Systems and Logistics, I am utilizing my passion of creative problem solving and knowledge as a developer.</p>
        <div className='buttons'>
          <button className='highlight'>Download Resume</button>
          <button>Hire Me</button>
        </div>
      </section>
      <section id='portfolio' >
        <h2>Portfolio</h2>

        {data.map((project, index) => {
          return (
            <div className="project">
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
        })}

        <img className='mern' src="/mernlogo.png" alt="MERN stack logo" />

      </section>
      <section id='contact'>
        <img src="/backlitkeyboard.jpg" alt="backlit keyboard" />
        <h2>Contact</h2>
        <input type="text" name='name' placeholder='Name' />
        <input type="text" name='email' placeholder='Email' />
        <input type="text" name='subject' placeholder='Subject' />
        <textarea name="message" cols="30" rows="8" placeholder='Message'></textarea>
      </section>
      <footer>
        <p>© {year} Eric Winkelspecht</p>
      </footer>
    </>
  )
}

export default App
