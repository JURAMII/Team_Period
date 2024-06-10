import './reset.css'
import '../src/common.css'
import './App.css'
import Header from './components/common/header/header';
import Footer from './components/common/footer/footer';
import Sec3D from './pages/main/Sec1 3D/Sec3D';
import {Canvas} from '@react-three/fiber';
import Way from './pages/subPages/way/Way'
import Way2 from './pages/subPages/way/Way2'
import {Route, Routes, Link} from 'react-router-dom';
import MainGallery from './pages/main/Sec7_Gallery/mainGallery';

function App() {

  return (
    <>
    <Header />
    <Canvas>
          <Sec3D />
    </Canvas>


    <Footer />
    </>
  )
}

export default App;
