import './reset.css'
import '../src/common.css'
import Header from './components/common/header/header';
import Footer from './components/common/footer/footer';
import Sec3D from './pages/main/Sec1 3D/Sec3D';
import {Canvas} from '@react-three/fiber';
import Sec3D from './pages/main/Sec1 3D/Sec3D';


function App() {

  return (
    <>
    <Header />
    <Canvas>
      <Sec3D />
    </Canvas>
    </>
  )
}

export default App
