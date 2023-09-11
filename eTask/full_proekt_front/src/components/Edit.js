import React, { useState } from 'react';
import edit from "../assets/image/dasboard/edit_more.svg";
import { Link } from "react-router-dom";

function Edit() {
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
          {/* При клике на "Edit" перенаправляем пользователя на страницу /edittas */}
          <Link to="/tasksedit">Edit</Link>
          <p>Delete</p>
        </div>
      )}
    </div>
  );
}

export default Edit;
