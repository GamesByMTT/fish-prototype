import { Canvas } from "@react-three/fiber";
import GameSence from "./GameScene";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";
import { Html } from "@react-three/drei";
import ScoreText from "../store/updateScore";

const MainThreeScene = ({gameVal, cnnSide}) => {
    return (
        <>
        <Canvas>
            <Suspense>
                <Physics debug={true}>
                    {gameVal === 'play' ? <GameSence cnnSide={cnnSide}/>
                    : gameVal === 'exit' ? null
                    : gameVal === 'cont' ? <GameSence cnnSide={cnnSide}/>  
                    : gameVal === 'pause' ? null : null
                    }
                    
                     {/* <GameSence/> */}
                </Physics>
                    <ScoreText/>
            </Suspense>
        </Canvas>
        </>
    )
}

export default MainThreeScene;