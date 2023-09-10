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
import Categories from "./Categories";
import DashboardSlider from "../components/DashboardSlider";

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

                        </div>

                    </div>
                    <div className="dashboard_title">
                        <h3>Dashboard</h3>

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
                        <DashboardSlider/>
                            <Categories/>
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