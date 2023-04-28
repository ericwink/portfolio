import Technologies from "../Technologies/Technologies";
import styles from './style.module.css'
export default function CallToAction() {
    return (
        <section className={styles.callToAction}>
            <div className={styles.container}>
                <h2 className={styles.title}>Let's Build Your Solution</h2>
                <p className={styles.text}>Do you have a business that needs a web presence? A current website that needs to be rebuilt to ensure it works flawlessly across various screen sizes? Or perhaps you need a completely customized full-stack web application to solve a business problem?</p>
                <p className={styles.text}> I am excited to work together to understand the challenges you are currently facing, and provide you with the best possible solution to meet your needs.</p>
                <p className={styles.testamonial}>"Eric by far has been able to demonstrate his worth through his work and we're extremely happy to discover him. Highly recommend as we'll definitely be an ongoing clients of his." - Taylor W. (Freelance Client)</p>
                <Technologies />
            </div>
        </section>

    )
}