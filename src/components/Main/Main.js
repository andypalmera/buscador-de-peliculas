import React from 'react';
import './Main.css';
import MainWrapper from '../MainWrapper/MainWrapper';
import HomeHeaderWrap from '../HomeHeaderWrap/HomeHeaderWrap';

const Main = props => {
    return (
        <section className="main">
            <section className="home">
                {/* <!-- el section Homre tiene un type y un mode.. para que sirve ? --> */}
                <section className="home-header">
                    <HomeHeaderWrap />
                    <MainWrapper />
                </section>
            </section>
        </section>
    );
};

export default Main;
