import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/common/header/header';
import Footer from './components/common/footer/footer';
import Main from './pages/main/main';
import AllMenuPage from './components/common/allMenuPage/allMenu';

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false); // 메뉴 가시성을 관리하는 상태

  return (
    <>
      <Header setIsMenuVisible={setIsMenuVisible} /> {/* Header에 상태 설정 함수를 전달 */}
      {isMenuVisible ? (
        <AllMenuPage setIsMenuVisible={setIsMenuVisible} /> // 전체 메뉴가 보이는 상태일 때 AllMenuPage를 렌더링
      ) : (
        <Routes>
               <Route path="/" element={<Main />} />
               <Route path="/notiList/category/:key" element={<NotiList/>} />
               <Route path="/notiList/post/:id" element={<PostDetail/>} />
               <Route path="/NotiList/create" element={<CreatePost/>} />
               <Route path='/Kinfo' element={<Kinfo/>}/>
               <Route path='/Cinfo' element={<Cinfo/>}/>
               <Route path='/Kprogram' element={<Kpro/>}/>
               <Route path='/Cprogram' element={<Cpro/>}/>
               <Route path='/Kticket' element={<Kticket/>}/>
               <Route path='/Cticket' element={<Cticket/>}/>
               <Route path='/Faq' element = {<Faq/>}/>
          
        </Routes>
      )}
      <Footer />
    </>
  );
}

export default App;
