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
        </Routes>
      )}
      <Footer />
    </>
  );
}

export default App;
