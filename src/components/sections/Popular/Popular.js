import React from 'react';
import './Popular.css';
import Nav from '../../Nav/Nav';
import Header from '../../Header/Header';
import svgs from '../../../static/svgs';
import PopularList from './PopularList';
import Search from '../../Search/Search';

// import MoviesList from '../../MoviesList/MoviesList';

const key = 'e1cf51738011c844c19b7280544c45a8';

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { href: '/sections/Popular', svg: () => <img className="svg" src={svgs.POPULAR} alt="popular-svg" />, span: 'POPULAR' },
                { href: '/sections/TopRated', svg: () => <img className="svg" src={svgs.TOP_RATED} alt="top-rated-svg" />, span: 'TOP RATED' },
                { href: '/sections/UpComing', svg: () => <img className="svg" src={svgs.UPCOMING} alt="upcoming-svg" />, span: 'UPCOMING' },
                { href: '/sections/NowPlaying', svg: () => <img className="svg" src={svgs.NOW_PLAYING} alt="now-playing-svg" />, span: 'NOW PLAYING' },
            ],
            popular: [],
            show: true,
            movies: [],
            getInfoSearch: false,
            value: '',
        };
    }
    onChangeName = (e) => {
        this.setState({
            value: e.target.value,
        });
        console.log(this.state.value);
    };

    getInfo = async (e) => {
        e.preventDefault();

        const movieValue = this.state.value;

        if (movieValue.length > 0) {
            console.log(this.state.value);
            const URL = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieValue}`;
            const request = await fetch(URL);
            const response = await request.json();
            const movies = response.results;
            const movieList = [];

            if (movies.length >= 0) {
                movies.forEach((movie) => {
                    movieList.push(movie);
                });
                this.setState({
                    movies: movieList,
                    getInfoSearch: true,
                });
            } else {
            }
        }
    };

    popularInfo = async (e) => {
        const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${key}`;
        const request = await fetch(URL);
        const response = await request.json();

        const movies = response.results;
        const movieList = [];

        movies.forEach((movie) => {
            movieList.push(movie);
        });
        this.setState({
            popular: movieList,
        });
    };

    paginaActual = 2;

    loadMore = async (e) => {
        const pagina = this.paginaActual++;
        const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&page=${pagina}`;

        const request = await fetch(URL);
        const response = await request.json();

        const movies = response.results;
        if (movies.length < 20) {
            this.setState({
                show: false,
            });
        }

        if (movies) {
            movies.forEach((movie) => {
                this.state.popular.push(movie);
            });
            this.setState({
                popular: this.state.popular,
            });
        }
    };
    componentDidMount() {
        this.popularInfo();
    }
    render() {
        return (
            <div>
                <Nav datos={this.state.data} />
                <Header getInfo={this.getInfo} onChangeName={this.onChangeName} />
                {this.state.getInfoSearch === true && this.state.movies.length >= 0 ? (
                    <Search info={this.state.movies} value={this.state.value} />
                ) : (
                    <section className="main">
                        <section className="home">
                            <section className="home-header">
                                <PopularList popularInfo={this.state.popular} />
                                {this.state.show ? (
                                    <div className="movies-nav">
                                        <button onClick={() => this.loadMore()}>LOAD MORE</button>
                                    </div>
                                ) : (
                                    <div></div>
                                )}
                            </section>
                        </section>
                    </section>
                )}
            </div>
        );
    }
}

export default Popular;
