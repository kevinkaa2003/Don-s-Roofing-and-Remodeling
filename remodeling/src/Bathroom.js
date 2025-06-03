import './Bathroom.css';
import Showcase from  './Showcase.js';
import Navbar from './Custom_Navbar.js';
import CustomFooter from './Custom_Footer.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

//Bathroom component
const Bathroom = () => {
    const [ bathroom, setBathroom ] = useState(true);

    return (
        <>

        <Navbar></Navbar>
        <div className="bathroombodymain">
            <Showcase bathroom = {bathroom}></Showcase>
        </div>
        <CustomFooter></CustomFooter>

        </>
    );
}

export default Bathroom;
