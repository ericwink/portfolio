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
        scale: 1.2,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 10
        }
    },
    tap: { scale: 0.8 },
}

export const contact = {
    hover: {
        scale: 1.1,
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
        scale: 1.2,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 10,
        }
    },
    tap: { scale: 0.8 },

}

export const dropIn = {
    hover: { x: -4, y: -4, boxShadow: "10px 10px 4px rgba(0,0,0,0.3)" },
    hidden: { y: '-100vh' },
    visible: {
        y: 0,
        boxShadow: "6px 6px 4px rgba(0,0,0,0.3)",
        transition: { delay: 0.3 }
    },
}

export const shortDrop = {
    hidden: { opacity: 0, y: -30 },
    visible: i => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2
        }
    })
}

export const leftEnter = {
    hidden: { opacity: 0, x: '-100%' },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.5
        }
    }
}
