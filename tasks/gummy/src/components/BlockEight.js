import React from 'react';
import bearTwo from "../assets/images/gummy-bear-fit-300x300 1.png";
import bearFoot from "../assets/images/bear_footer.png";

function BlockEight(props) {
  return (
    <div className='blockEight'>
      <img src={bearTwo} alt=""/>
      <div className="blockEight_content">
        <h2>Non aspettare, inizia il tuo percorso verso la figura ideale oggi stesso!</h2>
        <h3>Questo prodotto è una vera scoperta per chi vuole perdere peso ma non sa da dove cominciare. Con il suo
          aiuto, sarai in grado non
          solo di perdere peso in eccesso, ma anche di aumentare i tuoi livelli di energia e di fiducia in te
          stesso.</h3>
        <div className="blockEight_footer">
          <h4>Scopri se GummyBear Fit è adatto a te, fai un semplice test!</h4>
          <img className='bear_foot' src={bearFoot} alt=""/>
          <div className="blockEight_footer_btn">
              <span>
                <p>INIZIA IL TEST</p>
              </span>
          </div>
        </div>
      </div>

    </div>

  );
}

export default BlockEight;