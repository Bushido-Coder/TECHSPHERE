import React from 'react';
import Navbar from '/src/Components/LandingComponents/Navbar';

import { BrowserRouter, Routes, Route, Link } from "react-router";
import './App.css';
import Homepage from './pages/homepage';
import DetailPage from './pages/detailpage';


// feature/detailed-page branch
//changes in master
//testing
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage className='App' />} />
      <Route path="/detail-page" element={<DetailPage/>}/>
      <Route path="*" element={<div>NOT FOUND <Link to='/'>Home</Link></div>}/>
    </Routes>
  </BrowserRouter>

)


  // return (
  //   <div className='App'>
  //     <Homepage/>
  //   </div>
  // );
};

export default App;