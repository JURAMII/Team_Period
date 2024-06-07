import * as THREE from 'three';
import { useLoader} from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { useRef,useEffect } from 'react';
import {OrbitControls} from '@react-three/drei'
import * as dat from 'dat.gui';


const Sec3D =()=>{

    const { scene, gltf } =useLoader(GLTFLoader,'gungbockgung.glb')
    scene.background = new THREE.Color('lightBlue')
	const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    scene.add( camera );


    const datGui = new dat.GUI()
datGui.add(camera.position,'x',-5,5,0.01).name('camera x');
datGui.add(camera.position,'y',-5,5,0.01).name('camera y');
datGui.add(camera.position,'z',-5,5,0.01).name('camera z');

    return(
        <>
		<ambientLight />
        <primitive object={scene}></primitive>
		<OrbitControls />
        </>
    )

}

export default Sec3D ;

