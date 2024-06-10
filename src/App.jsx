import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/header/header";
import Footer from "./components/common/footer/footer";
import MainGallery from "./pages/main/Sec7_Gallery/mainGallery";
import Way from "./pages/main/way/Way";
import AllMenuPage from "./components/common/allMenuPage/allMenu";
import Gallery from "./pages/subPages/gallery/gallery";

function App() {
  return (
    <>
      <AllMenuPage />
      <Header />
      <MainGallery />
      <Way />
      {/* <Gallery/> */}
    </>
  );
}

export default App;

