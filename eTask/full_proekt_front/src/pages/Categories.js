import React, { useState, useEffect } from 'react';
import palette from "../assets/image/dasboard/palette.svg";
import clock from "../assets/image/dasboard/clock.svg";
import Edit from "../components/Edit";
import { categoies, myTask } from "../data/DataTask";
import moment from "moment/moment";
import {useDispatch, useSelector} from "react-redux";
import task from "../store/reducers/task";
import {getTaskRequest} from "../store/actions/task";
import Utils from "../Utils";

const Categories = (props) => {
  const [checkedItems, setCheckedItems] = useState({});

  const dispatch = useDispatch();

  const task = useSelector(state => state.task.task);

  const taskStatus = useSelector(state => state.task.taskStatus);


  const {id} = Utils.getUser()

  const handleCheckboxClick = (itemIndex) => {
    if (!checkedItems[itemIndex]) {

      setCheckedItems({ ...checkedItems, [itemIndex]: true });
    } else {

    }
  };
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
    <div>
      <div className="categories">
        {task.map(item=>(
          <div className="categories_container" style={{
            borderColor: item.color, borderRadius: "20px"
          }}>
            <div className="categories_edit">
              <h2>{item.title}</h2>
              <Edit />
            </div>

            <div className="categories_container_list">
              <ol>
                <div className="categories_container_list_color">
                  <img src={palette} alt="" />
                  <span style={{ background: item.color }}></span>
                </div>

                  <li key={item.id}>
                    <div className='categories_list_items'>
                      <h3>{item.text}</h3>
                      <div className="categories_clock">
                        <div className="categories_clock_item_1">
                          <p>{item.description}</p>
                          <img src={clock} alt="" />
                          <p>{moment(item.datetime).format('LLLL')}</p>
                        </div>
                        <div className="categories_clock_item_1">
                          <label htmlFor={`done-${item.id}`}>Done</label>
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
              </ol>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Categories;





















// import React, { useState } from 'react';
// import palette from "../assets/image/dasboard/palette.svg";
// import clock from "../assets/image/dasboard/clock.svg";
// import Edit from "../components/Edit";
// import { categoies, myTask } from "../data/DataTask";
// import moment from "moment/moment";
//
// const Categories = (props) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//
//   const handleNextSlide = () => {
//     setCurrentSlide((currentSlide + 1) % myTask.taskItems.length);
//   };
//
//   const handlePrevSlide = () => {
//     setCurrentSlide((currentSlide - 1 + myTask.taskItems.length) % myTask.taskItems.length);
//   };
//
//   return (
//     <div>
//       <div className="categories">
//         <div className="categories_container" style={{
//           borderColor: myTask.color, borderRadius: "20px"
//         }}>
//           <div className="categories_edit">
//             <h2>{myTask.category}</h2>
//             <Edit />
//           </div>
//
//           <div className="categories_container_list">
//             <ol>
//               <div className="categories_container_list_color">
//                 <img src={palette} alt="" />
//                 <span style={{ background: myTask.color }}></span>
//               </div>
//               {myTask.taskItems.map((item, index) => (
//                 <li key={index} className={index === currentSlide ? 'active' : ''}>
//                   <div className='categories_list_items'>
//                     <h3>{item.text}</h3>
//                     <div className="categories_clock">
//                       <div className="categories_clock_item_1">
//                         <img src={clock} alt="" />
//                         <p>{moment(item.datetime).format('LLLL')}</p>
//                       </div>
//                       <div className="categories_clock_item_1">
//                         <label htmlFor="done">Done</label>
//                         <input type="checkbox" className="login_checkbox" id="done" name="remember" />
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ol>
//           </div>
//
//           <button onClick={handlePrevSlide}>Previous</button>
//           <button onClick={handleNextSlide}>Next</button>
//         </div>
//       </div>
//     </div>
//   );
// }
//
// export default Categories;



