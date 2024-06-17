import * as THREE from 'three';
import { useLoader, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Environment, useTexture } from '@react-three/drei';

const Sec3D = () => {
  const gltf = useLoader(GLTFLoader, 'untitled2.glb');
  const modelRef = useRef();

  // 회전 애니메이션을 프레임별로 업데이트
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.003; // y축 기준으로 회전
    }
  });
  return (
    <>
      <directionalLight color="white" intensity={1} />
      <primitive ref={modelRef} object={gltf.scene} scale={11} position={[0,-0.2,0]}/>
    </>
  );
};

export default Sec3D;