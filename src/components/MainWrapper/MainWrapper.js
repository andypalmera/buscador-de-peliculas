import React from 'react';
import './MainWrapper.css';

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
