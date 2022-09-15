export default function Bio({ addToFadeDowns }) {
    return (
        <section id='bio' ref={addToFadeDowns}>
            <img src="/eric.jpg" alt="" />
            <h2>Who I am</h2>
            <p>With a 10 year career in the IT solutions industry as a respected leader in various roles like Inside Sales, Senior Management, Training, Warehouse Systems and Logistics, I am utilizing my passion of creative problem solving and knowledge as a developer.</p>
            {/* <div className='buttons'>
                <button className='highlight'>Download Resume</button>
                <button>Hire Me</button>
            </div> */}
        </section>
    )
}