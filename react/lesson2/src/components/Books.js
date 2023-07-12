import React, {Component} from 'react';
import BooksList from "./BooksList";
import wolf from '../assets/img/woolf.jpg'
import story from '../assets/img/story.jpg'
import ghost from '../assets/img/gohst.jpg'
import naughty from '../assets/img/naughty-love-stories.jpg'
import emma from '../assets/img/emma.jpeg'
import _ from 'lodash'


class Books extends Component {
    constructor(props) {
        super(props);
        this.books= [
            {name: 'White Fang', prise: '0', img: wolf, free: true, rating: 4, id: 1},
            {name: 'Emma', prise: '$15', img: emma, free: false, rating: 4, id: 2},
            {name: 'GHOST', prise: '0', img: ghost, free: true, rating: 3, id: 3},
            {name: 'NAUGHTY LOVE STORIES', prise: '$30', img: naughty, free: false, rating: 4, id: 4},
            {name: 'THE STORY OF ENGLISH', prise: '0', img: story, free: true, rating: 5, id: 5}
        ]
    }

    render() {

        return (
            <>
                <h2>OUR BOOKS</h2>
                <div className='books'>

                    {this.books.map((value) => {

                        return <BooksList
                            books={value}
                            key={_.uniqueId()}/>
                    })
                    }

                </div>
            </>
        );
    }
}

export default Books;