import Dice from "@/components/dice"
import UtilsLayout from "@/components/UtilsLayout"
import { useState } from "react"
import { FaDice } from "react-icons/fa"
import { GiPaper, GiRock, GiScissors } from "react-icons/gi"


const CalculatorPage = () => {

    const GUESS_ROCK = 1
    const GUESS_PAPER = 2
    const GUESS_SCISSORS = 3

    const [result, setResult] = useState("waiting")

    const play = (guess) => {
        const computerGuess = generateComputerGuess()
        console.log(guess, computerGuess)
        if (guess == computerGuess) {
            setResult("Draw")
            return
        }
        if (guess == GUESS_ROCK) {

            if (computerGuess == GUESS_PAPER) {
                setResult("Lose")
            }
            else if (computerGuess == GUESS_SCISSORS) {
                setResult("Win")
            }
        }
        else if (guess == GUESS_PAPER) {
            if (computerGuess == GUESS_ROCK) {
                setResult("Win")
            }

            else if (computerGuess == GUESS_SCISSORS) {
                setResult("Lose")
            }
        }
        else if (guess == GUESS_SCISSORS) {
            if (computerGuess == GUESS_ROCK) {
                setResult("Lose")
            }
            else if (computerGuess == GUESS_PAPER) {
                setResult("Win")
            }

        }
    }

    const [diceNumber, setDiceNumber] = useState(2)

    const generateComputerGuess = () => {
        let minInt = 1;
        let maxInt = 3;
        return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;

    }

    const rollTheDice = () => {
        setDiceNumber(generateComputerGuess())
    }


    return (
        <UtilsLayout>
            <h1><FaDice className="inline"></FaDice> Dice game</h1>
            <div className="text-center text-3xl" >
                {result}
            </div>
            <div className="flex items-center justify-center" >
                <button className="btn btn-green rounded" onClick={(e) => play(GUESS_ROCK)}>
                    <GiRock className="text-4xl"></GiRock>
                </button>
                <button className="btn btn-dark rounded" onClick={(e) => play(GUESS_PAPER)}>
                    <GiPaper className="text-4xl"></GiPaper>
                </button>
                <button className="btn btn-red rounded" onClick={(e) => play(GUESS_SCISSORS)}>
                    <GiScissors className="text-4xl"></GiScissors>
                </button>

            </div>


        </UtilsLayout>
    )
}
export default CalculatorPage