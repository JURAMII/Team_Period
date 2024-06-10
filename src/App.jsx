import React from 'react'
import {Route, Routes, Link} from 'react-router-dom';

import Header from './components/common/header/header';
import Footer from './components/common/footer/footer';
import Three from './pages/main/Sec1 3D/Three'


function App() {
  
 return (
        <>
            <Header />
            <Three />
            <Footer/>
        </>
    );
}

export default App;
