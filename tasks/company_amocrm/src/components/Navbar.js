import React from 'react';
import {NavLink} from "react-router-dom";

function Navbar(props) {
  return (
    <div className='navbar'>
      <NavLink to="/services">Услуги</NavLink>
      <NavLink to="/widgets">Виджеты</NavLink>
      <NavLink to="/integrations">Интеграции</NavLink>
      <NavLink to="/cases">Кейсы</NavLink>
      <NavLink to="/certificates">Сертификаты</NavLink>

    </div>
  );
}

export default Navbar;