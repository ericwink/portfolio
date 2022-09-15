export default function Contact({ addToFadeDowns }) {
    return (
        <section id='contact' ref={addToFadeDowns}>
            <img src="/backlitkeyboard.jpg" alt="backlit keyboard" />
            <h2>Contact</h2>
            <form name='portfolio-contact' method='POST' data-netlify='true'>
                <input type="text" name='name' placeholder='Name' />
                <input type="text" name='email' placeholder='Email' />
                <input type="text" name='subject' placeholder='Subject' />
                <textarea name="message" cols="30" rows="8" placeholder='Message'></textarea>
            </form>
        </section>
    )
}