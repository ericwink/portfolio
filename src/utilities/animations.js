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
    hover: { scale: 1.3 },
    tap: { scale: 0.8 },
    transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
    }
}