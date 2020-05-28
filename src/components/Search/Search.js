import React from 'react';
import MovieItem from '../MovieItem/MovieItem';

const key = 'e1cf51738011c844c19b7280544c45a8';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.value,
            data: props.info,
            show: true,
        };
    }
    paginaActual = 2;

    loadMore = async (e) => {
        const pagina = this.paginaActual++;
        const URL = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${this.state.title}&page=${pagina}`;

        const request = await fetch(URL);
        const response = await request.json();

        const movies = response.results;

        console.log(movies.length);
        console.log(this.state.title);

        if (movies.length <= 19) {
            this.setState({
                show: false,
            });
        }
        const moviesList = this.state.data;

        if (movies) {
            movies.forEach((movie) => {
                moviesList.push(movie);
            });
            this.setState({
                data: moviesList,
            });
        }
    };

    componentDidMount() {
        if (this.state.data.length < 19) {
            this.setState({
                show: false,
            });
        }
    }

    render() {
        return (
            <section className="main">
                <section className="home">
                    <section className="home-header">
                        <div className="movies-wrapper">
                            {this.state.data.length > 0 ? (
                                <div>
                                    <header className="movies-header">
                                        <h2 className="movies__title">Search results</h2>

                                        <div className="movies-link">10.000 results</div>
                                    </header>

                                    <ul className="movies-list">
                                        {this.state.data.map((pelicula) => (
                                            <MovieItem data={pelicula} />
                                        ))}
                                    </ul>
                                    {this.state.show === true ? (
                                        <div className="movies-nav">
                                            <button onClick={() => this.loadMore()}>LOAD MORE</button>
                                        </div>
                                    ) : (
                                        <div></div>
                                    )}
                                </div>
                            ) : (
                                <div> Not found </div>
                            )}
                        </div>
                    </section>
                </section>
            </section>
        );
    }
}

export default Search;
