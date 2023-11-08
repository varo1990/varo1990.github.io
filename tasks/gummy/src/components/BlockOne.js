import React from 'react';
import logo from "../assets/images/logo.png";
import bear from "../assets/images/bear_footer.png";
import bearBig from "../assets/images/gummy-bear-fit.png";
import sber from "../assets/images/sber.svg";

function BlockOne(props) {
  return (
    <div className="blockOne">
      <div className="blockOne_item">
        <h4>Vuoi perdere peso ma non sai da dove cominciare? </h4>
        <h4>Ti aiuteremo a raggiungere i tuoi obiettivi!</h4>

        <img src={logo} alt=""/>
        <h5>è un prodotto rivoluzionario per la perdita di peso che contiene una combinazione unica di ingredienti
          naturali</h5>
        <div className='blockOne_footer'>
          <img src={bear} alt=""/>
          <p>Scopri se GummyBear Fit è adatto a te, fai un semplice test!</p>
          <div className='blockOne_test'>
              <span><p>INIZIA IL TEST</p>
                </span>
          </div>


        </div>
      </div>
      <div className="blockOne_img">
        <img src={bearBig} alt=""/>

      </div>
      <div className="blockOne_item_right">
        <h3>Come funziona GummyBear Fit?</h3>
        <div className="blockOne_item_right_list">
          <img src={sber} alt=""/>
          <p>Brucia i grass</p>
        </div>
        <div className="blockOne_item_right_list">
          <img src={sber} alt=""/>
          <p>Accelerare il metabolismo</p>
        </div>

        <div className="blockOne_item_right_list">
          <img src={sber} alt=""/>
          <p>Riduce l'appetito</p>
        </div>
        <div className="blockOne_item_right_list">
          <img src={sber} alt=""/>
          <p>Fornisce energia per tutta la giornata</p>
        </div>
        <div className="blockOne_item_right_list">
          <img src={sber} alt=""/>
          <p>Migliora la digestione</p>
        </div>

      </div>

    </div>
  );
}

export default BlockOne;