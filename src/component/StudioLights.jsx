import { Environment, Lightformer } from '@react-three/drei'
import React from 'react'
import { Group } from 'three/examples/jsm/libs/tween.module.js'

const StudioLights = () => {
  return (
    <group name='lights'>
        <Environment resolution={256}>
            <group>
                <Lightformer 
                    form="rect"
                    intensity={10}
                    position={[-10,5,-5]}
                    scale={10}
                    rotateY={Math.PI / 2}
                />
                <Lightformer 
                    form="rect"
                    intensity={10}
                    position={[10,0,1]}
                    scale={10}
                    rotateY={Math.PI / 2}
                />
            </group>

        </Environment>
        sp

    </group>
    
  )
}

export default StudioLights
