import React, {useCallback, useState} from 'react';
import logo from "../assets/image/logo.svg"
import language from "../assets/icon/language.svg"
import arrow_drop from "../assets/icon/arrow_drop_down.svg"
import macbook from "../assets/image/home/Macbook.svg"
import star from "../assets/icon/star.svg"
import googleplay from "../assets/image/home/googleplay.svg"
import appStore from "../assets/image/home/app-store.svg"
import call from "../assets/icon/call.svg"
import mail from "../assets/icon/mail.svg"
import {useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet";
import Slider from "../components/Slider";
import Languages from "../components/Languages";

function Home(props) {
  const navigate = useNavigate()

  const handleSignUp = useCallback(() => {
    navigate('/signup')
  }, [navigate]);

  const handleLogin = useCallback(() => {
    navigate('/login')
  }, [navigate])

  const handleAccess = useCallback(() => {
    navigate('/access')
  }, [navigate])

  return (
    <div className="home">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <header className="home_header">
        <nav className="navHome">
          <div className="navHome__logo"><img src={logo} alt=""/></div>
          <div className="navHome__btn_content">
            <button className="navHome__btn" onClick={handleAccess}>Access to faqs</button>
            <button className="navHome__btn" onClick={handleSignUp}>Sign Up</button>
            <button className="navHome__btn" onClick={handleLogin}>Login</button>
          </div>
        </nav>
      </header>
      <main className="home_main">
        <img src={macbook} alt="" className="home_img"/>
        <div className="home_main_text">
          <h1>Welcome to the productivity site!</h1>
          <p>Welcome to our website, creating tasks
            here will help you organize your schedule and make you feel more satisfied.
            <br/>
            <br/>
            Join the millions of people who organize their lives and work with our website.
          </p>
        </div>

      </main>
      <aside className="home_aside">
        <div className="home_item_aside_1">
          <h1>Trusted</h1>
          <p>Millions of users around the world rely on usto organise their work flow and increase their
            productivity. We believe in complete user privacy. Your data belongs to you and only you.</p>
        </div>
        <div className="home_item_aside_2">
          <div>
            <h2>3M+</h2>
            <p>Users trust us </p>
          </div>
          <div>
            <div className="home_item_aside_star">
              <h2>4.8</h2>
              <img src={star} alt="star"/></div>
            <p>Our rating</p>

          </div>
        </div>
      </aside>
      <Slider/>
      <div className="home_application">
        <h3>Start organising your world today</h3>
        <div className="home_application_img">
          <a href="#"><img src={googleplay} alt="aplication"/></a>
          <a href="#"><img src={appStore} alt="aplication"/></a>
        </div>

        <p>"If you fail to plan, you are planning to fail!” - Benjamin Franklin</p>

      </div>


      <footer className="home_footer">
        <div className="home_footer_box"></div>
        <div className="home_footer_content">
          <div className="home_footer_item_1">
            <div className="home_footer_logo"><img src={logo} alt=""/>
            </div>
            <h4>Contacts</h4>
            <p>
              <a href="tel:(720) 776-5927">
                <img src={call} alt=""/>
                <span>(720) 776-5927</span>
              </a>
            </p>
            <p>
              <a href="mailto:etask@gmail.com">
                <img src={mail} alt=""/>
                <span>etask@gmail.com</span>
              </a>
            </p>
          </div>

          <div className="home_footer_item_2">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">CA Notice at Collection</a>
            <a href="#">Cookie Settings</a>
            <a href="#">Accessibility</a>
            <a href="#">Help</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Home;