import React from 'react'
import {Canvas} from '@react-three/fiber';
import {Route, Routes, Link} from 'react-router-dom';
import Header from './components/common/header/header'
import Sec3D from './pages/main/Sec1 3D/Sec3D'
import Main from './pages/main/main';
import { Kinfo, Cinfo, Kpro, Cpro, Kticket, Cticket } from './pages/subPages/fesInfo/subFesInfoPages';
import Faq from './pages/subPages/faq/faq';
import Footer from './components/common/footer/footer';

import Sec3D from './pages/main/Sec1 3D/Sec3D';
import {Canvas} from '@react-three/fiber';
import MainNoti from './pages/main/Sec6NotiList/mainNoti';
import NotiCategoryPosts from './pages/subPages/NotiSub/NotiCategoryPosts';
import PostDetail from './pages/subPages/NotiSub/PostDetail';
import CreatePost from './pages/subPages/NotiSub/CreatePost';
import Way from './pages/main/way/Way'


function App() {
  
 return (
        <>
            <Header />
            {/* <Canvas>
            <Sec3D />
           </Canvas> */}
            <Routes>
                <Route path="/" element={<MainNoti/>} />
                <Route path="/notiList/category/:key" element={<NotiCategoryPosts/>} />
                <Route path="/notiList/post/:id" element={<PostDetail/>} />
                <Route path="/NotiList/create" element={<CreatePost/>} />
                {/* <Route path="*" element={<Navigate to="/" />} /> */}
                <Route path='/' element={<Main/>}/>
                <Route path='/Kinfo' element={<Kinfo/>}/>
               <Route path='/Cinfo' element={<Cinfo/>}/>
               <Route path='/Kprogram' element={<Kpro/>}/>
               <Route path='/Cprogram' element={<Cpro/>}/>
               <Route path='/Kticket' element={<Kticket/>}/>
               <Route path='/Cticket' element={<Cticket/>}/>
               <Route path='/Faq' element = {<Faq/>}/> 
            </Routes>
             <MainGallery />
             <Way />
            <Footer/>
        </>
    );

}

export default App;

