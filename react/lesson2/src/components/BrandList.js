import React, {Component} from 'react';
import Brands from "./Brands";
import logo1 from '../assets/img/11.png'
import logo2 from '../assets/img/12.jpg'
import logo3 from '../assets/img/13.jpg'
import logo4 from '../assets/img/14.jpg'
import logo5 from '../assets/img/15.jpg'

class BrandList extends Component {

    render() {

        return (
            <div>
                <Brands
                    logo1 ={logo1}
                    logo2={logo2}
                    logo3={logo3}
                    logo4={logo4}
                    logo5 = {logo5} />
            </div>
        );
    }
}

export default BrandList;