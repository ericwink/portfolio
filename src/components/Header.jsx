import Logo from "./logo"
import Socials from "./Socials/Socials"
import logoName from '/logo-name.svg'
import { motion } from 'framer-motion'
import { fadeIn } from "../utilities/animations"


export default function Header() {

    return (
        <header id='header'>
            <Logo />
            <motion.img
                className="logo"
                src={logoName}
                alt="EricWinkDev"
                variants={fadeIn}
                initial='hidden'
                animate='visible' />
            {/* <h1>EricWinkDev</h1> */}
            <Socials />
        </header>
    )
}