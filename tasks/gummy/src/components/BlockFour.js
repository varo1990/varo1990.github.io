import React from 'react';
import hand from "../assets/images/hand.png";
import line1 from "../assets/images/Line 2.svg";
import line2 from "../assets/images/Line 3.svg";
import bear1 from "../assets/images/bear1.png";
import bear2 from "../assets/images/bear2.png";

function BlockFour(props) {
  return (
    <div className='blockFour'>
      <div>
        <img className='blockFour_img' src={hand} alt=""/>
        <img className='blockFour_img_line1' src={line1} alt=""/>
        <img className='blockFour_img_line2' src={line2} alt=""/>
        <img className='blockFour_img_bear1' src={bear1} alt=""/>
        <img className='blockFour_img_bear2' src={bear2} alt=""/>
      </div>

      <div className="blockFour_content">

        <h2>Come prendere GummyBear Fit?</h2>
        <div className="blockFour_content_footer">
          <div className="blockFour_content_footer_item">
            <div className="blockFour_content_footer_item_block">
              <h3>Prendi 2 guumie </h3>
              <p>dopo colazione</p>
            </div>
            <div className="blockFour_content_footer_item_block">
              <h3>E 2 guumie</h3>
              <p>dopo cena</p>
            </div>
          </div>
          <div className="blockFour_content_footer_item">
            <h1>Sì, è così semplice!</h1>
          </div>

        </div>
      </div>
    </div>

  );
}

export default BlockFour;