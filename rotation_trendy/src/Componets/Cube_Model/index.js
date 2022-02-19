import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';



function Mesh () {
 const myMesh = React.useRef();
    useFrame(({clock})=>{
        const a = clock.getElapsedTime();
        myMesh.current.rotation.x = 180;
        myMesh.current.rotation.y = a;
        myMesh.current.rotation.z = a;

    });
    return (
<mesh ref={myMesh}>
                    <boxBufferGeometry args={[3,3,3]} />
                    <meshPhongMaterial />
                </mesh>

    )
}


function Cube (){
   
    return (
        <div id='="canvas-container'>
            <Canvas >
                <ambientLight intensity={0.1} />
                <directionalLight color="white" position={[0,0,5]}/>
                <Mesh/>
                </Canvas>
        </div>
    )
}

export default Cube;