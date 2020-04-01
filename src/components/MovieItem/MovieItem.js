import React from 'react';
import './MovieItem.css';

const MovieItem = props => {
    return (
        <li className="movies-item ">
            <a href={props.data.href} className="movies-item-link">
                <figure className="movies-item-poster">{props.data.src()}</figure>
                <div className="movie-item-content">
                    <p className="movie-item-title">{props.data.title}</p>
                </div>
            </a>
        </li>
    );
};

export default MovieItem;
