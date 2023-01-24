import styles from '@/styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                <span>PokeNext</span> &copy; 2023
            </p>
            <p className={styles.author}>
                by Raniere Lima
            </p>

        </footer>
    )
}