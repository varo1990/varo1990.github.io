import React from 'react';

function Main(props) {
  return (
    <div className='main'>
      <div className="main_left_item">
        <h1>Зарабатывайт больше</h1>
        <h2>с WELBEX</h2>
        <p>Развиваем и контролируем продажи за вас</p>
      </div>

      <div className="main_right_item">


        <div className='main_right_item_title'>
          <p>Вместе с </p><h3>бесплатной </h3> <h3> консультацией</h3><p> мы дарим:</p>
        </div>
        <div className="main_right_info">
          <div className="main_right_item_info">
            <h4>Виджеты</h4>
            <p>30 готовых решений</p>
          </div>
          <div className="main_right_item_info">
            <h4>Dashboard</h4>
            <p>с показателями
              вашего бизнеса</p>
          </div>
          <div className="main_right_item_info">
            <h4>Skype Аудит</h4>
            <p>отдела продаж и CRM системы</p>
          </div>
          <div className="main_right_item_info">
            <h4>35 дней</h4>
            <p>использования CRM</p>
          </div>
        </div>





        <button className='main_btn'>Получить консультацию</button>


      </div>

    </div>
  );
}

export default Main;