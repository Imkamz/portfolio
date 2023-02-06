import UtilsLayout from "@/components/UtilsLayout"
import { useState } from "react"
import { FaCalculator, FaDivide, FaMinus, FaPlus, FaTimes } from "react-icons/fa"

const CalculatorPage = () => {
    const [numbers, setNumbers] = useState("")
    const [finalTotal, setFinalTotal] = useState("....")

    const sumNumbers = () => {
        const nums = getNumberArray();
        let total = nums[0]
        for (let i = 1; i < nums.length; i++) {
            total += nums[i]
        }
        setFinalTotal(total)
        return total
    }

    const multiplyNumbers = () => {
        const nums = getNumberArray();
        let total = nums[0]
        for (let i = 1; i < nums.length; i++) {
            total *= nums[i]
        }
        setFinalTotal(total)
        return total
    }

    const minusNumbers = () => {
        const nums = getNumberArray();
        let total = nums[0]
        for (let i = 1; i < nums.length; i++) {
            total -= nums[i]
        }
        setFinalTotal(total)
        return total
    }

    const divideNumbers = () => {
        const nums = getNumberArray();
        let total = nums[0]
        for (let i = 1; i < nums.length; i++) {
            total /= nums[i]
        }
        setFinalTotal(total)
        return total
    }




    const getNumberArray = () => {

        let numberArray = numbers.split("\n")
            .filter((e) => { return e.trim() !== "" })
            .map((e) => { return parseFloat(e) })
        console.log(numberArray)
        return numberArray
    }
    const getFirstNumber = () => {
        return getNumberArray()[0]
    }

    return (
        <UtilsLayout>
            <h1><FaCalculator className="inline"></FaCalculator> Calculator</h1>

            <div className="flex justify-center py-4">
                <div className="">
                    <textarea className="border-1 p-2 border-gray-400 shadow rounded"
                        value={numbers}
                        rows={8}
                        onChange={e => setNumbers(e.target.value)}></textarea>
                    <h2>
                        <strong>Total:</strong> {(finalTotal).toLocaleString()}</h2>
                </div>
                <div>
                    <div className="flex justify-center">
                        <button className="btn btn-dark btn-calc block" onClick={sumNumbers}>
                            <FaPlus></FaPlus>
                        </button>
                        <button className="btn btn-red btn-calc block" onClick={multiplyNumbers}>
                            <FaTimes></FaTimes>
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <button className="btn btn-green btn-calc block" onClick={minusNumbers}>
                            <FaMinus></FaMinus>
                        </button>
                        <button className="btn btn-blue btn-calc block" onClick={divideNumbers}>
                            <FaDivide></FaDivide>
                        </button>
                    </div>
                </div>
            </div>
        </UtilsLayout>
    )
}
export default CalculatorPage