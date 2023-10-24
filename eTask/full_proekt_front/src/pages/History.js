import React, {useEffect, useState} from 'react';
import Wrapper from "../components/Wrapper";
import palette from "../assets/image/dasboard/palette.svg";
import clock from "../assets/image/dasboard/clock.svg";
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import Utils from "../Utils";
import {getTaskHistory, getTaskRequest} from "../store/actions/task";

function History(props) {
  const [checkedItems, setCheckedItems] = useState({});

  const dispatch = useDispatch();

  const task = useSelector(state => state.task.task);
  console.log(task, 787878)

  const history = useSelector(state => state.task.history);
  console.log(history, 6969696)

  const taskStatus = useSelector(state => state.task.taskStatus);

  const {id} = Utils.getUser()

  const handleCheckboxClick = (itemIndex) => {
    if (!checkedItems[itemIndex]) {

      setCheckedItems({ ...checkedItems, [itemIndex]: true });
    } else {

    }
  };


  useEffect(() => {

    dispatch(getTaskHistory(id));
  }, [dispatch, id ]);


  useEffect(() => {

    dispatch(getTaskRequest(id));
  }, [dispatch, id ]);

  useEffect(() => {
    const savedState = localStorage.getItem('checkedItems');
    if (savedState) {
      setCheckedItems(JSON.parse(savedState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('checkedItems', JSON.stringify(checkedItems));
  }, [checkedItems]);
  return (
    <Wrapper>
      <div className="content">
        <div className="history">
          <h2>History</h2>
          <div className="history_content">
            {task.map(item=>(

              <div className="history_container" style={{
                borderColor: item.color, borderRadius: "20px"
              }}>

                <div className="history_edit">
                  <h2>{item.title}</h2>
                  <button>Delete</button>
                </div>
                <div className="history_container_list_color">


                </div>
                <div className="history_container_list">
                  <ol>

                    {item.tasks.map(task =>(
                      <li key={task.id}>
                        <div className='history_list_items'>
                          <div className="history_list_items_title">

                            <p>{task.title}</p>
                            <button>Delete</button>
                          </div>
                          <div className="history_clock">
                            <div className="history_clock_item_1">
                              {/*<p>{item.text}</p>*/}
                              <img src={clock} alt="" />
                              <p>{moment(task.datetime).format('LLLL')}</p>
                            </div>
                            <div className="history_clock_item_1">
                              <label htmlFor={`done-${task.id}`}>Done</label>
                              <input
                                type="checkbox"
                                className="login_checkbox"
                                id={`done-${item.id}`}
                                name={`remember-${item.id}`}
                                checked={checkedItems[item.id] || false}
                                onChange={() => handleCheckboxClick(item.id)}
                                disabled={checkedItems[item.id] ? true : false}
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}

                  </ol>
                </div>
              </div>


            ))}
          </div>
        </div>

      </div>
    </Wrapper>
  );
}

export default History;