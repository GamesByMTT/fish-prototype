import FishMeshView from "../fishes/FishMesh";
import CannonMesh from "../cannons/CnnMesh";
import FishTexture from '../assets/fish1.png'
import FishTexture2 from '../assets/Fish2.png'
import FishTexture3 from '../assets/Fish3.png'
import FishTexture4 from '../assets/Fish4.png'
import FishTexture5 from '../assets/Fish5.png'
import FishTexture6 from '../assets/Fish6.png'
import CnnTexture from '../assets/cnn.png'
import { useCallback, useEffect, useRef, useState } from "react";
import { dispose, useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { Html } from "@react-three/drei";
import { useGameStore } from '../store/store';

const GameSence = ({cnnSide}) => {

    let amnoRef = useRef()
    const hitRef = useRef(false)
    const gameFishData = useGameStore((state) => state.fishData) 
    const updateUserScore = useGameStore((state) => state.incUserScore) 
    const [scoreVal, setScoreVal] = useState(false)
    // const { numFish } = useGameStore((state) => state.fishData) 
    const [gameState, setGameState] = useState([])
    const updateAmno = useGameStore((state) => state.updateNumAmno)

    const fishRef = useRef()

    // useEffect(() => {
    //     updateAmno()
    // },[userScore])

    useEffect(() => {
        setGameState([...gameFishData])
    },[])

    const sendData = (data) => {
        amnoRef = data
    }

    useFrame(() => {
        // console.log(fishRef.current.getWorldPosition())
        if(hitRef.current){
            // updateUserScore()
        }

    })


    // useEffect(() => {
    //     console.log(gameState)
    //     const len = gameState.length
    //     const data = gameState.map((fData) => {
    //         if(fData.fishIdx === fishIdx){
    //             if(fishIdx+1 === len){

    //             }
    //         }
    //     })
    // }, [gameState])

    const updateGameState = (fishIdx, fishHP) => {
        const newState = gameState.map((obj) => {
          if (obj.fishIdx  === fishIdx) {
            return {...obj, fishHitPts: fishHP-1};
          }
          return obj;
        });
    
        setGameState(newState);
      };

    return (

        <>
        <>
            
            { gameState.map((i, k) => {
            if(i.fishHitPts > 0) {
                return (

                        <RigidBody 
                        name="fishBody"
                        ref={fishRef}
                        linearVelocity={i.fishIdx % 2 === 0 ? [0.42,0,0] : i.fishIdx % 3 === 0 ? [0.42,0.6,0] : [0.6,0,0]}
                        onCollisionEnter={({ other }) => {
                            if(other.rigidBodyObject.name === "amnoBody"){
                                hitRef.current = true;
                                updateGameState(i.fishIdx, i.fishHitPts)
                                updateUserScore()
                                updateAmno()
                            }
                        }}
                        onCollisionExit={({ other }) => {
                            if(other.rigidBodyObject.name === "amnoBody"){
                                
                                hitRef.current = false
                            }
                        }}
                        >
                            <FishMeshView key={k} fishHP={i.fishHitPts} sizeArgs={i.fSize} FishTexture={i.fTexture} meshPos={i.fPos} fishIdx= {i.fishIdx} />
                        </RigidBody>
               
                     
                )}
            else {
                return null;
            }
            } 
            )}
        </>
            { cnnSide === 'right' ? 
            <CannonMesh sendData={sendData} sizeArgs={[1.5,2]}  CnnTexture={CnnTexture} meshPos={[4.3,-2.8,0]} meshPosBtn={[2.5,-2.8,0]} meshPosBtnR={[5.5,-2.8,0]} />
            : <CannonMesh sendData={sendData} sizeArgs={[1.5,2]}  CnnTexture={CnnTexture} meshPosBtn={[-6.4,-2.8,0]} meshPosBtnR={[-3.3,-2.8,0]}  meshPos={[-4.5,-2.8,0]} />
        }
            

        </>
    )
}

export default GameSence;