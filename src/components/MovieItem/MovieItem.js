import React from 'react';
import './MovieItem.css';

class MovieItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: props.data.src(),
            href: props.data.href,
            title: props.data.title,
            classModal: true,
        };
    }

    render() {
        return (
            <li className="movies-item">
                <a href={this.state.href} className="movies-item-link">
                    <figure className="movies-item-poster">{this.state.src}</figure>
                    <div className="movie-item-content">
                        <p className="movie-item-title">{this.state.title}</p>
                    </div>
                </a>
            </li>
        );
    }
}

export default MovieItem;
