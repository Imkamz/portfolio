import ComputerGuess from "@/components/computer-guess"
import Dice from "@/components/dice"
import UtilsLayout from "@/components/UtilsLayout"
import { useState } from "react"
import { FaDice } from "react-icons/fa"
import { GiPaper, GiRock, GiScissors } from "react-icons/gi"
export const GUESS_WAITING = -1
export const GUESS_ROCK = 1
export const GUESS_PAPER = 2
export const GUESS_SCISSORS = 3

const RockPaperScissors = () => {



    const [result, setResult] = useState("waiting")
    const [score, setScore] = useState(0)
    const [computerGuess, setComputerGuess] = useState(GUESS_WAITING)
    const win = () => {
        setResult("Win")
        setScore(score + 1)
    }
    const lose = () => {
        setResult("Lose")
        setScore(score - 1)
    }

    const play = (guess) => {
        const generatedGuess = generateComputerGuess()
        setComputerGuess(generatedGuess)
        console.log(guess, generatedGuess)
        if (guess == generatedGuess) {
            setResult("Draw")
            return
        }
        if (guess == GUESS_ROCK) {

            if (generatedGuess == GUESS_PAPER) {
                lose()
            }
            else if (generatedGuess == GUESS_SCISSORS) {
                win()
            }
        }
        else if (guess == GUESS_PAPER) {
            if (generatedGuess == GUESS_ROCK) {
                win()
            }

            else if (generatedGuess == GUESS_SCISSORS) {
                lose()
            }
        }
        else if (guess == GUESS_SCISSORS) {
            if (generatedGuess == GUESS_ROCK) {
                lose()
            }
            else if (generatedGuess == GUESS_PAPER) {
                win()
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
            <div className="max-w-xl mx-auto">
                <div className="flex justify-evenly">
                    <div className="text-2xl" >
                        {result}
                    </div>
                    <div className="text-2xl">
                        <strong>score</strong> {(score).toLocaleString()}
                    </div>

                </div>
                <div>
                    <ComputerGuess guess={computerGuess}></ComputerGuess>
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

            </div>
        </UtilsLayout>
    )
}
export default RockPaperScissors