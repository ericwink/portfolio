import data from './assets/projects.json'

function App() {

  return (
    <>
      <header id='header'>
        <h1>Eric Winkelspecht</h1>
        <p className='title2'>Software Engineer specializing in Web Application Development</p>
        <ul role='list'>
          <li><a href="mailto:eric.winkelspecht@gmail.com" target="_blank"><img src="../public/mail.png" alt="mail" /></a></li>
          <li><a href="https://github.com/ericwink" target="_blank"><img src="/github.png" alt="github" /></a></li>
          <li><a href="https://www.linkedin.com/in/eric-winkelspecht/" target="_blank"><img src="/linkedin.png" alt="linkedin" /></a></li>
          <li><a href="https://twitter.com/ericwinkdev" target="_blank"><img src="/twitter.png" alt="" /></a></li>
        </ul>
      </header>
      <section id='bio'>
        <img src="/eric.jpg" alt="" />
        <h2>Who I am</h2>
        <p>After a 10 year career in the IT solutions industry as a respected leader coordinating progress in various roles like Inside Sales, Senior Management, Training, Warehouse Systems and Logistics, I am now utilizing my passion of creative problem solving in code.</p>
        <div className='buttons'>
          <button className='highlight'>Download Resume</button>
          <button>Hire Me</button>
        </div>
      </section>
      <section id='portfolio'>
        <h2>Portfolio</h2>

        {data.map((project, index) => {
          return (
            <div className="project">
              <img src={data[index].source} alt="" />
              <div className='info'>
                <div className='titles'>
                  <h3>{data[index].name}</h3>
                  <h4>{data[index].subtitle}</h4>
                </div>
                <p>{data[index].description}</p>
                <div className='buttons'>
                  <button className='highlight'><a href={data[index].live} target="_blank">View Site</a></button>
                  <button><a href={data[index].github} target="_blank">View Code</a></button>
                </div>
              </div>
            </div>
          )
        })}

        <img className='mern' src="/mernlogo.png" alt="MERN stack logo" />

      </section>
      <section id='contact'>
        <h2>Contact</h2>
        <input type="text" name='name' placeholder='Name' />
        <input type="text" name='email' placeholder='Email' />
        <input type="text" name='subject' placeholder='Subject' />
        <textarea name="message" cols="30" rows="8" placeholder='Message'></textarea>
      </section>
    </>
  )
}

export default App
