import {Route, Routes, Link} from 'react-router-dom';

import Header from './components/common/header/header';
import Footer from './components/common/footer/footer';
import MainGallery from './pages/main/Sec7_Gallery/mainGallery';

function App() {

  return (
    <>
      <Header />
      <MainGallery />
      <Footer />
      {/* <FesInfoStart/> */}
      {/* <FesInfo/> */}
      {/* <SubFesInfo/> */}
      <Faq/>
  </>
  )
}

export default App;
