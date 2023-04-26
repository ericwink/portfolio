import styles from './style.module.css'

const Modal = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null

    return (
        <div className={styles.background} onClick={onClose}>
            <button className={styles.button} onClick={onClose}>Close</button>
            <div className={styles.modalContent}>
                {children}
            </div>
        </div>
    )
}

export default Modal;