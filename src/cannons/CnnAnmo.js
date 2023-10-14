import { dispose, useFrame, useLoader } from "@react-three/fiber"
import React, { useEffect, useRef, useState } from "react"
import { Scene, TextureLoader } from "three"
import fireTexture from '../assets/Fire.png'
import { RigidBody } from "@react-three/rapier"

const CannonAmno =  ({posX, posY, sizeAmno, firePos}) => {
    const fireMap = useLoader(TextureLoader, fireTexture)
    const fireRef = useRef()
    const rigidRef = useRef()
    const [visAmno, setVisAmno] = useState(true)

    useFrame(() => {
        if(visAmno && rigidRef.current) {
            rigidRef.current.addTorque({ x: 50, y: 1000, z: 0 }, true);
                //   .current.position += [0,1,0]
        }
        // if(visAmno){
        // }
    })



    return (
        <>
        {
        visAmno &&
        <RigidBody name="amnoBody"
        
        linearVelocity={[-firePos*3, 5 ,0]}
        ref={rigidRef}
        type="dynamic"
        mass={2}
        onCollisionEnter={({ other }) => {
            if(other.rigidBodyObject.name === "fishBody"){
                // var node = React.findDOMNode(<AmnoScene/>)
                // var container = node.parentNode
                setVisAmno(false)
                // React.unmountComponentAtNode(<AmnoScene/>)
            }
        }}
        >
        
        
        <mesh position={[posX, posY, 0]}>
            <pointLight position={[1, 1, 1]} />
            <planeGeometry attach={'geometry'}  args={sizeAmno}/>
            <meshBasicMaterial transparent={true} attach={'material'} map={fireMap} />
        </mesh>
        
        </RigidBody>
        }  
        </>
    )
}

export default CannonAmno;