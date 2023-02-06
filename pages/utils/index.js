import Link from "next/link"
import { FaCalculator } from "react-icons/fa"

const UtilsIndex = () => {
    return (
        <div>
            <h1>Utils</h1>
            <ul>
                <li>
                    <Link href="/utils/calculator">
                        <FaCalculator className="inline"></FaCalculator> Calculator
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default UtilsIndex