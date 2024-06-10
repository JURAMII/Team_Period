import React from 'react'
import {Route, Routes, Link} from 'react-router-dom';
import Header from './components/common/header/header';
import Footer from './components/common/footer/footer';
import Three from './pages/main/Sec1 3D/Three'
import MainNoti from './pages/main/Sec6NotiList/mainNoti';
import NotiList from './pages/subPages/NotiSub/notiList';
import PostDetail from './pages/subPages/NotiSub/PostDetail';
import CreatePost from './pages/subPages/NotiSub/CreatePost';
// import MainGallery from './pages/main/Sec7_Gallery/mainGallery';


function App() {

    return (
        <>
            <Header />
            <Three />
			<MainNoti/>
            <Routes>
                <Route path="/" element={<MainNoti/>} />
                <Route path="/notiList/category/:key" element={<NotiList/>} />
                <Route path="/notiList/post/:id" element={<PostDetail/>} />
                <Route path="/NotiList/create" element={<CreatePost/>} />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;

