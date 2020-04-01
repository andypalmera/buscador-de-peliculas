import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import moviesPosters from '../../static/moviesPosters';

class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [
                { href: '#', src: () => <img src={moviesPosters.movie3} alt="rear-window" className="movie-item-poster-image" />, title: 'Rear Window' },
                {
                    href: '#',
                    src: () => <img src={moviesPosters.movie1} alt="los-suenios-de-akir-kurosawa" className="movie-item-poster-image" />,
                    title: 'Los sueños de Akira Kurosawa'
                },
                {
                    href: '#',
                    src: () => <img src={moviesPosters.movie2} alt="kill-bill" className="movie-item-poster-image" />,
                    title: 'Kill Bill'
                },
                { href: '#', src: () => <img src={moviesPosters.movie4} alt="septimo-sello" className="movie-item-poster-image" />, title: 'Septimo-sello' },
                {
                    href: '#',
                    src: () => <img src={moviesPosters.movie5} alt="Teorema" className="movie-item-poster-image" />,
                    title: 'Teorema'
                }
            ]
        };
    }
    render() {
        return (
            <ul className="movies-list">
                {this.state.peliculas.map(pelicula => (
                    <MovieItem data={pelicula} />
                ))}
            </ul>
        );
    }
}
export default MoviesList;
