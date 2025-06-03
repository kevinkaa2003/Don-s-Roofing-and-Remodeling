import './Outdoor.css';
import Showcase from  './Showcase.js';
import Navbar from './Custom_Navbar.js';
import CustomFooter from './Custom_Footer.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

//Outdoor Component
const Outdoor = () => {

    const [ outdoor, setOutdoor ] = useState(true);

    return (
        <>
        <Navbar></Navbar>
        <div className="outdoorbodymain">
            <Showcase outdoor = {outdoor}></Showcase>
        </div>
        <CustomFooter></CustomFooter>
        </>
    );
}

export default Outdoor;
