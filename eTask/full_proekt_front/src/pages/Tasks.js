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
  const [showInstruction, setShowInstruction] = useState(false);
  const [taskDateValid, setTaskDateValid] = useState('');
  const [taskInputError, setTaskInputError] = useState('');
  const [taskDateError, setTaskDateError] = useState('');




  const handleSubmit = useCallback((ev) => {
    ev.preventDefault();
    let hasError = false;

    if (!category) {
      setError("Error category");
      hasError = true;
    } else if (!color) {
      setError("Error color");
      hasError = true;
    } else if (taskItems.length === 0) {
      setError("Error item");
      hasError = true;
    } else {
      dispatch(createTask({ taskItems, category, color, email, telegram }));
      navigate('/category');
    }

    if (!hasError) {
      setError(""); // Сбросить ошибку, если она не существует
    }
  }, [dispatch, taskItems, category, color, email, telegram]);


  const handleCancel = () => {
    navigate('/dashboard');
  };

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

  const handleDateChange = (ev) => {
    const selectedDate = new Date(ev.target.value);
    const currentDate = new Date();
    setTaskDateValid(ev.target.value);

    if (selectedDate < currentDate) {
      alert('Please select a future date.');
    } else {
      setTaskDateValid(ev.target.value);
    }
  };

  const handleAddTask = () => {
    // Проверяем, заполнены ли оба поля
    if (taskInput.trim() === '' && taskDateValid === '') {

      setTaskInputError('Please fill out this field.');
      setTaskDateError('Please fill out this field.');
    } else if (taskInput.trim() === '') {
      setTaskInputError('Please fill out this field.');
      setTaskDateError(''); // Сбрасываем ошибку для даты
    } else if (taskDateValid === '') {
      setTaskDateError('Please fill out this field.');
      setTaskInputError(''); // Сбрасываем ошибку для текста
    } else {
      setTaskItems(prevTaskItems => [
                ...prevTaskItems,
                {
                  id: Date.now(),
                  text: taskInput,
                  datetime: taskDateValid,
                }
              ]);
      setTaskInput('');
      setTaskDateValid('');
      setTaskInputError('');
      setTaskDateError('');
    }
  };


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
                  <div className='task_add_category'>
                    <input
                      className='task_input'
                      value={categoryInput}
                      onChange={(ev) => {
                        setCategoryInput(ev.target.value);
                        setShowInstruction(false); // Скрыть инструкцию при изменении ввода
                      }}
                      type="text"
                      placeholder="Add a category title"
                    />
                    {showInstruction && <p>Please enter a category.</p>}
                    <span
                      className='hvr-radial-out'
                      onClick={() => {
                        if (categoryInput.trim() !== '') {
                          handleAddCategory(categoryInput);
                          setCategoryInput('');
                        } else {
                          setShowInstruction(true);
                        }
                      }}
                      disabled={categoryInput.trim() === ''}
                    >Add Category</span>
                  </div>

                  <div className='task_category_btn'>
                    {categoryList.map((item, index) => (
                      <span className={index === categoryIndex ? "cat-active" : 'hvr-sweep-to-right'}
                            onClick={(() => handleCategoreisList(item.title, index))}
                            key={item.id}> <p>+</p>
                        {item.title}
                    </span>
                    ))}
                    <p style={{color: "red"}}>{error === "Error category" ? error : null}</p>
                  </div>
                  <hr/>
                  <div className="task_color">
                  <div className="task_title_color">
                    <img src={palet} alt=""/>
                    <h4>Color</h4>

                  </div>

                  <div className='task_color_btn'>
                    {categoryColors.map((item, index) => (
                      <span
                        key={index}
                        className={index === colorIndex ? "color-active" : ""}
                        onClick={(() => handleColorList(item, index))}
                        style={{background: item}}></span>
                    ))}
                  </div>
                  <p style={{color: "red"}}>{error === "Error color" ? error : null}</p>

                </div>


                  <div className='task_notes'>
                    <input
                      className='task_input'
                      placeholder='Notes'
                      value={taskInput}
                      type="text"
                      onChange={(ev) => {
                        setTaskInput(ev.target.value);
                        setTaskInputError('');
                      }}
                    />
                    {taskInputError && <p style={{ color: 'red' }}>{taskInputError}</p>}
                    <input
                      className='task_input_clock'
                      value={taskDateValid}
                      type="datetime-local"
                      onChange={handleDateChange}
                    />
                    {taskDateError && <p style={{ color: 'red' }}>{taskDateError}</p>}
                    <span
                      className='hvr-radial-out'
                      onClick={handleAddTask}
                    >Add </span>
                  </div>

                  <ol className='task_list'>
                    {taskItems.map((item, index) => (
                      <React.Fragment key={index}>
                        <li>{item.text} {moment(item.datetime).format('LLLL')} {
                          <span  className='hvr-radial-out'

                            onClick={() => handleDelete(item.id)}
                               >Delete</span>}</li>
                        <hr/>
                      </React.Fragment>
                    ))}
                  </ol>

                  <div>
                    <p style={{color: "red"}}>{error === "Error item" ? error : null}</p>
                    <input className='task_input' onChange={(ev) => setEmail(ev.target.value)} type="email"
                           placeholder="email"/>
                    <input className='task_input' onChange={(ev) => setTelegram(ev.target.value)} type="text"
                           placeholder="telegram"/>
                  </div>
                </div>
              </div>

              <div className="task_button">
                <button type='submit'>Save</button>
                <span onClick={handleCancel}>Cancel</span>
              </div>
            </form>
          </div>

        </div>
      </div>
    </Wrapper>
  );
}

export default Tasks;




