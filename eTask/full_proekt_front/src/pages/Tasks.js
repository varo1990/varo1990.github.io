import React, {useCallback, useEffect, useState} from 'react';
import Wrapper from "../components/Wrapper";
import {useNavigate} from "react-router-dom";
import left from "../assets/image/task/left.svg";
import see from "../assets/image/task/see.svg";
import cat from "../assets/image/task/cat.png";
import palet from "../assets/image/task/palette.png";


import {categoies, categoryColors} from "../data/DataTask";
import _ from "lodash";
import moment from "moment";
import {useDispatch} from "react-redux";
import {createTask} from "../store/actions/task";


const Tasks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [categoryList, setCategoryList] = useState(categoies);
  const [category, setCategory] = useState("");
  const [categoryIndex, setCategoryIndex] = useState("");
  const [colorIndex, setColorIndex] = useState("");
  const [color, setColor] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [taskItems, setTaskItems] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [email, setEmail] = useState("");
  const [telegram, setTelegram] = useState("");
  const [error, setError] = useState("");

  console.log(error)
  const handleSubmit = useCallback((ev) => {
    ev.preventDefault();
    if (!category) {
      setError("Error category");
    } else if (!color) {
      setError("Error color");
    } else if (taskItems.length === 0) {
      setError("Error item");
    } else {
      dispatch(createTask({taskItems, category, color, email, telegram}));
    }
    setError("")
  }, [dispatch, taskItems, category, color, email, telegram]);


  const handleCategoreisList = useCallback((title, index) => {
    setCategoryIndex(index);
    setCategory(title, index);
  }, []);
  const handleAddCategory = useCallback((title, index) => {
    setCategoryList((prev) => [
      ...prev,
      {
        key: "",
        title: title
      }
    ]);
    setCategoryInput("");
  }, []);
  const handleColorList = useCallback((color, index) => {
    setColorIndex(index);
    setColor(color);
  }, []);
  const [taskDateValid, setTaskDateValid] = useState('');
  const handleDateChange = (ev) => {
    const selectedDate = new Date(ev.target.value);
    const currentDate = new Date();

    if (selectedDate < currentDate) {
      alert('Please select a future date.');
    } else {
      setTaskDateValid(ev.target.value);
    }
  };
  const handleAddTask = useCallback(() => {
    if (taskInput.trim() !== '') {
      if (!taskItems.some(item => item.text === taskInput)) {
        setTaskItems(prevTaskItems => [
          ...prevTaskItems,
          {
            id: Date.now(),
            text: taskInput,
            datetime: taskDateValid,
          }
        ]);
        setTaskInput('');
      } else {
        console.log("Task already exists");
      }
    }
    setTaskInput("");
    setTaskDateValid("");
  }, [taskInput, taskItems, taskDateValid]);
  const handleDelete = useCallback((id) => {
    setTaskItems((prevTaskItems) =>
      prevTaskItems.filter((item) => item.id !== id)
    );
  }, [])

  return (
    <Wrapper>
      <div className="content">
        <div className="task">
          <div className="task_header">
            <div className="task_header_content">
              <button>
                <img src={left} alt=""/>
              </button>

              <div className="task_title">
                <img src={see} alt=""/>
                <h4>View Task details & Notes</h4>
              </div>
            </div>
          </div>
          <hr/>
          <div className="task_container">
            <div className="task_form_item1_title">
              <img src={cat} alt=""/>
              <h4>Categories</h4>
            </div>
            <form onSubmit={(ev) => handleSubmit(ev)} className='task_form'>

              <div className="categoreis">
                <div className="category-block">
                  <div><input className='task_input'
                    value={categoryInput}
                              onChange={(ev) => setCategoryInput(ev.target.value)} type="text"
                              placeholder="Add a category title"/>
                    <span onClick={() => handleAddCategory(categoryInput)}
                          style={{width: "max-content", height: 10, background: "yellow", cursor: "pointer"}}>Add</span>
                  </div>
                  <br/><br/>
                  <div className='task_category_btn'>
                    {categoryList.map((item, index) => (
                      <span className={index === categoryIndex ? "cat-active" : ""}
                            onClick={(() => handleCategoreisList(item.title, index))}
                            style={{border: "1px solid red", cursor: "pointer"}} key={item.id}>
                      {item.title}
                    </span>
                    ))}
                    <p style={{color: "red"}}>{error === "Error category" ? error : null}</p>
                  </div>
                  <br/>
                  <br/>
                  <div className="task_form_item2_title">
                    <img src={palet} alt=""/>
                    <h4>Color</h4>

                  </div>

                  <div style={{display: "flex"}}>
                    {categoryColors.map((item, index) => (
                      <span
                        key={index}
                        className={index === colorIndex ? "color-active" : ""}
                        onClick={(() => handleColorList(item, index))}
                        style={{background: item, width: 40, height: 40, display: "block"}}></span>
                    ))}
                  </div>
                  <p style={{color: "red"}}>{error === "Error color" ? error : null}</p>
                  <br/>
                  <div className='task_notes'>
                    <input className='task_input'
                           placeholder='Notes'
                      value={taskInput}
                      type="text"
                      onChange={(ev) => setTaskInput(ev.target.value)}
                           ></input>
                    <input className='task_input_clock'
                      value={taskDateValid}
                      type="datetime-local" onChange={(ev) => handleDateChange(ev)}/>
                  </div>
                  <span onClick={handleAddTask}
                        style={{width: "max-content", height: 10, background: "yellow", cursor: "pointer"}}>Add</span>
                  <br/>
                  <br/>
                  <ol>
                    {taskItems.map((item, index) => (
                      <React.Fragment key={index}>
                        <li>{item.text} {moment(item.datetime).format('LLLL')} {
                          <span onClick={() => handleDelete(item.id)}
                                style={{
                                  width: "max-content",
                                  height: 10,
                                  background: "red",
                                  cursor: "pointer"
                                }}>Delete</span>}</li>
                      </React.Fragment>
                    ))}
                  </ol>
                  <br/>
                  <br/>
                  <div>
                    <p style={{color: "red"}}>{error === "Error item" ? error : null}</p>
                    <input className='task_input' onChange={(ev) => setEmail(ev.target.value)} type="email" placeholder="email"/>
                    <input className='task_input' onChange={(ev) => setTelegram(ev.target.value)} type="text" placeholder="telegram"/>
                  </div>
                </div>
              </div>
              <br/>
              <br/>
              <br/>
              <button type={"submit"}>Save</button>
              <span>Cecle</span>
            </form>
          </div>

        </div>
      </div>
    </Wrapper>
  );
}

export default Tasks;




