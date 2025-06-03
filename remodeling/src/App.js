import './App.css';
import React, { useContext, useEffect, useState, createContext } from 'react';
import { Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Bathroom from './Bathroom';
import House from './House';
import Kitchen from './Kitchen';
import Outdoor from './Outdoor';
import Roof from './Roof';
import Room from './Room';

function App() {
  return ( //Declare Routes
    <>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}></Route> {/*Path for Home Page*/}
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Bathroom' element={<Bathroom/>}></Route>
        <Route path='/House' element={<House/>}></Route>
        <Route path='/Kitchen' element={<Kitchen/>}></Route>
        <Route path='/Outdoor' element={<Outdoor/>}></Route>
        <Route path='/Roof' element={<Roof/>}></Route>
        <Route path='/Room' element={<Room/>}></Route>
      </Routes>
    </div>
    </>

  );
}

export default App;
