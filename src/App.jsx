import {Route, Routes, Link} from 'react-router-dom';

import Header from './components/common/header/header';
import Footer from './components/common/footer/footer';
import MainNoti from './pages/main/Sec6_NotiList/mainNoti';
import Sec1 from './components/common/main/sec1';
import MainGallery from './pages/main/Sec7_Gallery/mainGallery';

function App() {

  return (
    <>
      <Header />
      <Sec1 />
      <MainNoti />
      <MainGallery />
      <Footer />
    </>
  )
}

export default App;
