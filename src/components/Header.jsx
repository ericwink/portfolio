import Logo from "./logo"
import logoName from '/logo-name.svg'
import { motion } from 'framer-motion'

const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 100,
        transition: {
            delay: 3.5,
            duration: 1
        }
    }
}

const hover = {
    scale: {
        whileHover: {
            scale: 1.1,
            transiton: {
                duration: 1
            }
        }
    }
}

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
            <motion.ul
                role='list'
                variants={fadeIn}
                initial='hidden'
                animate='visible'
            >
                <motion.li whileHover={{ scale: 1.3 }}><a href="https://www.linkedin.com/in/eric-winkelspecht/" target="_blank"><img src="/linkedin.png" alt="linkedin" /></a></motion.li>
                <motion.li whileHover={{ scale: 1.3 }}><a href="https://youtube.com/@ericwinkdev" target="_blank"><img src="/youtube.png" alt="" /></a></motion.li>
                <motion.li whileHover={{ scale: 1.3 }}><a href="https://github.com/ericwink" target="_blank"><img src="/github.png" alt="github" /></a></motion.li>
                <motion.li whileHover={{ scale: 1.3 }}><a href="mailto:eric.winkelspecht@gmail.com" target="_blank"><img src="/mail.png" alt="mail" /></a></motion.li>
                <motion.li whileHover={{ scale: 1.3 }}><a href="https://anchor.fm/self-taught-devs" target="_blank"><img src="/rss-feed.png" alt="podcast" /></a></motion.li>
                {/* <li><a href="https://twitter.com/ericwinkdev" target="_blank"><img src="/twitter.png" alt="" /></a></li> */}
            </motion.ul>
        </header >
    )
}