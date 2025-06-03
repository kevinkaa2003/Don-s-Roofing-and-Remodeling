import './Roof.css';
import Showcase from  './Showcase.js';
import Navbar from './Custom_Navbar.js';
import CustomFooter from './Custom_Footer.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

//Roof component
const Roof = () => {

    const [ roof, setRoof ] = useState(true);

    return (
        <>
        <Navbar></Navbar>
        <div className="roofbodymain">
            <Showcase roof = {roof}></Showcase>
        </div>
        <CustomFooter></CustomFooter>
        </>
    );
}

export default Roof;
