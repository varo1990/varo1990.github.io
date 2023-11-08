import React from 'react';
import people1 from "../assets/images/image 7.png";
import people2 from "../assets/images/image 8.png";
import people5 from "../assets/images/image 11.png";
import people3 from "../assets/images/image 9.png";
import people4 from "../assets/images/image 10.png";
import people6 from "../assets/images/image 12.png";

function BlockFive(props) {
  return (
    <div className='blockFive'>
      <h2>Unisciti a migliaia di persone che hanno già sperimentato gli effetti di GummyBear Fit!</h2>
      <div className="blockFive_content">
        <div className="blockFive_content_item">
          <img src={people1} alt=""/>
          <img src={people2} alt=""/>
          <img src={people5} alt=""/>

        </div>
        <div className="blockFive_content_item">
          <img src={people3} alt=""/>
          <img src={people4} alt=""/>
          <img src={people6} alt=""/>
        </div>

      </div>
    </div>
  );
}

export default BlockFive;