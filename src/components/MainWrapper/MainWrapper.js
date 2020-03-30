import React from 'react';
import './MainWrapper.css';
import MoviesList from '../MoviesList/MoviesList';
import MoviesHeader from '../MoviesHeader/MoviesHeader';

const MainWrapper = props => {
    return (
        <div className="main-wrapper">
            <div className="wrapper">
                <div className="movies">
                    <MoviesHeader />
                    <MoviesList />
                </div>
            </div>
        </div>
    );
};

export default MainWrapper;
