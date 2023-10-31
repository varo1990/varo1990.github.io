import React, {useCallback} from 'react';
import Wrapper from "../components/Wrapper";
import search from "../assets/image/dasboard/search.svg";
import user from "../assets/image/dasboard/user.jpg";
import pluse from "../assets/image/dasboard/pluse.svg";
import {useNavigate} from "react-router-dom";
import Categories from "./Categories";
import DashboardSlider from "../components/DashboardSlider";
import Analytics from "../components/Analytics";
import {Helmet} from "react-helmet";
import LogOut from "../components/LogOut";
import Utils from "../Utils";

function Dashboard(props) {
  const navigate = useNavigate()
  const currentUser = Utils.getUser();


  const handleCreate = useCallback(() => {
    navigate('/tasks')
  }, [navigate]);
  return (
    <Wrapper className="wrapper">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

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
                <h2>{currentUser.firstName} {currentUser.lastName}</h2>
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
            {/*<DashboardSlider/>*/}
            <Categories/>
          </div>

          {/*<div className="dashboard_in_progress">*/}
          {/*  <h3>IN Progress</h3>*/}
          {/*  <div class="dashboard_in_progress_item1">*/}
          {/*    <Analytics/>*/}
          {/*  </div>*/}
          {/*  <div class="dashboard_in_progress_item1">*/}

          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </Wrapper>
  );
}

export default Dashboard;
