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

const Categories = (props) => {
  const [taskList, setTaskList] = useState([
    {
      color: "#3A4FB5",
      email: "varo.1990@yahoo.com",
      hours: ['3', '10', '7'],
      list: ['13212312', '798797898'],
      min: ['20', '15', '10'],
      category: "READ_BOOKS",
      telegram: "asdasdasdas",
      timeType: [2, 1, 1],
    },
  ])


  const [editList, setEditList] = useState([])

  return (
    <div>

      {
        !_.isEmpty(taskList) && taskList.map((task, index) => {
          return (
            <div className="dashboard_container_list" style={{borderColor: task.color}} key={index}>

              <div className="dashboard_edit">
                <Edit
                  onClick={() => {
                    setEditList(task)
                  }}
                  link={'tasks-edit'}
                />
              </div>

              <div className="dashboard_container_list_item">
                <h2>{task.category}</h2>



                <div className="dashboard_container_list_item_2">
                  <div className="dashboard_container_list_item_2_item">
                    <img src={palette} alt=""/>
                    <div className="task_form_item2_title">
                      <span style={{background: task.color}}/>
                    </div>
                  </div>
                  {!_.isEmpty(task.hours) && task.hours.map(v => {
                    return (
                      <div className="dashboard_container_list_item_2_item">

                        <img src={clock} alt=""/>
                        <p>{v} - {task.min[index]} - {dateType.filter(v => v.value === task.timeType[index])[0]?.label}</p>
                        <div className="dashboard_container_list_item_2_item">
                          {/*<img src={description_small} alt=""/>*/}
                          <p>{task.list[index]}</p>
                        </div>
                      </div>)
                  })}


                </div>
              </div>


            </div>
          )
        })
      }


      {/*<div className="dashboard_container_list">*/}

      {/*  <div className="dashboard_edit">*/}
      {/*    <Edit/>*/}
      {/*  </div>*/}

      {/*  <div className="dashboard_container_list_item">*/}

      {/*    <div className="dashboard_container_list_item_1">*/}

      {/*      <img src={drink_local} alt=""/>*/}
      {/*      <img src={drink_local} alt=""/>*/}
      {/*      <img src={drink_local} alt=""/>*/}
      {/*    </div>*/}
      {/*    <div className="dashboard_container_list_item_2">*/}
      {/*      <div className="dashboard_container_list_item_2_item">*/}
      {/*        <img src={palette} alt=""/>*/}
      {/*        <img src={color1} alt=""/>*/}
      {/*      </div>*/}
      {/*      <div className="dashboard_container_list_item_2_item">*/}
      {/*        <img src={clock} alt=""/>*/}
      {/*        <p>8:00 AM</p>*/}
      {/*      </div>*/}
      {/*      <div className="dashboard_container_list_item_2_item">*/}
      {/*        <img src={clock} alt=""/>*/}
      {/*        <p>11:00 AM</p>*/}
      {/*      </div>*/}
      {/*      <div className="dashboard_container_list_item_2_item">*/}
      {/*        <img src={flag_small} alt=""/>*/}
      {/*        <p>The goal is to live a healthy lifestyle and lose weight.</p>*/}
      {/*      </div>*/}
      {/*      <div className="dashboard_container_list_item_2_item">*/}
      {/*        <img src={description_small} alt=""/>*/}
      {/*        <p>Drink water dutifully, every day at the same time schedule,*/}
      {/*          drink every 3 hours continuously.</p>*/}
      {/*      </div>*/}

      {/*    </div>*/}
      {/*  </div>*/}


      {/*</div>*/}
    </div>
  );
}

export default Categories;