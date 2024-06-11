import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/common/header/header";
import Footer from "./components/common/footer/footer";
import Three from "./pages/main/Sec1 3D/Three";
import MainNoti from "./pages/main/Sec6NotiList/mainNoti";
import NotiCategoryPosts from "./pages/subPages/NotiSub/NotiCategoryPosts";
import PostDetail from "./pages/subPages/NotiSub/PostDetail";
import CreatePost from "./pages/subPages/NotiSub/CreatePost";
import MainGallery from "./pages/main/Sec7_Gallery/mainGallery";
import AllMenuPage from "./components/common/allMenuPage/allMenu";
import DetailPage from "./pages/subPages/gallery/subGalleryDetaill";
import Gallery from "./pages/subPages/gallery/gallery";

function App() {
  return (
    <>
      {/* <AllMenuPage /> */}
      <Header />
      {/* <Three /> */}
      <Routes>
        <Route path="/" element={<MainGallery />} />
        <Route path="/Gallery/" element={<Gallery />} />
        <Route path="/Gallery/detail/:id" element={<DetailPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
