import RockPaperScissors, { GUESS_PAPER, GUESS_ROCK, GUESS_SCISSORS } from "@/pages/utils/rps"
import { GiPaper, GiRock, GiScissors, GiThink } from "react-icons/gi"

const ComputerGuess = ({ guess }) => {

    //   const [number, setNumber] = useState(num)
    //   useEffect(() => {
    //      setNumber(num)
    //  })
    let icon = <GiThink className="inline"></GiThink>
    switch (guess) {
        case GUESS_ROCK:
            icon = <GiRock className="inline"></GiRock>
            break
        case GUESS_SCISSORS:
            icon = <GiScissors className="inline"></GiScissors>
            break
        case GUESS_PAPER:
            icon = <GiPaper className="inline"></GiPaper>
            break

    }
    return (
        <div className="text-center text-5xl p-4">
            {icon}
        </div>

    )

}
export default ComputerGuess

