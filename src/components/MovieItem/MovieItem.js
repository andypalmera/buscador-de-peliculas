import React from 'react';
import './MovieItem.css';
import imagenes from '../../static/imagenes/no-image.png';

class MovieItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: props.data.poster_path,
            noImage: imagenes,
            title: props.data.original_title,
        };
    }
    render() {
        return (
            <li className="movies-item">
                <a href="#" className="movies-item-link">
                    <figure className="movies-item-poster">
                        {this.state.image ? (
                            <img
                                src={`https://image.tmdb.org/t/p/w185${this.state.image}`}
                                alt={this.state.title + 'poster'}
                                className="movies-item-poster-image"
                            />
                        ) : (
                            <img src={this.state.noImage} alt="popular-svg" style={{ width: 185 }} />
                        )}
                    </figure>
                    <div className="movie-item-content">
                        <p className="movie-item-title">{this.state.title}</p>
                    </div>
                </a>
            </li>
        );
    }
}

// const MovieItem = (props) => {
//     const poster =
//         props.data.poster_path === null ? (
//             <img src={imagenes} alt="popular-svg" style={{ width: 185 }} />
//         ) : (
//             <img
//                 src={`https://image.tmdb.org/t/p/w185${props.data.poster_path}`}
//                 alt={props.data.original_title + 'poster'}
//                 className="movies-item-poster-image"
//             />
//         );

//     return (
//         <li className="movies-item">
//             <a href="#" className="movies-item-link">
//                 <figure className="movies-item-poster">{poster}</figure>
//                 <div className="movie-item-content">
//                     <p className="movie-item-title">{props.data.original_title}</p>
//                 </div>
//             </a>
//         </li>
//     );
// };

export default MovieItem;
