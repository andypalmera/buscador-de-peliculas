import React from 'react';
import MovieItem from '../MovieItem/MovieItem';

class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [
                { href: '#', src: './imagenes/killbill.jpg', alt: 'kill-bill-poster', title: 'Kill Bill' },
                { href: '#', src: require('./imagenesPeliculas/Teorema.jpg'), alt: 'teorema-poster', title: 'Teorema' },
                { href: '#', src: require('./imagenesPeliculas/Rear_Window.jpg'), alt: 'Rear-window-poster', title: 'La ventana indiscreta' },
                { href: '#', src: require('./imagenesPeliculas/septimo-sello.jpg'), alt: 'septimo-sello-poster', title: 'Septimo-sello' },
                {
                    href: '#',
                    src: './imagenes/Los_sue_os_de_Akira_Kurosawa.jpg',
                    alt: 'los-suenios-de-akira-kurosawa-poster',
                    title: 'Los sueños de Akira Kurosawa'
                }
            ]
        };
    }
    render() {
        return (
            <ul className="movies-list">
                {this.state.peliculas.map((pelicula, index) => (
                    <MovieItem data={pelicula} isLight key={`movie-item-${index}`} />
                ))}
            </ul>
        );
    }
}
export default MoviesList;
