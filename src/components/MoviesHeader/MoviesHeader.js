import React from 'react';

const MoviesHeader = () => {
    return (
        <header className="movies-header">
            {/* Revisa notacion de clases! en un lado usas: movies-header y en otro movies_title
                por convencion es con camel case, ej: moviesTitle
            */}
            <h2 className="movies__title">Popular Movies</h2>

            <a href="#" className="movies-link"> 
                View All
            </a>
        </header>
    );
};

export default MoviesHeader;
