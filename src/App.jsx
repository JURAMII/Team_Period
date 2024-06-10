import React from 'react'
import {Route, Routes, Link} from 'react-router-dom';
import Header from './components/common/header/header'
import Footer from './components/common/footer/footer';



function App() {

    return (
        <>
            <Header />
            <Routes>
               {/* <Route path="/mainNoti" element={<MainNoti/>} />
               <Route path="/notiList/category/:key" element={<NotiList/>} />
               <Route path="/notiList/post/:id" element={<PostDetail/>} />
               <Route path="/NotiList/create" element={<CreatePost/>} />
               <Route path='/Kinfo' element={<Kinfo/>}/>
               <Route path='/Cinfo' element={<Cinfo/>}/>
               <Route path='/Kprogram' element={<Kpro/>}/>
               <Route path='/Cprogram' element={<Cpro/>}/>
               <Route path='/Kticket' element={<Kticket/>}/>
               <Route path='/Cticket' element={<Cticket/>}/>
               <Route path='/Faq' element = {<Faq/>}/>  */}
            </Routes>
            <Footer/>
        </>
    );

}

export default App;

