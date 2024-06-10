<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/header/header';
import MainNoti from './pages/main/Sec6NotiList/mainNoti';
import NotiCategoryPosts from './pages/subPages/NotiSub/NotiCategoryPosts';
import PostDetail from './pages/subPages/NotiSub/PostDetail';
import CreatePost from './pages/subPages/NotiSub/CreatePost';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/Team_Period" element={<MainNoti/>} />
                <Route path="/Team_Period/notiList/category/:key" element={<NotiCategoryPosts/>} />
                <Route path="/Team_Period/notiList/post/:id" element={<PostDetail/>} />
                <Route path="/Team_Period/NotiList/create" element={<CreatePost/>} />
                {/* <Route path="*" element={<Navigate to="/" />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
=======
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
    <Header />




    <Footer />
    </>
  )
}

export default App;
>>>>>>> 5538fd9bdadfbec950d81638bb2c4524d25a810a
