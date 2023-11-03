import React from 'react';

function Content(props) {
  return (
    <div className='content'>
      <div className='content_title'>
        <h2>Путешествие</h2>
        <h4>на красную планету</h4>
        <button id="btn21" className="btn-21">Начать путешествие</button>
        <span></span>
      </div>
      <div className="content_container">
        <div className="content_container_item">
          <p>мы</p>
          <h3>1</h3>
          <p>на рынке</p>

        </div>
        <div className="content_container_item">
          <p>гарантируем</p>
          <h3>50%</h3>
          <p>безопасность</p>

        </div>
        <div className="content_container_item">
          <p>календарик за</p>
          <h3>2001г.</h3>
          <p>в подарок</p>

        </div>
        <div className="content_container_item">
          <p>путешествие</p>
          <h3>597</h3>
          <p>дней</p>

        </div>

      </div>


    </div>
  );
}

export default Content;