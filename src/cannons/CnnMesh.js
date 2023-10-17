import { Material, TextureLoader } from "three";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import fireTexture from '../assets/Fire.png'
import { Html } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import useKeyboard from "../hooks/useKeyboard";
import CannonAmno from "./CnnAnmo";
import useMousePosition from "../controls/UseMouse";
import { useGameStore } from "../store/store";


const CannonMesh = ({sizeArgs, CnnTexture, meshPos, meshPosBtn, meshPosBtnR, sendData}) => {
    const cnnMap = useLoader(TextureLoader, CnnTexture)
    const cnnFireRef = useRef()
    const amnoRef = useRef()
    const keyMap = useKeyboard()
    const mousePos = useMousePosition()
    const [count, setCount] = useState(0)
    const [amnoCount, setAmnoCount] = useState([])
    const [firePos, setFirePos] = useState()
    const [stopFire, setStopFire] = useState(true)
    const updateUserScore = useGameStore((state) => state.decUserScore)
    const updateAmno = useGameStore((state) => state.decNumAmno)
    const userScore = useGameStore((state) => state.userScore) 
    const numAmno = useGameStore((state) => state.numAmno) 
    
    const [fireState, setFireState] = useState(false)

    useFrame(() => {
        if( keyMap['Space']){
            console.log('space')
            setFireState(true) 
            // sendData(amnoRef)

        }
        cnnFireRef.current.rotation.z = -Math.PI/180 * (mousePos.x/8.66 - 75)
        setTimeout(() => {
            setFireState(false)
        }, 600);
    })

    useEffect(() => {
        if(stopFire){

            setTimeout(() => {
                setCount(count +1)
                setAmnoCount([...amnoCount, {
                    count: count,
                    firePos: firePos
                } ]);
            }, 350);
        }

        setFireState(false)
      
    },[fireState, stopFire])

    useEffect(() => {
        updateUserScore()
        
        updateAmno()
        setTimeout(() => {
            if ( count > 40 && amnoCount.length > 40  ) {
             
             setAmnoCount(amno => amno.filter((_, i) => i == 0))
            }  else {
             return null
            }
            
             
         }, 5000)
         console.log(amnoCount)
    },[count])

    useEffect(() => {
        setFirePos(-Math.PI/180 * (mousePos.x/8.66 - 75))
    },[mousePos])

    useEffect(() => {
        if(numAmno < 1 && userScore < 1 ){
            setStopFire(false)
        }
    },[userScore,numAmno])




    return (
        <>
            <mesh ref={cnnFireRef} position={meshPos}>
                <pointLight position={[1, 1, 1]} />
                <planeGeometry attach={'geometry'}  args={sizeArgs}/>
                    <meshBasicMaterial transparent={true} attach={'material'} map={cnnMap} />
            </mesh>
            {amnoCount.length > 1 ? 
                amnoCount.map((m,k) => (
                <mesh rotation={[0,0,m.firePos]} position={meshPos}>
                    <CannonAmno firePos={m.firePos} key={k} posX={-0.36} posY={2} sizeAmno={[.6,2.8]} />
                </mesh>
                ))
            : null}
            <Html position={meshPosBtn}>
                <div className="btnL"></div>
            </Html>
            <Html position={meshPosBtnR}>
                <div className="btnR"></div>
            </Html>
        </>
    )
}
  
export default CannonMesh;