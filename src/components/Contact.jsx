import { motion } from 'framer-motion'
import { contact } from '../utilities/animations'
import { useState } from 'react'

export default function Contact() {
    const [data, setData] = useState({
        name: null,
        email: null,
        subject: '',
        message: ''
    })

    const disabled = !data.name || !data.email || !data.subject || !data.message

    const handleChange = (e) => {
        const { name, value } = e.target
        const temp = { ...data }
        temp[name] = value
        setData(temp)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        console.log({ disabled })
    }

    return (
        <section id='contact' >
            <img src="/backlitkeyboard.jpg" alt="backlit keyboard" />
            <h2>Contact</h2>
            <form name='portfolio-contact' method='POST' data-netlify='true' onChange={handleChange} onSubmit={handleSubmit}>
                <input type="hidden" name='form-name' value='portfolio-contact' />
                <label htmlFor="name">Name</label>
                <input type="text" name='name' placeholder='Name' />
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Email' />
                <label htmlFor="subject">Subject</label>
                <input type="text" name='subject' placeholder='Subject' />
                <label htmlFor="message" >Message</label>
                <textarea name="message" cols="30" rows="8" placeholder='Message'></textarea>
                <motion.button disabled={disabled} variants={!disabled && contact} whileFocus='hover' whileHover='hover' whileTap='tap' className="btn highlight" type="submit">Submit</motion.button>
            </form>
        </section>
    )
}