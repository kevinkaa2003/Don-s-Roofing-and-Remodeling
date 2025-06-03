import './Kitchen.css';
import Showcase from  './Showcase.js';
import Navbar from './Custom_Navbar.js';
import CustomFooter from './Custom_Footer.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

//Kitchen component
const Kitchen = () => {

    const [ kitchen, setKitchen ] = useState(true);

    return (
        <>
        <Navbar></Navbar>
        <div className="kitchenbodymain">
            <Showcase kitchen = {kitchen}></Showcase>
        </div>
        <CustomFooter></CustomFooter>
        </>
    );
}

export default Kitchen;
