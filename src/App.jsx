import {Route, Routes, Link} from 'react-router-dom';
import Header from './components/common/header/header'
import Main from './pages/main/main';
import { Kinfo, Cinfo, Kpro, Cpro, Kticket, Cticket } from './pages/subPages/fesInfo/subFesInfoPages';
import Footer from './components/common/footer/footer';

function App() {

  return (
    <>
    <Header><Link to='/'></Link></Header>
    <main>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/Kinfo' element={<Kinfo/>}/>
      <Route path='/Cinfo' element={<Cinfo/>}/>
      <Route path='/Kprogram' element={<Kpro/>}/>
      <Route path='/Cprogram' element={<Cpro/>}/>
      <Route path='/Kticket' element={<Kticket/>}/>
      <Route path='/Cticket' element={<Cticket/>}/>
    </Routes>
    </main>
    <Footer/>
    </>
  )
}

export default App;
