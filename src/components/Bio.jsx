export default function Bio({ addToFadeDowns }) {
    return (
        <section id='bio' ref={addToFadeDowns}>
            <img src="/eric2.jpg" alt="" />
            <h2>Who I am</h2>
            <p>Over 11 years I built a career in the IT solutions industry as a respected leader in various roles like Inside Sales, Senior Management, Training, Warehouse Systems and Logistics.
                With 8 years experience as a manager, and 6 years working directly with Executives to help shape business decisions and rework company processes.<br /><br /> As a software engineer I am actively seeking engaging work that will allow me to positively impact on our society. I currently specialize in web and mobile application development.</p>
            {/* <div className='buttons'>
                <button className='highlight'>Download Resume</button>
                <button>Hire Me</button>
            </div> */}
            <div className="testamonial">
                <p>"Eric by far has been able to demonstrate his worth through his work and we're extremely happy to discover him. Highly recommend as we'll definitely be an ongoing clients of his." - Taylor W. (Freelance Client)</p>
            </div>
        </section>


    )
}