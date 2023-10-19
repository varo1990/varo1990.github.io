import React, {useCallback} from 'react';
import logo from "../assets/image/logo.svg";
import home from "../assets/icon/home.svg";
import {useNavigate} from "react-router-dom";

function Header(props) {
    const navigate = useNavigate()

    const handleHome = useCallback(() => {
        navigate('/home')
    }, [navigate])

    return (
    <header className="header">
        <nav className="nav">
            <img src={logo} alt="logo"/>
            <a onClick={handleHome}>
                <img src={home} alt="home"/>
                <p>Home</p>
            </a>
        </nav>
    </header>
  );
}

export default Header;