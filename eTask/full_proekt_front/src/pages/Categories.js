import React, {useState, useEffect, useCallback} from 'react';
import palette from "../assets/image/dasboard/palette.svg";
import clock from "../assets/image/dasboard/clock.svg";
import Edit from "../components/Edit";
import { categoies, myTask } from "../data/DataTask";
import moment from "moment/moment";
import {useDispatch, useSelector} from "react-redux";
import task from "../store/reducers/task";
import {getTaskRequest, deleteCategory, deleteTask} from "../store/actions/task";
import Utils from "../Utils";
import { Carousel } from 'react-responsive-carousel';
import Api from "../Api";

const Categories = (props) => {
  const [checkedItems, setCheckedItems] = useState({});

  const dispatch = useDispatch();

  const categories = useSelector(state => state.task.task);

  const taskStatus = useSelector(state => state.task.taskStatus);

  const {id} = Utils.getUser()

  const handleCheckboxClick = (itemIndex) => {
    Api.markTasksAsDone(itemIndex)
    if (!checkedItems[itemIndex]) {

      setCheckedItems({ ...checkedItems, [itemIndex]: true });
    } else {

    }
  };

  const handleDeleteCategory = useCallback((categoryId) => {
    dispatch(deleteCategory(categoryId));
  },[]);

  const handleDeleteTask = useCallback((taskId,categoryIndex) => {
    dispatch(deleteTask({taskId, categoryIndex}));
  },[]);

  useEffect(() => {

    dispatch(getTaskRequest(id));
    console.log('getTaskRequest', id);
  }, [ id ]);

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
    <div>

      <div className="categories">
        <h2>My Tasks</h2>
        {/*<Carousel>*/}
        {categories.map((item,categoryIndex)=>(
          <div className="categories_container" style={{
            borderColor: item.color, borderRadius: "20px"
          }}>
            <div className="categories_edit">
              <h2>{item.title}</h2>
             <button onClick={() => handleDeleteCategory(item.id)} >Delete</button>
            </div>
            <div className="categories_container_list_color">
              <img src={palette} alt="" />
              <span style={{ background: item.color }}></span>
            </div>
            <div className="categories_container_list">
              <ol>

                {item.tasks.map(task =>(
                  <li key={task.id}>
                    <div className='categories_list_items'>
                      <div className="categories_list_items_title">
                        <h3>{task.title}</h3>
                        <button onClick={() => handleDeleteTask(task.id, categoryIndex)}>Delete</button>
                      </div>


                      <div className="categories_clock">
                        <div className="categories_clock_item_1">
                          {/*<p>{item.text}</p>*/}
                          <img src={clock} alt="" />
                          <p>{moment(task.datetime).format('LLLL')}</p>
                        </div>
                        <div className="categories_clock_item_1">
                          <label htmlFor={`done-${task.id}`}>Done</label>
                          <input
                            type="checkbox"
                            className="login_checkbox"
                            id={`done-${task.id}`}
                            name={`remember-${task.id}`}
                            checked={checkedItems[task.id] || false}
                            onChange={() => handleCheckboxClick(task.id)}
                            disabled={checkedItems[task.id] ? true : false}
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
        {/*</Carousel>*/}
      </div>


    </div>
  );
}

export default Categories;
























