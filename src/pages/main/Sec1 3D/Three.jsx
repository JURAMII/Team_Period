import {Canvas} from '@react-three/fiber';
import Sec3D from './Sec3D';
import "./three.css";

const Three = ()=>{
    
   return(
   <>
   <div className='txtWrap'>
        <h2>BRIGHT BRIGHT BRIGHT BRIGHT BRIGHT</h2>
   </div>
   <div className='threeDWrap'>
   <Canvas 
   style={{ background: "black"}}
   camera={{ fov: 50, position: [1, 1, 2] }}>
        <Sec3D />
        </Canvas>
   </div>

    </>
   )
}

export default Three;