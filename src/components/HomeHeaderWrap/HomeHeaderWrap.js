import React from 'react';
import './HomeHeaderWrap.css';

const HomeHeaderWrap = props => {  // props sin usar. usar const HomeHeaderWrap = () => {
    return (
        <div className="home-header-wrap">
            <h1 className="home-header-title">Ada - Buscador de Películas</h1>
        </div>
    );
};

export default HomeHeaderWrap;
