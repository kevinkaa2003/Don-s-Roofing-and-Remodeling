import React, { useState, useEffect, useContext } from 'react';
import './Custom_Navbar.css';
import { useNavigate } from 'react-router-dom';
import logo from './DRR logo.jpg';


//Navbar component
const Navbar = () => {

    //Declare variables
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isInputFocused, setIsInputFocused] = useState(false);
    const searchBar = document.getElementById('searchbar');
    const searchResultsDiv = document.getElementById('search-results');

    //Searchbar input handling
    useEffect( () => {

        const searchBar = document.getElementById('searchbar');
        const searchResultsDiv = document.getElementById('search-results');

        //Handle Input functionS
        const handleInput = (event) => {
            if (isInputFocused) {
               if (event.target.value.length > 0) {
                    searchResultsDiv.style.display = 'block';
               }

                else {
                    searchResultsDiv.style.display = 'none';
                }
            } else {
                searchResultsDiv.style.display = 'none';
            }

        };

        //Handle focus function
        const handleFocus = () => {
            setIsInputFocused(true); //Set focus flag

            if(searchTerm.length > 0) {
                searchResultsDiv.style.display = 'block';
            }
                if(searchTerm.length > 0 && searchResults.length == 0) {
                searchResultsDiv.style.display = 'block';
            } else {
                searchResultsDiv.style.display = 'none';
            }

        };

        searchBar.addEventListener('input', handleInput);
        searchBar.addEventListener('focus', handleFocus);

    }, [isInputFocused, searchTerm, searchResults]);



    //Search Function
    function search(event) {

        const input = event.target.value.toLowerCase();
        setSearchTerm(input); //Update the state

        //Search Terms
        const searchItems = [
            { name: "Home", url: "/" },
            { name: "Contact", url: "/Contact" },
            { name: "Phone", url: "/Contact" },
            { name: "Address", url: "/Contact" },
            { name: "E-mail", url: "/Contact" },
            { name: "email", url: "/Contact" },
            { name: "Bathroom", url: "/Bathroom"},
            { name: "House", url: "/House"},
            { name: "Kitchen", url: "/Kitchen"},
            { name: "Outdoor", url: "/Outdoor"},
            { name: "Roof", url: "/Roof"},
            { name: "Room", url: "/Room"}

         ];

         const filteredSearch = searchItems.filter(searchItems => searchItems.name.toLowerCase().includes(input));

         setSearchResults(filteredSearch);
    };

    //Function to render search results
    function renderSearchResults(searchResults, searchTerm) {
        //Check if there are search results
        if (searchResults.length > 0) {
            return searchResults.map(function(result, index) {
                return (
                    <a key={index} onClick={() => navigate(result.url)}>{result.name}</a>
                )
            });
        }


        //Check if the search term is present and no results were found
        else if (searchTerm.length > 0) {
            return (
                <div>No Results Matched your Search</div>
            );
        }
        // If no search term is present, do not display anything
        else {
            return null; //No need to render anything
        }
    };


    //Navigation
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };

    const goToContact = () => {
        navigate('/Contact');
    };

    const goToBathroom = () => {
        navigate('/Bathroom');
    };

    const goToHouse = () => {
        navigate('/House');
    };

   const goToKitchen = () => {
    navigate('/Kitchen');
   };

   const goToOutdoor = () => {
    navigate('/Outdoor');
   };

   const goToRoof = () => {
    navigate('/Roof');
   };

   const goToRoom = () => {
    navigate('/Room');
   }


    return (

        <>
        <div className="navbar">
            <div className = "navbarname">
                <a onClick={goToHome}><img src={logo} style={{verticalAlign: 'middle', height: '300px', width: '300px'}}/></a>{/*Logo or Header Image*/}
                <button onClick={goToHome}>Don's Roofing & Remodeling</button>
            </div>
            <div className="navbarcomponents">
                <div className="search"> {/*Search Bar */}
                    <input id="searchbar"
                    value = {searchTerm}
                    onChange= {search}
                    type="text"
                    placeholder="Search..."/>
                    <div className="search-results" id="search-results">
                        {renderSearchResults(searchResults, searchTerm)}
                    </div>
                </div>
                <div className = "navbarhome">
                    <button className = "navbarhomebtn" onClick={goToHome}>
                        <a >
                        <strong>Home</strong>
                        </a>
                    </button>
                </div>
                <div className="dropdowncontact"> {/*Create link to contact form. Create Links to each social media and list phone,email, and office location in DIV*/}
                    <button className="dropdowncontactbtn" onClick={goToContact}><a><strong>Contact</strong></a>
                    </button>
                    <div className="dropdown-content-contact">
                        <br/>
                        <strong>Phone:</strong> +1 (281)-920-0344
                        <br/>
                        <br/>
                        <strong>E-mail:</strong> PLACEHOLDER
                        <br/>
                        <br/>
                        <strong>Address:</strong> PLACEHOLDER
                        <br/>
                        <br/>
                        <a href="#" className="facebooknav">Facebook</a>
                        <a href="#" className="twitternav">Twitter</a>
                        <a href="#" className="instagramnav">Instagram</a>
                    </div>
                </div>

                <div className="dropdownservices">
                    <button className='dropdownservicesbtn'><a><strong>Services</strong></a></button>
                    <div className="dropdowncontentservices">
                        <a onClick={goToBathroom} className="services1">Bathroom</a>
                        <a onClick={goToHouse} className="services2">Entire House</a>
                        <a onClick={goToKitchen} className="services3">Kitchen</a>
                        <a onClick={goToOutdoor} className="services4">Outdoor and Patio</a>
                        <a onClick={goToRoof} className="services5">Roofing</a>
                        <a onClick={goToRoom} className="services6">Room</a>
                    </div>
                </div>
            </div>
        </div>
        </>

     );
}

export default Navbar;
