import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Rating} from "@mui/material";

class BooksList extends Component {
    static propTypes = {
        books:PropTypes.object
    }

    static defaultProps = {
        books: {}
    }
    render() {
        const { books:{ name, prise, img, free, rating }} = this.props
        return (
            <div className='booksList'>

                <div className='booksList_items'>
                    <img src={img} alt="books img"/>
                    <h3>{name || ''}</h3>
                    <Rating name="read-only" value={Math.round(rating)} readOnly />
                    <h4 >{ prise || '' }</h4>
                    {free ? <p>Is free</p>: null}
                    <button>{free ? "READ" : 'BAY'}</button>

                </div>

            </div>
        );
    }
}

export default BooksList;