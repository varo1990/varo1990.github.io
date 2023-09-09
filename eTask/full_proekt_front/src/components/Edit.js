import React, { useState } from 'react';
import edit from "../assets/image/dasboard/edit_more.svg";
import {Link} from "react-router-dom";

function Edit({ onClick, link = '' }) {
    const [isEditVisible, setIsEditVisible] = useState(false);

    const toggleEditVisibility = () => {
        setIsEditVisible(!isEditVisible);
    };

    return (
        <div className="edit-button-container">
            <button className="edit-button" onClick={toggleEditVisibility}>
                <img src={edit} alt="Edit" />
            </button>
            {isEditVisible && (
                <div className="edit-options">
                    <Link to={`/${link}`} onClick={onClick}>Edit</Link>
                    <p>Delete</p>
                </div>
            )}
        </div>
    );
}

export default Edit;
