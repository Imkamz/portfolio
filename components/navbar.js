import Styles from "../styles/Navbar.module.scss"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
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
                        About
                    </Link>
                </li>
                <li>
                    <Link href="https://github.com/Imkamz" target="_blank">
                        <FaGithub></FaGithub>  Github
                    </Link>
                </li>
            </ul>
        </nav>
    )
}