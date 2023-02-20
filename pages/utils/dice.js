import Dice from "@/components/dice"
import UtilsLayout from "@/components/UtilsLayout"
import { useState } from "react"
import { FaDice } from "react-icons/fa"

const CalculatorPage = () => {
    const [diceNumber, setDiceNumber] = useState(2)



    const generateNumber = () => {
        let minInt = 1;
        let maxInt = 6;
        return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;

    }

    const rollTheDice = () => {
        setDiceNumber(generateNumber())
    }


    return (
        <UtilsLayout>
            <h1><FaDice className="inline"></FaDice> Dice game</h1>
            <div className="text-center" >
                <Dice num={diceNumber}></Dice>
            </div>
            <div className="text-center" >
                <button className="btn btn-dark rounded" onClick={rollTheDice}>
                    <FaDice className="text-4xl"></FaDice>
                </button>

            </div>


        </UtilsLayout>
    )
}
export default CalculatorPage