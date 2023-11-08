import React from 'react';
import gummy from "../assets/images/gummy-bear-fit5.png";
import img1 from "../assets/images/image1.png";
import img2 from "../assets/images/image2.png";
import star from "../assets/icon/star1.png";
import flag from "../assets/icon/flag.svg";
import group from "../assets/icon/Group.svg";
import money from "../assets/icon/money.svg";

function BlockTwo(props) {
  return (
    <div className='blockTwo'>
      <img className='gummy_img' src={gummy} alt=""/>
      <h2>Capiamo che perdere peso non è facile...</h2>
      <div className="blockTwo_content">
        <div className='blockTwo_img'>
          <img src={img1} alt=""/>
          <img src={img2} alt=""/>
        </div>
        <div className="blockTwo_title">
          <p>Tuttavia, con GummyBear Fit, puoi iniziare il tuo
            percorso verso un corpo snello già oggi. Il nostro prodotto
            non solo ti aiuta a perdere peso in eccesso, ma migliora anche
            la tua salute e la qualità della vita.</p>
          <h4>Il nostro prodotto è stato sottoposto a numerosi test clinici
            e siamo orgogliosi della sua efficacia. Non perdere l'opportunità
            di perdere peso e migliorare la tua salute!</h4>
        </div>
      </div>


      <div className="blockTwo_footer">
        <div className="blockTwo_logo">
          <div className="blockTwo_footer_item">
            <img src={star} alt=""/>
            <p> Qualità premiu</p>
          </div>
          <div className="blockTwo_footer_item">
            <img src={flag} alt=""/>
            <p>Prodotto in Italia</p>
          </div>
          <div className="blockTwo_footer_item">
            <img src={group} alt=""/>
            <p>La scelta migliore</p>
          </div>
          <div className="blockTwo_footer_item">
            <img src={money} alt=""/>
            <p>Garanzia di rimborso</p>
          </div>

        </div>
      </div>
    </div>

  );
}

export default BlockTwo;