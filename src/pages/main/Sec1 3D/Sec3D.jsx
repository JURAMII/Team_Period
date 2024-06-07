import * as THREE from 'three';
import { useLoader} from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { useRef,useEffect } from 'react';
import {OrbitControls} from '@react-three/drei'
import { Environment, useTexture } from '@react-three/drei';

const Sec3D =()=>{
    const gltf = useLoader(GLTFLoader,'gungbockgung.glb')
	const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.0001, 100 );

    return(
        <>
		<ambientLight intensity={1}/>
        <primitive object={gltf.scene}></primitive>
		<Environment 
        files={'./golden_bay_4k.exr'} 
        background
        blur={0.05}/>
		<OrbitControls />
        </>
    )

}

export default Sec3D ;

