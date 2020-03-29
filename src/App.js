import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SVGS from './static/svgPaths';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { href: '#', svg: () => <img className="svg" src={SVGS.POPULAR} alt="popular-svg" />, span: 'POPULAR' },
                { href: '#', svg: () => <img className="svg" src={SVGS.UPCOMING} alt="upcoming-svg" />, span: 'UPCOMING' },
                { href: '#', svg: () => <img className="svg" src={SVGS.NOW_PLAYING}a alt="now-playing-svg" />, span: 'NOW PLAYING' }
            ]
        };
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <Nav datos={data} />
                <Header />
                <Main />
            </div>
        );
    }
}

export default App;
