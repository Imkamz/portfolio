import Link from "next/link"
import { FaCalculator, FaRandom, FaDice } from "react-icons/fa"
import { BiJoystick } from "react-icons/bi"


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
                <li>
                    <Link href="/utils/random">
                        <FaRandom className="inline"></FaRandom> Random Number Generator
                    </Link>
                </li>
                <li>
                    <Link href="/utils/rps">
                        <BiJoystick className="inline"></BiJoystick> Rock Paper Scissors
                    </Link>
                </li>
                <li>
                    <Link href="/utils/dice">
                        <FaDice className="inline"></FaDice> Dice
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default UtilsIndex