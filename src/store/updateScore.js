import { Html } from "@react-three/drei";
import { useGameStore } from "./store"

const ScoreText = () => {
    const userScore = useGameStore((state) => state.userScore) 
    const numAmno = useGameStore((state) => state.numAmno) 
    return (
        <Html>
                <h1 className='txtScore'>{userScore < 0 ? 0 : userScore }</h1>
                <h1 className='txtScoreH'>Score</h1>
                <h1 className='txtAmno'>{(userScore < 0 && numAmno < 0) ? 0 : numAmno + Math.round(userScore/3) < 1 ? 0 : numAmno + Math.round(userScore/3)}</h1>
                <h1 className='txtAmnoH'>Amno</h1>
        </Html>
    )
}

export default ScoreText;