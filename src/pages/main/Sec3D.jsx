import * as THREE from 'three';
import { useRef,useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const Sec3D =()=>{
	const gltf = useLoader(GLTFLoader, 'gungbockgung.glb')
	const ref = useRef();
    useEffect(()=>{
const width = window.innerWidth, height = window.innerHeight; //화면의 크기

// init

const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10 );
camera.position.z = 1;

const scene = new THREE.Scene(); //무대배경


const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( width, height );
renderer.setAnimationLoop( animation );
ref.current.appendChild(renderer.domElement);

// animation

function animation( ) {

	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.01;

	renderer.render( scene, camera ); //화면에 띄우는것
}

window.addEventListener('resize',()=>{
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth/ window.innerHeight;
	camera.updateProjectionMatrix()
})
})
return(
	<div ref={ref}></div>
)}

export default Sec3D ;

