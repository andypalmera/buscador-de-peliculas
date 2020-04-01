import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import svgs from './static/svgs.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { href: 'https://www.google.com.ar/', svg: () => <img className="svg" src={svgs.POPULAR} alt="popular-svg" />, span: 'POPULAR' },
                { href: '#', svg: () => <img className="svg" src={svgs.TOP_RATED} alt="top-rated-svg" />, span: 'TOP RATED' },
                { href: '#', svg: () => <img className="svg" src={svgs.UPCOMING} alt="upcoming-svg" />, span: 'UPCOMING' },
                { href: '#', svg: () => <img className="svg" src={svgs.NOW_PLAYING} a alt="now-playing-svg" />, span: 'NOW PLAYING' }
            ]
        };
    }

    render() {
        return (
            <div>
                <Nav datos={this.state.data} />
                <Header />
                <Main />
            </div>
        );
    }
}

export default App;
