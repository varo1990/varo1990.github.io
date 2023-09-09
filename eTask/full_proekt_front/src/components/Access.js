import React, {useCallback} from 'react';
import WrapperSignUp from "./WrapperSignUp";
import logo from "../assets/image/logo.svg";
import home from "../assets/icon/home.svg";
import {useNavigate} from "react-router-dom";
import right from "../assets/image/home/access.svg"
import img1 from "../assets/image/home/Group1.svg"
import img2 from "../assets/image/home/Group2.svg"
import img3 from "../assets/image/home/Group3.svg"
import img4 from "../assets/image/home/Group4.svg"
import img5 from "../assets/image/home/Group5.svg"
import img6 from "../assets/image/home/Group6.svg"
import img7 from "../assets/image/home/Group7.svg"
import img8 from "../assets/image/home/Group8.svg"

function Access(props) {
  const navigate = useNavigate()


  const handleHome = useCallback(() => {
    navigate('/home')
  }, [navigate])
  return (
    <WrapperSignUp>
      <div className='access'>


        <header className="header">
          <nav className="nav">
            <img src={logo} alt="logo"/>
            <a onClick={handleHome}>
              <img src={home} alt="home"/>
              <p>Home</p>
            </a>
          </nav>
        </header>
        <h2>Access to FAQs</h2>


        <div className="access_container">
          <h4>FAQ for our Productivity Website</h4>
          <div className="access_content">
            <div className="access_item">

              <a href="#">
                <img src={right} alt=""/>
                <p>How to change password?</p>

              </a>
            </div>
            <div className="access_item">

              <a href="#">
                <img src={right} alt=""/>
                <p>How do I delete my account?</p>

              </a>
            </div>
            <div className="access_item">

              <a href="#">
                <img src={right} alt=""/>
                <p>Change permissions for sites you visit</p>

              </a>
            </div>
            <div className="access_item">

              <a href="#">
                <img src={right} alt=""/>
                <p>Block or allow notifications from sites</p>

              </a>
            </div>
            <div className="access_item">

              <a href="#">
                <img src={right} alt=""/>
                <p>Get your info across all your devices</p>

              </a>
            </div>
            <div className="access_item">

              <a href="#">
                <img src={right} alt=""/>
                <p>Why are tasks important?</p>

              </a>
            </div>
            <div className="access_item">

              <a href="#">
                <img src={right} alt=""/>
                <p>How do you know which tasks are important?</p>

              </a>
            </div>
            <div className="access_item">

              <a href="#">
                <img src={right} alt=""/>
                <p>Why is task planning important?</p>

              </a>
            </div>
            <div className="access_item">

              <a href="#">
                <img src={right} alt=""/>
                <p>Why are the benefits of task?</p>

              </a>
            </div>
            <div className="access_item">

              <a href="#">
                <img src={right} alt=""/>
                <p>Get your info across all your devices</p>

              </a>
            </div>
          </div>
        </div>

        <div className="access_footer">
          <div className="access_footer_content">

          </div>
          <div className="access_con">
          <div className="access_footer_item1">
            <h3>We’re Here to Help.</h3>
            <p>We always want to hear from you! Let us know how we can best help you and we'll do our very best.</p>
            <h3>Let us hear from you directly!</h3>
            <span>EMAIL US AT</span>
            <a href="#">etask@gmail.com</a>
          </div>
          <div className="access_footer_item2">


            <img src={img1} alt=""/>
            <img src={img2} alt=""/>
            <img src={img3} alt=""/>
            <img src={img4} alt=""/>
            <img src={img5} alt=""/>
            <img src={img6} alt=""/>
            <img src={img7} alt=""/>
            <img src={img8} alt=""/>
          </div>
        </div>

        </div>

      </div>
    </WrapperSignUp>
  );
}

export default Access;