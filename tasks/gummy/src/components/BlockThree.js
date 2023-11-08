import React from 'react';
import bearBig2 from "../assets/images/gummy-bearBig2.png";

function BlockThree(props) {
  return (
    <div className='blockThree'>
      <h1>
        Qual è il segreto di GummyBear Fit?
      </h1>
      <div className="blockThree_content">
        <h2>Qual è il segreto di GummyBear Fit?</h2>
        <div className="blockThree_content_item">
          <div className="blockThree_content_left">
            <div className="blockThree_content_left_item">
              <h3>Gymnema forestis</h3>
              <h4>Riduzione dell'appetito:</h4>
              <p>La Gymnema sylvestre è nota per la sua capacità di ridurre l'appetito e
                la sensazione di fame. Ciò aiuta a controllare l'assunzione di cibo e,
                di conseguenza, a ridurre l'apporto calorico.</p>
              <h4>Regolazione dei livelli di zucchero nel sangue:</h4>
              <p>La Gymnema aiuta a ridurre i livelli di zucchero nel sangue,
                il che può essere utile per le persone con diabete o per il controllo del peso.</p>

            </div>
            <div className="blockThree_content_left_item">
              <h3>Rhodiola rosea</h3>
              <h4>Adattogeno:</h4>
              <p>Il Rhodiola rosea è noto per la sua capacità di aiutare l'organismo a
                adattarsi allo stress e aumentare il livello di resistenza allo sforzo fisico ed emotivo.</p>
              <h4>Energia e resistenza:</h4>
              <p>Aiuta anche ad aumentare la resistenza fisica e l'energia,
                il che può favorire uno stile di vita attivo e l'allenamento.</p>

            </div>
          </div>
          <div className="blockThree_content_right">
            <h3>Chetone di lampone</h3>
            <h4>Aumento della decomposizione dei grassi (lipolisi):</h4>
            <p>Il chetone del lampone aiuta ad intensificare il processo di
              decomposizione dei grassi nell'organismo. Ciò contribuisce a ridurre l'accumulo di grasso.</p>
            <h4>Regolazione dell'adiponectina: </h4>
            <p>L'adiponectina è un ormone che svolge un ruolo importante
              nella regolazione del metabolismo dei grassi e dello zucchero. Il chetone di lampone aumenta il
              livello di adiponectina nell'organismo, contribuendo così a controllare il peso.</p>
            <h4>Aumento dell'energia:</h4>
            <p>Il chetone di lampone è anche considerato uno stimolante che aumenta l'energia e l'attività
              metabolica.</p>

          </div>
          <img className='blockThree_img' src={bearBig2} alt=""/>
          <div className="blockThree_footer">
            <h3>Scopri se GummyBear Fit è adatto a te, fai un semplice test!</h3>
            <div className="blockThree_footer_btn">
              <span>
                   <p>INIZIA IL TEST</p>
                </span>
            </div>


          </div>
        </div>

      </div>
    </div>
  );
}

export default BlockThree;