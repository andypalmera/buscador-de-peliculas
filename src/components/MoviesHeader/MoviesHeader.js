import React from 'react';

const MoviesHeader = () => {
    return (
        <header className="movies-header">
            <h2 className="movies__title">Popular Movies</h2>

            <a href="https://www.google.com.ar/" className="movies-link">
                View All
            </a>
        </header>
    );
};

export default MoviesHeader;
