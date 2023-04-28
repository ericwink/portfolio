export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 100,
        transition: {
            delay: 3.5,
            duration: 1
        }
    }
}

export const button = {
    hover: {
        scale: 1.3,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 10
        }
    },
    tap: { scale: 0.8 },

}

export const closeButton = {
    initial: { x: -15, y: 50 },
    hover: {
        scale: 1.3,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 10,
        }
    },
    tap: { scale: 0.8 },

}

export const dropIn = {
    hover: { x: -4, y: -4, boxShadow: "8px 8px 4px rgba(0,0,0,0.3)" },
    hidden: { y: '-100vh' },
    visible: {
        y: 0,
        boxShadow: "4px 4px 4px rgba(0,0,0,0.3)",
        transition: { delay: 0.3 }
    },

}