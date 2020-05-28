import React from 'react';
import './Main.css';
import HomeHeaderWrap from '../HomeHeaderWrap/HomeHeaderWrap';
import MoviesList from '../MoviesList/MoviesList';

const Main = (props) => {
    return (
        <section className="main">
            <section className="home">
                <section className="home-header">
                    <HomeHeaderWrap />

                    <MoviesList
                        popularInfo={props.popularInfo}
                        topRatedInfo={props.topRatedInfo}
                        upComingInfo={props.upComingInfo}
                        nowPlayingInfo={props.nowPlayingInfo}
                    />
                </section>
            </section>
        </section>
    );
};

export default Main;
