import bathroom from './pexels-jvdm-1457847.jpg';
import house from './pexels-nord6-1590336.jpg';
import kitchen from './pexels-saviesa-home-1098995-2089698.jpg';
import outdoor from './pexels-jason-boyd-1388339-3209049.jpg';
import roofing from './pexels-pixabay-259588.jpg';
import room from './pexels-reneterp-1358900.jpg';
import background from './pexels-photo-298842.jpeg';
import './Showcase.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Declare Image variables
const bathroomImages = [bathroom, house, kitchen];
const houseImages = [house, outdoor];
const kitchenImages = [kitchen, outdoor];
const outdoorImages = [outdoor, house];
const roofImages = [roofing, house];
const roomImages = [room, kitchen, bathroom];

//Showcase Component
const Showcase = (props) => {

    const [ currentRow, setCurrentRow ] = useState(0);

    const bathroomNextRow = () => {
        setCurrentRow((prev) => (prev < bathroomImages.length - 1 ? prev + 1 : 0));
    };

    const bathroomPreviousRow = () => {
        setCurrentRow((prev) => (prev > 0 ? prev - 1 : bathroomImages.length - 1));
    };

    const houseNextRow = () => {
        setCurrentRow((prev) => (prev < houseImages.length - 1 ? prev + 1 : 0));
    };

    const housePreviousRow = () => {
        setCurrentRow((prev) => (prev > 0 ? prev - 1 : houseImages.length - 1));
    };

    const kitchenNextRow = () => {
        setCurrentRow((prev) => (prev < kitchenImages.length - 1 ? prev + 1 : 0));
    };

    const kitchenPreviousRow = () => {
        setCurrentRow((prev) => (prev > 0 ? prev - 1 : kitchenImages.length - 1));
    };

    const outdoorNextRow = () => {
        setCurrentRow((prev) => (prev < outdoorImages.length - 1 ? prev + 1 : 0));
    };

    const outdoorPreviousRow = () => {
        setCurrentRow((prev) => (prev > 0 ? prev - 1 : outdoorImages.length - 1));
    };

    const roofNextRow = () => {
        setCurrentRow((prev) => (prev < roofImages.length - 1 ? prev + 1 : 0));
    };

    const roofPreviousRow = () => {
        setCurrentRow((prev) => (prev > 0 ? prev - 1 : roofImages.length - 1));
    };

    const roomNextRow = () => {
        setCurrentRow((prev) => (prev < roofImages.length - 1 ? prev + 1 : 0));
    };

    const roomPreviousRow = () => {
        setCurrentRow((prev) => (prev > 0 ? prev - 1 : roofImages.length - 1));
    };


    //Navigation
    const navigate = useNavigate();

    const goToContact = () => {
        navigate('/Contact');
    }


    //Showcase Display function
    const showcaseDisplay = () => {

        if (props.bathroom) {
            return (
                <>
                <div className="bathroomshowcasemain">
                    <div className="bathroomshowcasewrapper">
                        <button className="previousbutton" onClick={bathroomPreviousRow}><strong>PREVIOUS</strong></button>
                        <table className="bathroomtable">
                            <caption>
                                <div className="bathroomshowcasetitle"><strong>Bathroom Showcase</strong></div>
                            </caption>
                            <tbody>
                                {bathroomImages.map((img, index) => (
                                    <tr key={index} style={{display: index === currentRow ? "" : "none" }}>
                                        <td>
                                            <img src={img} alt={`Slide ${index + 1}`} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button className="nextbutton" onClick={bathroomNextRow}><strong>NEXT</strong></button>
                        <br/>
                        <button className="scheduleconsultationbutton" onClick={goToContact}>Schedule a Consulation</button>
                    </div>
                </div>
                </>

            )} else if (props.house) {
                return (
                    <>
                    <div className="houseshowcasemain">
                        <div className="houseshowcasewrapper">
                            <button className="previousbutton" onClick={housePreviousRow}><strong>PREVIOUS</strong></button>
                            <table className="housetable">
                                <caption>
                                    <div className="houseshowcasetitle"><strong>Entire House Showcase</strong></div>
                                </caption>
                                <tbody>
                                    {houseImages.map((img, index) => (
                                        <tr key={index} style={{display: index === currentRow ? "" : "none" }}>
                                            <td>
                                                <img src={img} alt={`Slide ${index + 1}`} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button className="nextbutton" onClick={houseNextRow}><strong>NEXT</strong></button>
                            <br/>
                            <button className="scheduleconsultationbutton" onClick={goToContact}>Schedule a Consulation</button>
                        </div>
                    </div>
                </>
            )}
            else if (props.kitchen) {
                return (
                    <>
                    <div className="kitchenshowcasemain">
                        <div className="kitchenshowcasewrapper">
                            <button className="previousbutton" onClick={kitchenPreviousRow}><strong>PREVIOUS</strong></button>
                            <table className="kitchentable">
                                <caption>
                                    <div className="kitchenshowcasetitle"><strong>Kitchen Showcase</strong></div>
                                </caption>
                                <tbody>
                                    {kitchenImages.map((img, index) => (
                                        <tr key={index} style={{display: index === currentRow ? "" : "none" }}>
                                            <td>
                                                <img src={img} alt={`Slide ${index + 1}`} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button className="nextbutton" onClick={kitchenNextRow}><strong>NEXT</strong></button>
                            <br/>
                            <button className="scheduleconsultationbutton" onClick={goToContact}>Schedule a Consulation</button>
                        </div>
                    </div>
                    </>
                )
            }
            else if (props.outdoor) {

                return (
                    <>
                    <div className="outdoorshowcasemain">
                            <div className="outdoorshowcasewrapper">
                                <button className="previousbutton" onClick={outdoorPreviousRow}><strong>PREVIOUS</strong></button>
                                <table className="outdoortable">
                                    <caption>
                                        <div className="outdoorshowcasetitle"><strong>Outdoor Showcase</strong></div>
                                    </caption>
                                    <tbody>
                                        {outdoorImages.map((img, index) => (
                                            <tr key={index} style={{display: index === currentRow ? "" : "none" }}>
                                                <td>
                                                    <img src={img} alt={`Slide ${index + 1}`} />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <button className="nextbutton" onClick={outdoorNextRow}><strong>NEXT</strong></button>
                                <br/>
                                <button className="scheduleconsultationbutton" onClick={goToContact}>Schedule a Consulation</button>
                            </div>
                        </div>
                        </>
            )}
            else if (props.roof) {
                return (
                    <>
                    <div className="roofshowcasemain">
                        <div className="roofshowcasewrapper">
                            <button className="previousbutton" onClick={roofPreviousRow}><strong>PREVIOUS</strong></button>
                            <table className="rooftable">
                                <caption>
                                    <div className="roofshowcasetitle"><strong>Roof Showcase</strong></div>
                                </caption>
                                <tbody>
                                    {roofImages.map((img, index) => (
                                        <tr key={index} style={{display: index === currentRow ? "" : "none" }}>
                                            <td>
                                                <img src={img} alt={`Slide ${index + 1}`} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button className="nextbutton" onClick={roofNextRow}><strong>NEXT</strong></button>
                            <br/>
                            <button className="scheduleconsultationbutton" onClick={goToContact}>Schedule a Consulation</button>
                        </div>
                    </div>
                    </>
                )
            } else if (props.room) {
                return (
                    <>
                    <div className="roomshowcasemain">
                        <div className="roomshowcasewrapper">
                            <button className="previousbutton" onClick={roomPreviousRow}><strong>PREVIOUS</strong></button>
                            <table className="roomtable">
                                <caption>
                                    <div className="roomshowcasetitle"><strong>Room Showcase</strong></div>
                                </caption>
                                <tbody>
                                    {roomImages.map((img, index) => (
                                        <tr key={index} style={{display: index === currentRow ? "" : "none" }}>
                                            <td>
                                                <img src={img} alt={`Slide ${index + 1}`} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button className="nextbutton" onClick={roomNextRow}><strong>NEXT</strong></button>
                            <br/>
                            <button className="scheduleconsultationbutton" onClick={goToContact}>Schedule a Consulation</button>
                        </div>
                    </div>
                    </>
                )
            }
            else { return <div>DEBUG</div>; }}

    return (

        <>
        {showcaseDisplay()}
        </>


    )
}

export default Showcase;
