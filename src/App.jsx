import { useEffect, useState } from 'react'
import './App.css'
import LoginPage from './loginPage/loginPage'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './homePage/homePage';
import AdminPage from './adminPage/adminPage';
import TemporaryDrawer from './sidenav/sidenav';
import BugLogo from './buGamersLogo/bugLogo';
import GalleryPage from './galleryPage/galleryPage';
import AboutPage from './aboutPage/aboutPage';
import CardTemplate from './cardTemplate/cardTemplate';
import ButtonTemplate from './templates/buttonTemplate/buttonTemplate';
import InputTemplate from './templates/inputTemplate/inputTemplate';
import TestPage from './testPage/test';
import BlobObj from './blob/blob';
import blobFun from './blob/blobEffect';
import ProfilePage from './profilePage/profilePage';
import SignupPage from './signupPage/signupPage';
import AdminPageContent  from './adminPage/adminPageContent';

function App() {

  useEffect(()=>{
    // blobFun();
  })

  return (
    <>
  {/* <BlobObj></BlobObj> */}
    <TemporaryDrawer></TemporaryDrawer>
    
      <Routes>
        <Route path="/" element={<HomePage />} />
          {/* <Route index element={<Home />} />  what does the index keyword do here? */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/card" element={< CardTemplate/>} /> 
          <Route path="/button" element={< ButtonTemplate/>} /> 
          <Route path="/signup" element={< SignupPage/>} /> 
          <Route path="/input" element={< InputTemplate/>} /> 
          <Route path='/profile' element = {<ProfilePage/>} />
          <Route path='/admin1' element = {<AdminPageContent/>} />
          
          {/* <Route path="/test" element={< Test prop="" />} />  */}
          <Route path="/test" element={< TestPage />} /> 
          {/* <Route path="/sidenav" element={<TemporaryDrawer/>}/> */}
          <Route path="/logo" element={<BugLogo/>}/>
      </Routes>
  
    {/* <LoginPage id="loginPage"></LoginPage> */}
    </>
  )
}

export default App
