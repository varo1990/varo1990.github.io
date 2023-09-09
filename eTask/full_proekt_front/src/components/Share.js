import React, { useState } from 'react';
import close from "../assets/image/dasboard/close.svg";
import facebook from "../assets/image/dasboard/facebook.svg";
import instagram from "../assets/image/dasboard/instagram.svg";
import twitter from "../assets/image/dasboard/twitter.svg";
import linkedin from "../assets/image/dasboard/linkedin.svg";


function Share() {
    const [isShareVisible, setIsShareVisible] = useState(false);

    const toggleShareVisibility = () => {
        setIsShareVisible(!isShareVisible);
    };

    return (
        <div className="share-button-container">
            <button className="share-button" onClick={toggleShareVisibility}>
                Share
                <img src={close} alt="Close" />
            </button>
            {isShareVisible && (
                <div className="share-icons">
                    <span></span>
                    <a href="#"><img src={facebook} alt="Facebook" /></a>
                    <a href="#"><img src={instagram} alt="Instagram" /></a>
                    <a href="#"><img src={twitter} alt="Twitter" /></a>
                    <a href="#"><img src={linkedin} alt="LinkedIn" /></a>

                </div>
            )}
        </div>
    );
}

export default Share;
