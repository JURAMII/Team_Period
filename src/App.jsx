import {Route, Routes, Link} from 'react-router-dom';

import Header from './components/common/header/header';
import Footer from './components/common/footer/footer';
import MainGallery from './pages/main/Sec7_Gallery/mainGallery';
import SubFesInfo from './pages/subPages/fesInfo/subFesInfo';
import Faq from './pages/subPages/faq/faq';
import FesInfo from './pages/main/sec3-5_fesInfo/fesInfo'

function App() {

  return (
    <>
      {/* <Header /> */}
      {/* <MainGallery /> */}
      {/* <FesInfoStart/> */}
      <FesInfo/>
      {/* <SubFesInfo/> */}
      <Faq/>
      {/* <Footer /> */}
    </>
  )
}

export default App;
