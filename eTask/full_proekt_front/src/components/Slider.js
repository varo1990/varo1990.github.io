import React, { useState } from 'react';
import data from "../data/data";
import stars from "../assets/icon/stars.svg";
import left from "../assets/icon/navigate_left.svg";
import right from "../assets/icon/navigate_right.svg";

function Slider(props) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % data.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + data.length) % data.length);
    };

    return (
        <div className="home_slider">
            <div className="home_slider_box"></div>
            <div className="home_slider_content">
                <h2>What our users are saying</h2>
                <div className="home_slider_item_1" key={currentSlide}>
                    <img src={stars} alt=""/>
                    <p>{data[currentSlide].desc}</p>
                    <span>{data[currentSlide].author}</span>
                    <button className="home_slider_btn_next" onClick={prevSlide}><img src={left} alt=""/></button>
                    <button className="home_slider_btn_preview" onClick={nextSlide}><img src={right} alt=""/></button>
                </div>
            </div>
        </div>
    );
}

export default Slider;
