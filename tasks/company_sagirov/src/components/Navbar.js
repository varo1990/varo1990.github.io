import React from 'react';
import {NavLink} from "react-router-dom";
import FlightSchedule from "../pages/FlightSchedule";
function Navbar(props) {


    return (
        <div className="navBar">
            <NavLink to="/home">Главная</NavLink>
            <NavLink to="/technology">Технология</NavLink>
            <NavLink to="/flightSchedule"> График полетов</NavLink>
            <NavLink to="/guarantees">Гарантии</NavLink>
            <NavLink to="/about">О компаии</NavLink>
            <NavLink to="/contacts">Контакты</NavLink>

        </div>
    );
}

export default Navbar;