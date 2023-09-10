import React from 'react';
import pluse from "../assets/image/dasboard/pluse.svg";
import drink from "../assets/image/dasboard/drink.svg";
import fitness from "../assets/image/dasboard/fitness.svg";
import book from "../assets/image/dasboard/book.svg";
import school from "../assets/image/dasboard/school.svg";
import Categories from "../pages/Categories";

function DashboardSlider(props) {
  return (

      <div className="dashboard_container_items">
        <div className="dashboard_item">
          <div><img src={drink} alt=""/>
            <h4>Drink water</h4></div>

          <p>Two glasses of water</p>
          <p>8:00 AM</p>
          <p>A glass of water</p>
          <p>11:00 AM</p>
        </div>
        <div className="dashboard_item">
          <div><img src={fitness} alt=""/>
            <h4>Do exercises</h4></div>

          <p>Plank 1 min</p>
          <p>Bodyweight squats 20x (3 rounds)</p>
          <p>Push-ups 10x (3 rounds)</p>
          <p>8:30 AM - 9:00 AM</p>
        </div>
        <div className="dashboard_item">
          <div><img src={book} alt=""/>
            <h4>Read books</h4></div>

          <p>William Shakespeare</p>
          <p>Romeo and Juliet</p>
          <p>10:00 AM - 12:00 AM</p>

        </div>
        <div className="dashboard_item">
          <div><img src={school} alt=""/>
            <h4>Do online classes</h4></div>

          <p>Do online classes</p>
          <p>16:15 PM - 18:00 PM</p>
          <p>Join an English class </p>
          <p>20:00 PM - 21:30 PM</p>
        </div>


      </div>

  );
}

export default DashboardSlider;