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