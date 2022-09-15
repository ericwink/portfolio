export default function Contact({ addToFadeDowns }) {
    return (
        <section id='contact' ref={addToFadeDowns}>
            <img src="/backlitkeyboard.jpg" alt="backlit keyboard" />
            <h2>Contact</h2>
            <form name='portfolio-contact' method='POST' data-netlify='true' onSubmit='submit'>
                <input type="hidden" name='hidden' value='portfolio-contact' />
                <label htmlFor="name">Name</label>
                <input type="text" name='name' placeholder='Name' />
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Email' />
                <label htmlFor="subject">Subject</label>
                <input type="text" name='subject' placeholder='Subject' />
                <label htmlFor="message">Message</label>
                <textarea name="message" cols="30" rows="8" placeholder='Message'></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}