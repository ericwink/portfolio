import { motion } from 'framer-motion'
import { contact } from '../utilities/animations'

export default function Contact() {
    return (
        <section id='contact' >
            <img src="/backlitkeyboard.jpg" alt="backlit keyboard" />
            <h2>Contact</h2>
            <form name='portfolio-contact' method='POST'>
                <input type="hidden" name='form-name' value='portfolio-contact' />
                <label htmlFor="name">Name</label>
                <input type="text" name='name' placeholder='Name' />
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Email' />
                <label htmlFor="subject">Subject</label>
                <input type="text" name='subject' placeholder='Subject' />
                <label htmlFor="message">Message</label>
                <textarea name="message" cols="30" rows="8" placeholder='Message'></textarea>
                <motion.button variants={contact} whileFocus='hover' whileHover='hover' whileTap='tap' className="btn highlight" type="submit">Submit</motion.button>
            </form>
        </section>
    )
}