import React, {useState} from 'react';
import language from "../assets/image/language.svg"
import arrowLang from "../assets/image/arrowLang.svg"

function Languages(props) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleLanguages = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="languages">
            <button className="language-button" onClick={toggleLanguages}>
                <img src={language} alt="Language" />
                <img
                    src={arrowLang}
                    alt="Arrow"
                    className={isOpen ? "arrow-icon rotated" : "arrow-icon"}
                />
            </button>
            <ul className={`language-list ${isOpen ? "active" : ""}`}>
                <li>Հայերեն</li>
                <li>English</li>
                <li>Русский</li>
                <li>Italiano</li>
                <li>Español</li>
                <li>Deutsch</li>
            </ul>
        </div>
    );
}

export default Languages;