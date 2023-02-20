import UtilsLayout from "@/components/UtilsLayout"
import { useState } from "react"
import { FaRandom } from "react-icons/fa"

const RandomNumberPage = () => {
    const [number, setNumber] = useState(0)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(100)

    const generateNumber = () => {
        let minInt = parseInt(min);
        let maxInt = parseInt(max);
        return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;

    }
    const displayRandomNumber = () => {
        setNumber(generateNumber())
    }


    return (
        <UtilsLayout>
            <h1><FaRandom className="inline"></FaRandom> Random number Generator</h1>
            <div>
                <div className="text-center mb-3">
                    <span className="text-6xl p-3 border inline-block">{(number).toLocaleString()}</span>
                </div>

                <div className="flex my-3 justify-evenly ">
                    <div className="flex justify-center">
                        Min: <input type="number" className="border text-center ml-1" value={min} onChange={(e) => setMin(e.target.value)}></input>
                    </div>
                    <div className="flex justify-center">
                        Max: <input type="number" className="border text-center ml-1" value={max} onChange={(e) => setMax(e.target.value)}></input>
                    </div>
                </div>

                <div className="text-center" >
                    <button className="btn btn-dark rounded" onClick={displayRandomNumber}><FaRandom className="text-4xl"></FaRandom></button>

                </div>
            </div>



        </UtilsLayout>
    )
}
export default RandomNumberPage