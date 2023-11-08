import React from 'react';
import hospital1 from "../assets/images/hospital 1.png";
import sign1 from "../assets/images/sign 1.svg";
import sign2 from "../assets/images/sign 2.png";
import hospital2 from "../assets/images/hospital2.png";

function BlockSeven(props) {
  return (
    <div className='blockSeven'>
      <h2>Cosa dice la comunità dei dietologi su GummyBear Fit?</h2>
      <div className="blockSeven_container">
        <div className="blockSeven_container_item">
          <img className='hospital_img' src={hospital1} alt=""/>
          <div className="blockSeven_container_desc">
            <h3>Amerigo Panicucci</h3>
            <h4>dietologo con 12 anni di esperienza</h4>
            <p>GummyBear Fit offre un'interessante alternativa
              per coloro che desiderano controllare il loro peso.
              Nel corso degli anni, dietologi e esperti in alimentazione
              hanno studiato vari metodi e mezzi per mantenere un peso sano,
              e i prodotti basati sulla rhodiola rosea e sulla gymnema sylvestre
              hanno da tempo suscitato interesse in questo campo.</p>
            <p>Il prodotto GummyBear Fit rappresenta una soluzione interessante
              per coloro che desiderano perdere peso e controllare l'appetito.
              Nonostante i risultati possano variare a seconda delle caratteristiche individuali dell'organismo,
              questo prodotto ha un enorme potenziale nell'aiutarvi nel vostro
              percorso verso uno stile di vita sano e una figura snella!</p>
            <img className='sign1' src={sign1} alt=""/>
          </div>

        </div>
        <div className="blockSeven_container_item2">

          <div className="blockSeven_container_desc2">
            <h3>Dona Marchesi</h3>
            <h4>dietologo con 7 anni di esperienza</h4>
            <p>Cari signore e signori,</p>
            <p>Nella mia pratica professionale, mi trovo spesso ad affrontare
              questioni legate alla perdita di peso e al mantenimento di uno stile di vita sano. Di recente mi è stato
              presentato il
              prodotto GummyBear Fit, che contiene chetone di lampone, e vorrei condividere con voi le mie riflessioni
              al riguardo.</p>
            <p>I chetoni di lampone sono un componente che ha recentemente attirato l'attenzione nel mondo della
              dietologia e
              degli integratori per
              la perdita di peso. Le ricerche hanno dimostrato che i chetoni di lampone aiutano nella perdita di peso
              in diversi modi:</p>
            <p>Aumento della scomposizione dei grassi: I chetoni del lampone contribuiscono ad
              aumentare la scomposizione dei grassi nell'organismo, il che porta a una riduzione dell'accumulo di
              grasso.</p>
            <p>Regolazione dell'adiponectina: Questo componente aumenta anche il livello di adiponectina, un ormone
              che
              regola il metabolismo dei grassi e dello zucchero nell'organismo.GummyBear Fit offre una forma comoda e
              deliziosa
              di consumare il chetone di lampone, il che lo rende attraente per coloro che cercano modi per migliorare
              la
              propria dieta e perdere peso.
              Lo raccomando a tutti coloro che desiderano facilitare il loro percorso verso la perdita di peso.</p>
            <img className='sign2' src={sign2} alt=""/>
          </div>
          <img className='hospital2_img' src={hospital2} alt=""/>
        </div>

      </div>
    </div>

  );
}

export default BlockSeven;