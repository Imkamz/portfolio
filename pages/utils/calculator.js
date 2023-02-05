import UtilsLayout from "@/components/UtilsLayout"
import { useState } from "react"

const CalculatorPage = () => {
    const [numbers, setNumbers] = useState()
    const [finalTotal, setFinalTotal] = useState("....")
    const sumNumbers = () => {
        console.log("sumnumbers", numbers)
        let total = 0
        getNumberArray().forEach(element => {
            total += element

        });
        setFinalTotal(total)
        return total
    }

    const multiplyNumbers = () => {
        console.log("multiplynumbers", numbers)
        let total = 1
        getNumberArray().forEach(element => {
            total *= element

        });
        setFinalTotal(total)
        return total



    }
    const minusNumbers = () => {
        console.log("minusnumbers", numbers)
        let total = 1
        getNumberArray().forEach(element => {
            total -= element

        });
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

    return (
        <UtilsLayout>
            <h1>Calculator</h1>
            <hr />
            <div>
                <textarea
                    value={numbers}
                    onChange={e => setNumbers(e.target.value)}></textarea>
                <button onClick={sumNumbers}>sum</button>
                <button onClick={multiplyNumbers}>multiply</button>
                <button onClick={minusNumbers}>minus</button>
                <h2>{finalTotal}</h2>
            </div>
        </UtilsLayout>
    )
}
export default CalculatorPage