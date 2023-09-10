import React, {useState} from 'react';
import drink_local from "../assets/image/dasboard/local_drink.svg";
import palette from "../assets/image/dasboard/palette.svg";
import clock from "../assets/image/dasboard/clock.svg";
import flag_small from "../assets/image/dasboard/flag_small.svg";
import Edit from "../components/Edit";

import {categoies, myTask} from "../data/DataTask";
import moment from "moment/moment";

const Categories = (props) => {
  return (
    <div className="categories">
      <div className="categories_container" style={{
        borderColor:myTask.color
      }}>

        <div className="categories_edit">
          <h2>{myTask.category}</h2>
          <Edit/>
        </div>

        <div className="categories_container_list">

          <ol>
            <div className="categories_container_list_color">
              <img src={palette} alt=""/>
              <span style={{ background: myTask.color}}></span>
            </div>
            {myTask.taskItems.map(item=>(

              <li>
                <div className='categories_list_items'>
                  <h3>{item.text}</h3>
                  <div className="categories_clock">
                    <div className="categories_clock_item_1">
                      <img src={clock} alt=""/>
                      <p>{moment(item.datetime).format('LLLL')}</p>
                    </div>
                    <div className="categories_clock_item_1">
                      <label htmlFor="done">Done</label>
                      <input type="checkbox" className="login_checkbox" id="done" name="remember"/>

                    </div>
                  </div>

                </div>
              </li>
            ))}


          </ol>

        </div>


      </div>

    </div>
  );
}

export default Categories;