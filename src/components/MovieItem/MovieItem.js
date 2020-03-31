import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './MovieItem.css';

const MovieItem = props => {
    const styleItem = classNames({
        'movie-item-content': true,
        'light': props.isLight,
    });
    return (
        <li className="movies-item ">
            <a href={props.data.href} className="movies-item-link">
                <figure className="movies-item-poster">
                    <img src={props.data.src} alt={props.data.alt} className="movie-item-poster-image" />
                </figure>
                <div className={styleItem}>
                    <p className="movie-item-title">{props.data.title}</p>
                </div>
            </a>
        </li>
    );
};

MovieItem.propTypes = {
    // data: PropTypes.object.isRequired,
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
    }).isRequired,
    isLight: PropTypes.bool, // optional
};

MovieItem.defaultProps = {
    isLight: false,
};

export default MovieItem;
