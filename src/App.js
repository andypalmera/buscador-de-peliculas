import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { href: '#', svg: <img src="../public/imagenes/logo ada.svg" alt="logo.ada" />, span: 'POPULAR' },
                { href: '#', svg: <img src="../public/imagenes/logo ada.svg" alt="logo.ada" />, span: 'TOP RATED' },
                { href: '#', svg: <img src="../public/imagenes/logo ada.svg" alt="logo.ada" />, span: 'UPCOMING' },
                { href: '#', svg: <img src="../public/imagenes/logo ada.svg" alt="logo.ada" />, span: 'NOW PLAYING' }
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