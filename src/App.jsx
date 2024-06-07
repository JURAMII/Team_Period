import './reset.css'
import '../src/common.css'
import Header from './components/common/header/header';
import Footer from './components/common/footer/footer';
import Sec3D from './pages/main/Sec3D';
import {Canvas} from '@react-three/fiber';

function App() {

  return (
    <>
    <Header />
    <main>
      <Canvas><Sec3D /></Canvas>
      
    </main>
    <Footer />

    </>
  )
}

export default App
