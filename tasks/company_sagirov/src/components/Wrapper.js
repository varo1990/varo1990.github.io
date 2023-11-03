import React from 'react';
import Navbar from "./Navbar";
import logo from "../assets/images/logo.png"
import Content from "./content";

function Wrapper(props) {
  return (
    <div className='wrapper'>
      <div className='header'>
        <div className="header_content">
        <img src={logo} alt=""/>
        <Navbar/>
      </div>
      </div>
      <Content/>





      {props.children}
    </div>
  );
}

export default Wrapper;