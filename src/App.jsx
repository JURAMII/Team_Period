import './reset.css'
import '../src/common.css'
import './App.css'
import Header from './components/common/header/header';
import Footer from './components/common/footer/footer';
import Three from './pages/main/Sec1 3D/Three'
import {Route, Routes, Link} from 'react-router-dom';
import MainGallery from './pages/main/Sec7_Gallery/mainGallery';

function App() {

  return (
    <>
    <Header />
    <Three />
    <Footer />
    </>
  )
}

export default App;
