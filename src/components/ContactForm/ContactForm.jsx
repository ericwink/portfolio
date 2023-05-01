import { motion } from 'framer-motion'
import { useState } from 'react'
import { fadeUpParent, fadeUpChild, contactButton } from '../../utilities/animations'
import styles from './style.module.css'

const ContactForm = ({ onSubmit }) => {
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

    return (
        <motion.form key='formy' className={styles.form} variants={fadeUpParent} whileInView='visible' initial='hidden' exit='exit' viewport={{ once: true }} name='portfolio-contact' method='POST' data-netlify='true' onChange={handleChange} onSubmit={onSubmit}>
            <motion.input className={styles.input} variants={fadeUpChild} type="hidden" name='form-name' value='portfolio-contact' />
            <label className={styles.label} htmlFor="name">Name</label>
            <motion.input className={styles.input} variants={fadeUpChild} type="text" name='name' placeholder='Name' />
            <label className={styles.label} htmlFor="email">Email</label>
            <motion.input className={styles.input} variants={fadeUpChild} type="email" name='email' placeholder='Email' />
            <label className={styles.label} htmlFor="subject">Subject</label>
            <motion.input className={styles.input} variants={fadeUpChild} type="text" name='subject' placeholder='Subject' />
            <label className={styles.label} htmlFor="message" >Message</label>
            <motion.textarea className={styles.input} variants={fadeUpChild} name="message" cols="30" rows="8" placeholder='Message'></motion.textarea>
            <motion.button disabled={disabled} variants={contactButton} whileFocus={!disabled && 'hover'} whileHover={!disabled && 'hover'} whileTap={!disabled && 'tap'} className="btn highlight" type="submit">Submit</motion.button>
        </motion.form>
    )
}

export default ContactForm;