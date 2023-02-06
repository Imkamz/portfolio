import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"

const UtilsLayout = ({ children }) => {
    return (
        <div>
            <Link href="/utils">
                <FaArrowLeft className="inline"></FaArrowLeft> All utils
            </Link>
            {children}
        </div>
    )
}
export default UtilsLayout