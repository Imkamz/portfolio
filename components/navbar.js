import Link from "next/link"
export default function Navbar() {
    return (
        <div>
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
        </div>
    )
}