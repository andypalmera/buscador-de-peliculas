import React from 'react';
import MovieItem from '../../MovieItem/MovieItem';

const TopRated = (props) => {
    return (
        <div className="movies-wrapper">
            <header className="movies-header">
                <h2 className="movies__title">Top Rated Movies</h2>

                <a href="https://www.google.com.ar/" className="movies-link">
                    10.000 results
                </a>
            </header>
            <ul className="movies-list">
                {props.topRatedInfo.map((pelicula) => (
                    <MovieItem data={pelicula} />
                ))}
            </ul>
        </div>
    );
};

export default TopRated;
