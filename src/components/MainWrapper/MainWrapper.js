import React from 'react';
import './MainWrapper.css';

/* 
Para no repetir codigo, lo que usualmente se hace, cuando un componente es una lista de items se colocan
los li en un componente aislado, por ejemplo <MovieItem/> con la prop de la data del item a mostrar.

Asi, puedes crear otro componente con la lista de peliculas, como por ejemplo <MovieList movies/>
y le pasas la prop del arreglo de peliculas.

Asi que una forma de probar esto, es construyendo la data de las peliculas que quieres. Por ejemplo:

const movies = [
    {
        title: "some title 1",
        year: "some year 1",
        imageURL: "some image url 1"
    },
    {
        title: "some title 2",
        year: "some year 2",
        imageURL: "some image url 2"
    },
    {
        title: "some title 3",
        year: "some year 3",
        imageURL: "some image url 3"
    }
];


*/

const MainWrapper = props => {
    return (
        <div className="main-wrapper">
            <div className="wrapper">
                <div className="movies">
                    <header className="movies-header">
                        <h2 className="movies__title">Popular Movies</h2>

                        <a href="#" className="movies-link">
                            {' '}
                            View All
                        </a>
                    </header>
                    <ul className="movies-list">
                        <li className="movies-item ">
                            <a href="#" className="movies-item-link">
                                <figure className="movies-item-poster">
                                    <img src="./imagenes/killbill.jpg" alt="kill-bill-poster" className="movie-item-poster-image" />
                                </figure>
                                <div className="movie-item-content">
                                    <p className="movie-item-title">Kill Bill</p>
                                </div>
                            </a>
                        </li>
                        <li className="movies-item ">
                            <a href="#" className="movies-item-link">
                                <figure className="movies-item-poster">
                                    <img src="./imagenes/killbill.jpg" alt="kill-bill-poster" className="movie-item-poster-image" />
                                </figure>
                                <div className="movie-item-content">
                                    <p className="movie-item-title">Kill Bill</p>
                                </div>
                            </a>
                        </li>
                        <li className="movies-item ">
                            <a href="#" className="movies-item-link">
                                <figure className="movies-item-poster">
                                    <img src="./imagenes/killbill.jpg" alt="kill-bill-poster" className="movie-item-poster-image" />
                                </figure>
                                <div className="movie-item-content">
                                    <p className="movie-item-title">Kill Bill</p>
                                </div>
                            </a>
                        </li>
                        <li className="movies-item ">
                            <a href="#" className="movies-item-link">
                                <figure className="movies-item-poster">
                                    <img src="./imagenes/killbill.jpg" alt="kill-bill-poster" className="movie-item-poster-image" />
                                </figure>
                                <div className="movie-item-content">
                                    <p className="movie-item-title">Kill Bill</p>
                                </div>
                            </a>
                        </li>
                        <li className="movies-item ">
                            <a href="#" className="movies-item-link">
                                <figure className="movies-item-poster">
                                    <img src="./imagenes/killbill.jpg" alt="kill-bill-poster" className="movie-item-poster-image" />
                                </figure>
                                <div className="movie-item-content">
                                    <p className="movie-item-title">Kill Bill</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MainWrapper;
