import './reset.css'
import React from 'react'
import {Route, Routes, Link} from 'react-router-dom';
import Header from './components/common/header/header'
import Main from './pages/main/main';
import { Kinfo, Cinfo, Kpro, Cpro, Kticket, Cticket } from './pages/subPages/fesInfo/subFesInfoPages';
import Faq from './pages/subPages/faq/faq';
import Footer from './components/common/footer/footer';
import MainNoti from './pages/main/Sec6NotiList/mainNoti';
import NotiList from './pages/subPages/NotiSub/notiList';
import PostDetail from './pages/subPages/NotiSub/PostDetail';
import CreatePost from './pages/subPages/NotiSub/CreatePost';
import ResPage from './pages/subPages/nearInfo/ResPage';
import {Way,Way2} from './pages/subPages/way/Way';



function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/Way' element={<Way />} />
                <Route path='/Way2' element={<Way2 />} />
                <Route path='/ResPage' element={<ResPage />} />
            </Routes>
            <Footer/>
        </>
    );

}

export default App;

