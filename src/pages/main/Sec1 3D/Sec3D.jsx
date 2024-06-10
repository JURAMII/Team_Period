import * as THREE from 'three';
import { useLoader} from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { useRef,useEffect } from 'react';
import {OrbitControls} from '@react-three/drei'
import * as dat from 'dat.gui';


const Sec3D =()=>{
    //씬
    let camera, scene, renderer;
    
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x000000 );

    const { gung } =useLoader(GLTFLoader,'gungbockgung.glb')

    //카메라
	const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    scene.add( camera );

    // 조명
    const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x8d8d8d, 3 );
				hemiLight.position.set( 0, 100, 0 );
				scene.add( hemiLight );
    const dirLight = new THREE.DirectionalLight( 0xffffff, 3 );
				dirLight.position.set( - 0, 40, 50 );
				dirLight.castShadow = true;
				dirLight.shadow.camera.top = 50;
				dirLight.shadow.camera.bottom = - 25;
				dirLight.shadow.camera.left = - 25;
				dirLight.shadow.camera.right = 25;
				dirLight.shadow.camera.near = 0.1;
				dirLight.shadow.camera.far = 200;
				dirLight.shadow.mapSize.set( 1024, 1024 );
				scene.add( dirLight );    


    return(
        <>
		<ambientLight />
        <primitive object={gung.scene} scale={50}></primitive>
		<OrbitControls />
        </>
    )

}

export default Sec3D ;

