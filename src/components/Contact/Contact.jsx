import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import ContactForm from '../ContactForm/ContactForm'
import styles from './style.module.css'
import { fadeUpChild } from '../../utilities/animations'

export default function Contact() {
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(false)
        const formData = new FormData(e.target)

        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString(),
            })
            setSubmitted(true)
        } catch (error) {
            console.log(error)
            setError(true)
        }
    }


    const errorMessage = <motion.p variants={fadeUpChild} animate='visible' initial='hidden' key='thanks!'>There was an error, please try again!</motion.p>
    const thankYou = <motion.p variants={fadeUpChild} animate='visible' initial='hidden' key='thanks!'>Thanks for reaching out! I'll be in touch soon!</motion.p>

    const form = (
        <>
            <ContactForm onSubmit={handleSubmit} />
        </>
    )

    return (
        <section id='contact' className={styles.container} >
            <h2>Contact</h2>
            <AnimatePresence mode='wait'>
                {submitted ? thankYou : form}
            </AnimatePresence>
            {error && errorMessage}
        </section>
    )
}