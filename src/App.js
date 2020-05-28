import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import svgs from './static/svgs.js';
import Search from './components/Search/Search';

const key = 'e1cf51738011c844c19b7280544c45a8';

class App extends React.Component {
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
            topRated: [],
            upComing: [],
            nowPlaying: [],
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
        console.log(response);
    };
    upComingInfo = async (e) => {
        const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`;
        const request = await fetch(URL);
        const response = await request.json();

        const movies = response.results;
        const movieList = [];

        movies.forEach((movie) => {
            movieList.push(movie);
        });
        this.setState({
            upComing: movieList,
        });
    };
    topRatedInfo = async (e) => {
        const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`;
        const request = await fetch(URL);
        const response = await request.json();

        const movies = response.results;
        const movieList = [];

        movies.forEach((movie) => {
            movieList.push(movie);
        });
        this.setState({
            topRated: movieList,
        });
    };
    nowPlayingInfo = async (e) => {
        const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`;
        const request = await fetch(URL);
        const response = await request.json();

        const movies = response.results;
        const movieList = [];

        movies.forEach((movie) => {
            movieList.push(movie);
        });
        this.setState({
            nowPlaying: movieList,
        });
    };

    componentDidMount() {
        this.popularInfo();
        this.topRatedInfo();
        this.upComingInfo();
        this.nowPlayingInfo();
    }

    render() {
        return (
            <div>
                <Nav datos={this.state.data} />
                <Header getInfo={this.getInfo} onChangeName={this.onChangeName} />
                {this.state.getInfoSearch === true && this.state.movies.length >= 0 ? (
                    <Search info={this.state.movies} value={this.state.value} />
                ) : (
                    <Main
                        popularInfo={this.state.popular}
                        topRatedInfo={this.state.topRated}
                        upComingInfo={this.state.upComing}
                        nowPlayingInfo={this.state.nowPlaying}
                    />
                )}
            </div>
        );
    }
}

export default App;
