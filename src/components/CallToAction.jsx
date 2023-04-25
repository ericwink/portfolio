import Technologies from "./Technologies";
import { motion } from 'framer-motion'

const drop = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 100,
        y: 0,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.5
        }
    }
}


export default function CallToAction() {
    return (
        <section variants={drop} whileInView="visible" initial="hidden" id='calltoaction'>
            <h2 variants={drop} >Let's Build Your Solution</h2>
            <p variants={drop}>Do you have a business that needs a web presence? A current website that needs to be rebuilt for mobile? Or perhaps you need a completely customized full-stack web application to solve a business problem?</p>
            <p>I am excited to work together to understand the challenges you are currently facing, and provide you with the best possible solution to meet your needs.</p>
            <div className="testamonial">
                <p>"Eric by far has been able to demonstrate his worth through his work and we're extremely happy to discover him. Highly recommend as we'll definitely be an ongoing clients of his." - Taylor W. (Freelance Client)</p>
            </div>
            <Technologies />

        </section >


    )
}