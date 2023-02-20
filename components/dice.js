import { useEffect, useState } from "react"
import { FaDiceFive, FaDiceFour, FaDiceOne, FaDiceSix, FaDiceThree, FaDiceTwo } from "react-icons/fa"

const Dice = ({ num }) => {
    const [number, setNumber] = useState(num)
    useEffect(() => {
        setNumber(num)
    })

    let icon = <FaDiceOne className="inline"></FaDiceOne>
    switch (num) {
        case 2:
            icon = <FaDiceTwo className="inline"></FaDiceTwo>
            break;
        case 3:
            icon = <FaDiceThree className="inline"></FaDiceThree>
            break;
        case 4:
            icon = <FaDiceFour className="inline"></FaDiceFour>
            break;
        case 5:
            icon = <FaDiceFive className="inline"></FaDiceFive>
            break;
        case 6:
            icon = <FaDiceSix className="inline"></FaDiceSix>
            break;
    }

    return (
        <div className="text-center mb-4">
            <span className="text-6xl">{icon}</span>
        </div>
    )
}

export default Dice