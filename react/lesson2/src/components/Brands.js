import React, {Component} from 'react';
import PropTypes from "prop-types";
import noimg from "../assets/img/images.png";


class Brands extends Component {
    static propTypes = {
        logo1: PropTypes.string,
        logo2: PropTypes.string,
        logo3: PropTypes.string,
        logo4: PropTypes.string,
        logo5: PropTypes.string
    }

    static defaultProps = {
        logo1: noimg,
        logo2: noimg,
        logo3: noimg,
        logo4: noimg,
        logo5: noimg
    }

    render() {
        const {logo1, logo2, logo3, logo4, logo5} = this.props

        return (
            <div className='brand'>
                <h2>OUR BRANDS</h2>
                <div className="brand_logo">
                    <div className="brand-item">
                        <a href="#">
                            <img className="brand-img" src={logo1} alt=""/>
                        </a>
                    </div>
                    <div className="brand-item">
                        <a href="#">
                            <img className="brand-img" src={logo2} alt=""/>
                        </a>
                    </div>
                    <div className="brand-item">
                        <a href="#">
                            <img className="brand-img" src={logo3} alt=""/>
                        </a>
                    </div>
                    <div className="brand-item">
                        <a href="#">
                            <img className="brand-img" src={logo4} alt=""/>
                        </a>
                    </div>
                    <div className="brand-item">
                        <a href="#">
                            <img className="brand-img" src={logo5} alt=""/>
                        </a>
                    </div>
                </div>

            </div>

        );
    }
}

export default Brands;