import './ServicesDisplay.css';
import bathroom from './pexels-jvdm-1457847.jpg';
import house from './pexels-nord6-1590336.jpg';
import kitchen from './pexels-saviesa-home-1098995-2089698.jpg';
import outdoor from './pexels-jason-boyd-1388339-3209049.jpg';
import roofing from './pexels-pixabay-259588.jpg';
import room from './pexels-reneterp-1358900.jpg';
import { useNavigate } from 'react-router-dom';

//Services Display Component
const ServicesDisplay = () => {


    //Navigation
    const navigate = useNavigate();

    const goToBathroom = () => {
        navigate('/Bathroom');
    }
    const goToHouse = () => {
        navigate('/House');
    }
    const goToKitchen = () => {
        navigate('/Kitchen');
    }
    const goToOutdoor = () => {
        navigate('/Outdoor');
    }
    const goToRoof = () => {
        navigate('/Roof');
    }
    const goToRoom = () => {
        navigate('/Room');
    }

    return (
        <>
        <div className='servicesmainwrapper'>
            <div className='serviceswrapper'>
                <div className='bathroom'>
                    <div className='bathroomtitle'>
                        <strong>BATHROOM</strong>
                    </div>
                    <br/>
                    <img src={bathroom}></img>
                    <div className='bathroommessage'>
                        <button onClick={goToBathroom} className='servicenavigatebutton'>Click to View our Bathroom Showcase</button>
                    </div>
                </div>
                <div className='house'>
                    <div className='housetitle'>
                        <strong>HOUSE</strong>
                    </div>
                    <br/>
                    <img src={house}></img>
                    <div className='housemessage'>
                    <button onClick={goToHouse} className='servicenavigatebutton'>Click to View our Whole House Showcase</button>
                    </div>
                </div>
                <div className='kitchen'>
                    <div className='kitchentitle'>
                        <strong>KITCHEN</strong>
                    </div>
                    <br/>
                    <img src={kitchen}></img>
                    <div className='kitchenmessage'>
                    <button onClick={goToKitchen} className='servicenavigatebutton'>Click to View our Kitchen Showcase</button>
                    </div>
                </div>
                <div className='outdoor'>
                    <div className='outdoortitle'>
                        <strong>OUTDOOR</strong>
                    </div>
                    <br/>
                    <img src={outdoor}></img>
                    <div className='outdoormessage'>
                    <button onClick={goToOutdoor} className='servicenavigatebutton'>Click to View our Outdoor Showcase</button>
                    </div>
                </div>
                <div className='roofing'>
                    <div className='roofingtitle'>
                        <strong>ROOFING</strong>
                    </div>
                    <br/>
                    <img src={roofing}></img>
                    <div className='roofingmessage'>
                    <button onClick={goToRoof} className='servicenavigatebutton'>Click to View our Roofing Showcase</button>
                    </div>
                </div>
                <div className='room'>
                    <div className='roomtitle'>
                        <strong>ROOM</strong>
                    </div>
                    <br/>
                    <img src={room}></img>
                    <div className='roommessage'>
                    <button onClick={goToRoom} className='servicenavigatebutton'>Click to View our Room Showcase</button>
                    </div>
                </div>
            </div>
        </div>
        </>
      );
}

export default ServicesDisplay;
