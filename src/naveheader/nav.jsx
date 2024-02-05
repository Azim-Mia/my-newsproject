import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavLink from './navlink.jsx'
import Home from '/data/data/com.termux/files/home/my-newsproject/src/home/home.jsx';
import Sport from '/data/data/com.termux/files/home/my-newsproject/src/sport/sport.jsx';
const NaveHeader=()=>{
  return (
    <BrowserRouter>
    <NavLink />
      <Routes>
       <Route path="/home" element={<Home />}>
       </Route>
        <Route path="/sport" element={<Sport />}>
        </Route>
      </Routes>
    </BrowserRouter>
    )
}
export default NaveHeader;