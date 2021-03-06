import './singleLeaugeDetails.css';
import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFutbol, faMarsStroke, faPodcast } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


const SingleLeaugeDetails = () => {
    let { idLeague } = useParams();
    const [leaugeDetails, setLeaugeDetails] = useState({})
    console.log(leaugeDetails)
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // console.log(data.leagues[0])
                setLeaugeDetails(data.leagues[0])
            })
        // .catch(error => console.error(error))
    }, [idLeague])
    return (
        <div>
            <img id="banner-img" src={leaugeDetails.strBanner} alt="banner" />
            <div id="header-details">
                <div className="row ">
                    <div className="head-details-left  col-6 ">
                        <h3 className="my-4">{leaugeDetails.strLeague}</h3>
                        <p><FontAwesomeIcon icon={faPodcast} />  Founded: {leaugeDetails.intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag} /> Country: {leaugeDetails.strCountry}</p>
                        <p className=""><FontAwesomeIcon icon={faFutbol} /> Sports Type: Football</p>
                        <p><FontAwesomeIcon icon={faMarsStroke} />  Gender: {leaugeDetails.strGender}</p>
                    </div>
                    <div className="head-details-right col-6 ">
                    <img id="logo-img" src={leaugeDetails.strFanart4} alt="logo" /> 
                    
                    {/* x = 3 , x === 3 ? '3' : 'empty' */}
                    {/* I know the conditional rendering, but i don't see any option here, so i couldn't give it, sorry  */}
                    {/* if the site does not work properly, reload and let me know why this is a problem */}
                    </div>
                </div>

            </div>
            <div id="description">
                <p className="descrip">{leaugeDetails.strDescriptionEN}</p>
                <p className="descrip">{leaugeDetails.strDescriptionES}</p>
                <p>{leaugeDetails.strDescriptionFR}</p>
            </div>
            <div id="social-link">
                <ul>
                    <li><a href={leaugeDetails.strFacebook}><FontAwesomeIcon icon={faFacebookF} /></a></li>
                    <li><a href={leaugeDetails.strTwitter}><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href={leaugeDetails.strYoutube}><FontAwesomeIcon icon={faYoutube} /></a></li>
                </ul>
            </div>
        </div>
    );
};

export default SingleLeaugeDetails;