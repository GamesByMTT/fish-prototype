import { Html } from "@react-three/drei";
import { useGameStore } from "./store"
import { useEffect } from "react";

const ScoreText = () => {
    const userScore = useGameStore((state) => state.userScore) 
    const numAmno = useGameStore((state) => state.numAmno) 
    
    // useEffect(() =>)
    
    return (
        <Html>
                <h1 className='txtScore'>{userScore < 0 ? 0 : userScore }</h1>
                <h1 className='txtScoreH'>Score</h1>
                <h1 className='txtAmno'>{(userScore < 2 && numAmno < 0) ? 0 : (numAmno<0 && userScore > 0) ? Math.round(userScore/3) : numAmno  }</h1>
                <h1 className='txtAmnoH'>Amno</h1>
        </Html>
    )
}

export default ScoreText;