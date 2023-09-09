import React, {useCallback, useState} from 'react';
import logo from "../assets/image/logo.svg"
import home from "../assets/icon/home.svg"
import login from "../assets/image/register/login.png"
import {useNavigate, Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import {loginRequest} from "../store/actions/users";
import WrapperSignUp from "./WrapperSignUp";

function Login(props) {
    const dispatch = useDispatch();
    const [error, setError] = useState('')
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const handleChange = useCallback((key) => (ev) => {
        setError('')
        setFormData({ ...formData, [key]: ev.target.value })
    }, [formData]);

    const handleSubmit = useCallback(async (ev) => {
        ev.preventDefault();
        const { payload } = await dispatch(loginRequest(formData))
        if (payload.status === 'error') {
            setError(payload.message)
        }
    }, [formData])

    //
    const navigate = useNavigate()

    const handleHome = useCallback(() => {
        navigate('/home')
    }, [navigate])

    const handleReset = useCallback(() => {
        navigate('/reset')
    }, [navigate])
    return (
        <WrapperSignUp >
            <div className="login">


            <Helmet>
                <title>Login</title>
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


            <div className="login_container">
                <div className="login_content">

                    <form onSubmit={handleSubmit} className="login__form">
                        <h1>Login</h1>

                        <div><input className="input" type="email"
                                    id="username"
                                    placeholder="Email"
                                    required
                                    onChange={handleChange('email')}
                                    value={formData.email}/></div>
                        <div><input className="input" type="password"
                                    id="password"
                                    placeholder="Password"
                                    required
                                    onChange={handleChange('password')}
                                    value={formData.password}/></div>
                        <div className="login_label">
                            <div className="login_label_content"><input type="checkbox" className="login_checkbox" id="scales" name="remember"/>
                                <label htmlFor="scales">Remember me</label>
                            </div>
                            <div><a onClick={handleReset}>Forgot Password?</a></div>

                        </div>
                        <button type="submit" className="login_btn">Login</button>
                        {error ? <p>{error}</p> : null}
                    </form>
                    <div><img src={login} alt="sign-up"/></div>

                </div>
            </div>
            </div>
        </WrapperSignUp>
    );
}

export default Login;