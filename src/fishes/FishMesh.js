import { TextureLoader } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Html } from "@react-three/drei";
import { useGameStore } from "../store/store";

const FishMeshView = ({sizeArgs, FishTexture, meshPos, fishIdx, fishHP}) => {
    const fishmap = useLoader(TextureLoader, FishTexture)
    const gameFishData = useGameStore((state) => state.fishData) 
    const fishRef = useRef()
    // const hpPercent = (fishHP / gameFishData[fishIdx].fishHitPts) * 100
    const [fLife, setFLife] = useState(false)
    const [hpPercent, setHpPercent] = useState()
    const [wPercent, setWPercent] = useState()


    useEffect(() => {
        setHpPercent((fishHP / gameFishData[fishIdx].fishHitPts) * 100)
        setWPercent((hpPercent * 0.1))
        setTimeout(() => {
            (gameFishData[fishIdx].fishHitPts > fishHP) && setFLife(true)
        }, 100);
        setFLife(false)
    },[fishHP, fishIdx, gameFishData, hpPercent])

    return ( 
        <>
        
            <mesh  position={meshPos}>
                <mesh>
                    <pointLight position={[1, 1, 1]} />
                    <planeGeometry attach={'geometry'}  args={sizeArgs}/>
                    <meshBasicMaterial transparent={true} attach={'material'} map={fishmap} />
                </mesh>
                {
                    fLife ? (
                    <Html>
                        <div style={{width: `${wPercent}vw`, backgroundColor: 'red'}} className={`rounded-full h-2 bg-white z-20 mt-20`}>
                        </div>
                    </Html>
                    ) : null
                }

            </mesh>

        </>
    )
}
  
export default FishMeshView;