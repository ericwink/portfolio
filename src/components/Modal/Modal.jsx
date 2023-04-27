import styles from './style.module.css'

const Modal = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null

    return (
        <div className={styles.background} onClick={onClose}>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                <button className={styles.button} onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    )
}

export default Modal;