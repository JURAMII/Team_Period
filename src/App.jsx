import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/common/header/header';
import MainNoti from './pages/main/Sec6NotiList/mainNoti';
import NotiCategoryPosts from './pages/subPages/NotiSub/NotiCategoryPosts';
import PostDetail from './pages/subPages/NotiSub/PostDetail';
import CreatePost from './pages/subPages/NotiSub/CreatePost';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<MainNoti />} />
                <Route path="/notiList/category/:key" element={<NotiCategoryPosts />} />
                <Route path="/notiList/post/:id" element={<PostDetail />} />
                <Route path="/NotiList/create" element={<CreatePost />} />
            </Routes>
        </>
    );
}

export default App;