import Link from "next/link"

const UtilsLayout = ({ children }) => {
    return (
        <div>
            <Link href="/utils">
                All utils
            </Link>
            {children}
        </div>
    )
}
export default UtilsLayout