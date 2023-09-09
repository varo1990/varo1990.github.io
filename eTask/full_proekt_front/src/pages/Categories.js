import React, {useState} from 'react';
import Wrapper from "../components/Wrapper";
import drink_local from "../assets/image/dasboard/local_drink.svg";
import palette from "../assets/image/dasboard/palette.svg";
import color1 from "../assets/image/dasboard/color1.svg";
import clock from "../assets/image/dasboard/clock.svg";
import flag_small from "../assets/image/dasboard/flag_small.svg";
import description_small from "../assets/image/dasboard/description_small.svg";
import Share from "../components/Share";
import Edit from "../components/Edit";
import _ from 'lodash'
import color from "../assets/image/task/color.svg";
import {Field} from "formik";
import {categoryColors} from "../helpers/colorHelpers";
import {dateType} from "../helpers/timeHelpers";
import {myTask} from "../data/DataTask";
import moment from "moment/moment";

const Categories = (props) => {
  return (
    <>
      <div className="dashboard_container_list">

        <div className="dashboard_edit">
          <Edit/>
        </div>

        <div className="dashboard_container_list_item">
<h2>{myTask.category}</h2>
          <div className="dashboard_container_list_item_1">

            <img src={drink_local} alt=""/>
            <img src={drink_local} alt=""/>
            <img src={drink_local} alt=""/>
          </div>
          <div className="dashboard_container_list_item_2">
            <div className="dashboard_container_list_item_2_item">
              <img src={palette} alt=""/>
              <span style={{width: 20, height: 20, display: "block", background: myTask.color}}></span>
            </div>
            <div className="dashboard_container_list_item_2_item">
              <img src={clock} alt=""/>
              <p>{moment(myTask.taskItems[0].datetime).format('LLLL')}</p>
            </div>
            <div className="dashboard_container_list_item_2_item">
              <img src={flag_small} alt=""/>
              <p>{myTask.taskItems[0].text}</p>
            </div>
          </div>
        </div>


      </div>

    </>
  );
}

export default Categories;