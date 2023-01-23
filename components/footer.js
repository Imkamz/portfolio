import Styles from "../styles/Footer.module.scss"
export default function Footer() {
    return (
        <footer className={Styles.footer}>
            Kamari Lee &copy; {new Date().getFullYear()}
        </footer>
    )
}