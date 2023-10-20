import React, {useState} from 'react';
import logo from "../assets/image/logo.svg"
import home from "../assets/image/dasboard/home.svg"
import category from "../assets/image/dasboard/category.svg"
import arrow from "../assets/image/dasboard/arrow.svg"
import task from "../assets/image/dasboard/task.svg"
import flag from "../assets/image/dasboard/flag.svg"
import notifications from "../assets/image/dasboard/notifications.svg"
import person from "../assets/image/dasboard/person.svg"
import contact from "../assets/image/dasboard/contact.svg"
import history from "../assets/image/dasboard/history.svg"
import {NavLink} from "react-router-dom";
import LogOut from "./LogOut";

function MenuLeft(props) {
  const [sublistVisibility, setSublistVisibility] = useState({
    categories: false,
    tasks: false,
    goals: false,
    profile: false,
  });

  const toggleList = (id) => {
    setSublistVisibility(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  }

  return (
    <div className="menu">
      <img src={logo} alt=""/>
      <div className="menu_content_left">
        <ul>
          <li>
            <div>
              <img src={home} alt=""/>
              <NavLink to="/dashboard"><p>Home</p></NavLink>
            </div>
          </li>
          <li>
            <div onClick={() => toggleList('categories')}>
              <img src={category} alt=""/>
              <NavLink to="/category"><p>My Tasks</p></NavLink>
            </div>

          </li>
          <li>
            <div onClick={() => toggleList('tasks')}>
              <img src={task} alt=""/>
              <NavLink to="/tasks"><p>New tasks</p></NavLink>


            </div>
          </li>

          <li>
            <div onClick={() => toggleList('profile')}>
              <img src={person} alt=""/>

              <NavLink to="/profile/settings"><p>Account settings</p></NavLink>


            </div>

          </li>
          <li>
            <div>
              <img src={history} alt=""/>

              <NavLink to="/history"><p>History</p></NavLink>

            </div>
          </li>
          <li><LogOut/>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuLeft;