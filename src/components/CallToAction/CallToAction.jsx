import OfferCard from "../OfferCard/OfferCard";
import Technologies from "../Technologies/Technologies";
import styles from './style.module.css'
import offers from '../../assets/offer.json'

const offerCards = offers.map((offer) => (
    <OfferCard key={offer.step} {...offer} />
))

export default function CallToAction() {
    return (
        <section className={styles.callToAction}>
            <div className={styles.container}>
                <h2 className={styles.title}>Let's Build Your Solution</h2>

                <p className={styles.text}>No matter what your business does, you have a need for a software solution. Whether that means a new website, a customized application, or automating a manual process.</p>

                <p className={styles.text}>During an 11 year career with a global IT solutions provider I implemented several new processes that enhanced the lives of employees, saved time, improved workflow, reduced costs, and increased customer satisfaction and retention.</p>

                <p className={styles.text}>I utilize my years of experience identifying and solving business problems to understand your unique needs, then build a custom solution that works for you with my knowledge in Software Engineering.</p>

                <p className={styles.text}>Let's get you back on track to focusing on what really matters for your business.</p>

                <p className={styles.testamonial}>"Eric by far has been able to demonstrate his worth through his work and we're extremely happy to discover him. Highly recommend as we'll definitely be an ongoing clients of his." - Taylor W. (Freelance Client)</p>

                {offerCards}

                <Technologies />
            </div>
        </section>

    )
}