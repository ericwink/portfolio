import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const list = [
    { id: 'iama1', content: 'Software Engineer' },
    { id: 'iama2', content: 'Cat Dad' },
    { id: 'iama3', content: 'Baker' },
    { id: 'iama4', content: 'Problem Solver' },
    { id: 'iama5', content: 'Gunpla Builder' },
    { id: 'iama6', content: 'Bodybuilder' }
]

const popUpDown = {
    hidden: { x: -10, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    transition: { repeatType: 'reverse', repeat: Infinity }
}

const IAmA = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex(prev => (prev + 1) % list.length)
        }, 3000)

        return () => clearTimeout(timer)
    }, [index])

    const wordLoop = {
        hidden: { x: -20, opacity: 0 },
        show: { x: 0, opacity: 1 }
    }

    return (
        <AnimatePresence mode='wait'>
            <motion.h1
                style={{ color: '#000', fontSize: 16 }}
                variants={wordLoop}
                initial='hidden'
                animate='show'
                exit='hidden'
                key={list[index].id}>
                {list[index].content}
            </motion.h1>
        </AnimatePresence>
    )
}

export default IAmA