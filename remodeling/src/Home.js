import logo from './logo.svg';
import './Home.css';
import React, { useEffect, useState, createContext, useContext, useRef } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import Navbar from './Custom_Navbar.js';
import HomeGreeting from './Custom_Greeting.js';
import CustomFooter from './Custom_Footer.js';
import Slideshow from './Custom_Slideshow.js';
import ServicesDisplay from './ServicesDisplay.js';


//Home component
const Home = () => {

    const servicesRef = useRef(null);

    return (
        <>
        <Navbar/>
        <Slideshow/>
        <HomeGreeting/>
        <ServicesDisplay/>
        <CustomFooter/>
        </>
    );
}

export default Home;
