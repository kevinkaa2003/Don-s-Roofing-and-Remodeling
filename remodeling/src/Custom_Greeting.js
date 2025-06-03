import React, {useState, useEffect}  from 'react';
import { useNavigate } from 'react-router-dom';
import './Custom_Greeting.css';
import video1 from './remodeling1.mp4';

//HomeGreeting component
const HomeGreeting = () => {
    //Navigation
    const navigate = useNavigate();
    const goToContact = () => {
        navigate("/Contact");
    };

    //Video Sources
    const videoSources = [video1];
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);



    return (
        <>
        <div className="homegreeting">
            <div className="welcomecontainer">
                <div className="welcomeparagraph">
                    <div className="welcomeparagraph1">
                        <p>Don's Roofing &
                        <br/> Remodeling</p>
                    </div>
                    <br/>
                    <div className="welcomeparagraph2">
                        <p>Welcome to Don's Roofing & Remodeling, where your dream home is waiting to be unveiled. Our expert team combines craftsmanship with innovative design to elevate your living spaces beyond expectation. Whether you're envisioning a sleek, modern kitchen that inspires culinary creativity, a luxurious primary bathroom retreat, or a complete home renovation that reflects your unique lifestyle, we bring decades of experience and meticulous attention to detail to every project. </p>
                    </div>
                    <br/>
                    <div className="welcomeparagraph3">
                        <p></p>
                    </div>
                    <br/>
                    <div className="welcomebuttons">
                        <button onClick={goToContact}>Schedule a Consulation</button>
                    </div>
                </div>
                <div className='video'>
                    <video src={videoSources[currentVideoIndex]} autoPlay muted playsInline loop/>
                </div>
            </div>
        </div>
        </>
    );
}

export default HomeGreeting;
