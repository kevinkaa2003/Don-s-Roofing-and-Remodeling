import './Room.css';
import Showcase from  './Showcase.js';
import Navbar from './Custom_Navbar.js';
import CustomFooter from './Custom_Footer.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

//Room Component
const Room = () => {
    const [ room, setRoom ] = useState(true);

    return (
        <>
        <Navbar></Navbar>
        <div className="roombodymain">
            <Showcase room = {room}></Showcase>
        </div>
        <CustomFooter></CustomFooter>
        </>
    );
}

export default Room;
