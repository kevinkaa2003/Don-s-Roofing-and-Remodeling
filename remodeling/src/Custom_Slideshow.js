import React, { useEffect, useState, useRef } from 'react';
import './Custom_Slideshow.css';
import { useNavigate }from 'react-router-dom';
import utah from './pexels-falling4utah-1080721.jpg';
import jason from './pexels-jason-boyd-1388339-3209049.jpg';
import pexels from './pexels-pixabay-259588.jpg';

//Slideshow component
const Slideshow = () => {

    const [currentRow, setCurrentRow] = useState(0);
    const rowsRef = useRef([]);

    //Slideshow effect
    useEffect(() => {
        rowsRef.current = document.querySelectorAll("#slideshowtable tr");
        showRow(0);
        const interval = setInterval (() => nextRow(), 10000); //Change slide every 10 seconds
        return () => clearInterval(interval); //Cleanup on unmount
    }, []);

    //Show row function
    function showRow(index) {
        rowsRef.current.forEach((row, i) => {
            const message = row.querySelector(".message");

            if (row) {
                row.style.display = i === index ? "table-row" : "none";
                row.classList.toggle("fade-in", i === index);

            }

        });
    }

    //Next row function
    function nextRow() {
        setCurrentRow((prev) => {
            const newIndex = (prev + 1 ) % rowsRef.current.length;
            showRow(newIndex);
            return newIndex;
        });
    }

    return (
        <>
        <div className="slideshow" id="slideshow1">
            <table id="slideshowtable" className="slideshowtable">
                <tbody>
                    <tr>
                        <td>
                            <img src={utah}/>
                            <div className="message">Welcome to Don's Roofing and Remodeling!</div>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={jason}/>
                            <div className="message">Our mission is to provide high-quality remodeling services for the state of Texas. </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={pexels}/>
                            <div className="message">Contact us today to schedule an appointment.</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
     );
}

export default Slideshow;
