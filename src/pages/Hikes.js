import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import HikesContainer from '../components/HikesContainer';
import Footer from '../components/Footer';

const Hikes = () => {
    return (
        <>
        <Hero hero="hikesHero">
            <Banner title="Kartta">
                <Link to="/" className="btn-primary">
                Palaa kotisivulle
                </Link>
            </Banner>
        </Hero>
        <HikesContainer />
        <Footer />
        </>
    )
};

export default Hikes;
