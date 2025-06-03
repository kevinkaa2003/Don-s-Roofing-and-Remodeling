import './House.css';
import Showcase from  './Showcase.js';
import Navbar from './Custom_Navbar.js';
import CustomFooter from './Custom_Footer.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

//House component
const House = () => {

    const [ house, setHouse ] = useState(true);

    return (
        <>
        <Navbar></Navbar>
        <div className="housebodymain">
            <Showcase house = {house}></Showcase>
        </div>
        <CustomFooter></CustomFooter>
        </>
    );
}

export default House;
