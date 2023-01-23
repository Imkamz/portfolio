import Styles from "../styles/Navbar.module.scss"
import Link from "next/link"
export default function Navbar() {
    return (
        <nav className={Styles.navbar}>
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        about
                    </Link>

                </li>
            </ul>
        </nav>
    )
}