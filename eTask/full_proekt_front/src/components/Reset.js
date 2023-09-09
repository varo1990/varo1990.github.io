import React, {useCallback} from 'react';
import logo from "../assets/image/logo.svg"
import home from "../assets/icon/home.svg"
import reset from "../assets/image/register/researching.png"
import {useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet";
import WrapperSignUp from "./WrapperSignUp";

function Reset(props) {
    const navigate = useNavigate()


    const handleHome = useCallback(() => {
        navigate('/home')
    }, [navigate]);

    const handleLogin = useCallback(() => {
        navigate('/login')
    }, [navigate])

    return (

        <WrapperSignUp >
            <div className="reset">
            <Helmet>
                <title>Reset</title>
            </Helmet>
            <header className="header">
                <nav className="nav">
                    <img src={logo} alt="logo"/>
                    <a onClick={handleHome}>
                        <img src={home} alt="home"/>
                        <p>Home</p>
                    </a>
                </nav>
            </header>

            <div className="reset_container">
                <div className="reset_content">
                    <form action="#" className="reset__form">
                        <h1>Reset your password</h1>

                        <div><input className="input" type="email" name="email" placeholder="Email"/></div>

                        <button type="submit" className="reset_btn">Reset password</button>
                        <a onClick={handleLogin}>Go to login</a>
                    </form>
                    <div><img src={reset} alt="sign-up"/></div>

                </div>
            </div>
            </div>
        </WrapperSignUp>
    );
}

export default Reset;