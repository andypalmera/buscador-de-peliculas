import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import svgs from './static/svgs.js';

const key = 'e1cf51738011c844c19b7280544c45a8';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { href: 'https://www.google.com.ar/', svg: () => <img className="svg" src={svgs.POPULAR} alt="popular-svg" />, span: 'POPULAR' },
                { href: '#', svg: () => <img className="svg" src={svgs.TOP_RATED} alt="top-rated-svg" />, span: 'TOP RATED' },
                { href: '#', svg: () => <img className="svg" src={svgs.UPCOMING} alt="upcoming-svg" />, span: 'UPCOMING' },
                { href: '#', svg: () => <img className="svg" src={svgs.NOW_PLAYING} alt="now-playing-svg" />, span: 'NOW PLAYING' },
            ],
            images: [],
        };
    }
    getInfo = async (e) => {
        e.preventDefault();
        // const searchValue = e.target.elements.searchValue.value;
        const movieValue = e.target.elements.searchValue.value;
        // const URL = `https://api.themoviedb.org/3/movie/query=${movieValue}?api_key=${key}`;
        const URL = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieValue}`;
        const request = await fetch(URL);
        const response = await request.json();
        console.log(response);
        this.setState({
            images: movieValue,
        });
        console.log(this.state.images);
        console.log(URL);
    };

    render() {
        return (
            <div>
                <Nav datos={this.state.data} />
                <Header getInfo={this.getInfo} />
                <Main />
            </div>
        );
    }
}

export default App;
