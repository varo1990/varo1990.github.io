import React, {Component} from 'react';
import banner from'../assets/img/banner.webp'
class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img src={banner} alt=""/>
            </div>
        );
    }
}

export default Header;