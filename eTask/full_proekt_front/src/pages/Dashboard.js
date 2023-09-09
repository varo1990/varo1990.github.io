import React, {useCallback} from 'react';
import MenuLeft from "../components/MenuLeft";
import Languages from "../components/Languages";
import Share from "../components/Share";
import Wrapper from "../components/Wrapper";
import search from "../assets/image/dasboard/search.svg";
import user from "../assets/image/dasboard/user.png";
import calendar from "../assets/image/dasboard/calendar.svg";
import arrowCal from "../assets/image/dasboard/ArrowCal.svg";
import pluse from "../assets/image/dasboard/pluse.svg";
import drink from "../assets/image/dasboard/drink.svg";
import fitness from "../assets/image/dasboard/fitness.svg";
import book from "../assets/image/dasboard/book.svg";
import school from "../assets/image/dasboard/school.svg";
import palette from "../assets/image/dasboard/palette.svg";
import drink_local from "../assets/image/dasboard/local_drink.svg";
import color1 from "../assets/image/dasboard/color1.svg";
import clock from "../assets/image/dasboard/clock.svg";
import flag_small from "../assets/image/dasboard/flag_small.svg";
import description_small from "../assets/image/dasboard/description_small.svg";
import Edit from "../components/Edit";
import {useNavigate} from "react-router-dom";

function Dashboard(props) {
    const navigate = useNavigate()


    const handleCreate = useCallback(() => {
        navigate('/tasks')
    }, [navigate]);
    return (
        <Wrapper className="wrapper">

            <div className="content">
                <div className="dashboard">
                    <div className="dashboard_header">
                        <div className="dashboard_header_content">
                            <div className="dashboard_search">
                                <img src={search} alt=""/>
                                <input className="form-search" type="search" placeholder="Search" aria-label="Search"/>
                            </div>
                            <div className="dashboard_user">
                                <img src={user} alt=""/>
                                <h2>Linda Taylor</h2>
                            </div>
                            <div className="languages">
                                <Languages/>
                            </div>
                        </div>

                    </div>
                    <div className="dashboard_title">
                        <h3>Dashboard</h3>
                        <div className="dashboard_calendar">
                            <img src={calendar} alt=""/>
                            <p>Calendar</p>
                            <button><img src={arrowCal} alt=""/></button>
                        </div>
                    </div>
                    <div className="dashboard_container">
                        <div className="dashboard_title">
                            <h4>To Do</h4>
                            <div className="dashboard_creat">
                                <button onClick={handleCreate}>
                                    <img src={pluse} alt=""/>Create
                                </button>
                            </div>
                        </div>
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
                        <div className="dashboard_container_list">

                            <Share/>
                            <div className="dashboard_edit">
                                <Edit/>
                            </div>

                            <div className="dashboard_container_list_item">

                                <div className="dashboard_container_list_item_1">

                                    <img src={drink_local} alt=""/>
                                    <img src={drink_local} alt=""/>
                                    <img src={drink_local} alt=""/>
                                </div>
                                <div className="dashboard_container_list_item_2">
                                    <div className="dashboard_container_list_item_2_item">
                                        <img src={palette} alt=""/>
                                        <img src={color1} alt=""/>
                                    </div>
                                    <div className="dashboard_container_list_item_2_item">
                                        <img src={clock} alt=""/>
                                        <p>8:00 AM</p>
                                    </div>
                                    <div className="dashboard_container_list_item_2_item">
                                        <img src={clock} alt=""/>
                                        <p>11:00 AM</p>
                                    </div>
                                    <div className="dashboard_container_list_item_2_item">
                                        <img src={flag_small} alt=""/>
                                        <p>The goal is to live a healthy lifestyle and lose weight.</p>
                                    </div>
                                    <div class="dashboard_container_list_item_2_item">
                                        <img src={description_small} alt=""/>
                                        <p>Drink water dutifully, every day at the same time schedule,
                                            drink every 3 hours continuously.</p>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="dashboard_in_progress">
                        <h3>IN Progress</h3>
                        <div class="dashboard_in_progress_item1">

                        </div>
                        <div class="dashboard_in_progress_item1">

                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Dashboard;