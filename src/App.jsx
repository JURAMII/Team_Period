import React from 'react'
import {Canvas} from '@react-three/fiber';
import {Route, Routes, Link} from 'react-router-dom';
import Header from './components/common/header/header'
import Main from './pages/main/main';
import { Kinfo, Cinfo, Kpro, Cpro, Kticket, Cticket } from './pages/subPages/fesInfo/subFesInfoPages';
import Faq from './pages/subPages/faq/faq';
import Footer from './components/common/footer/footer';
import Three from './pages/main/Sec1 3D/Three'
import MainNoti from './pages/main/Sec6NotiList/mainNoti';
import NotiList from './pages/subPages/NotiSub/notiList';
import PostDetail from './pages/subPages/NotiSub/PostDetail';
import CreatePost from './pages/subPages/NotiSub/CreatePost';


function App() {

    return (
        <>
            <Header />
            <Three />
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path="/mainNoti" element={<MainNoti/>} />
                <Route path="/notiList/category/:key" element={<NotiList/>} />
                <Route path="/notiList/post/:id" element={<PostDetail/>} />
                <Route path="/NotiList/create" element={<CreatePost/>} />
                {/* <Route path="*" element={<Navigate to="/" />} /> */}
                <Route path='/Kinfo' element={<Kinfo/>}/>
               <Route path='/Cinfo' element={<Cinfo/>}/>
               <Route path='/Kprogram' element={<Kpro/>}/>
               <Route path='/Cprogram' element={<Cpro/>}/>
               <Route path='/Kticket' element={<Kticket/>}/>
               <Route path='/Cticket' element={<Cticket/>}/>
               <Route path='/Faq' element = {<Faq/>}/> 
            </Routes>
             <MainGallery />
            <Footer/>
        </>
    );

}

export default App;

