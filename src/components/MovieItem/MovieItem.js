import React from 'react';
import './MovieItem.css';

const MovieItem = props => {
    return (
        <li className="movies-item ">
            <a href={props.data.href} className="movies-item-link">
                <figure className="movies-item-poster">
                    <img src={props.data.src} alt={props.data.alt} className="movie-item-poster-image" />
                </figure>
                <div className="movie-item-content">
                    <p className="movie-item-title">{props.data.title}</p>
                </div>
            </a>
        </li>
    );
};

export default MovieItem;
