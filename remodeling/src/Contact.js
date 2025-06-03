import logo from './logo.svg';
import './Contact.css';
import React, { useEffect, useState, createContext, useContext } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Custom_Navbar.js';
import CustomFooter from './Custom_Footer.js';
import ContactWidget from './Contact_Widget.js';

//Contact component
const Contact = () => {
  return (
    <>
        <Navbar/>
        <div className="pagebody">
          <ContactWidget/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
        <CustomFooter/>
    </>
  );
}

export default Contact;
