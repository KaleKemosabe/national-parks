import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Description from '../components/Description';
import Map from '../components/Map/Map';
import FeaturedHikes from '../components/FeaturedHikes';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="Kansallispuistot" subtitle="Tältä sivustolta löydät lisäinfoa Suomen kansallispuistoista">
                    <Link to='/hikes' className="btn-primary">
                        Avaa kartta
                    </Link>
                </Banner>
            </Hero>
            <Description />
            <Map />
            <FeaturedHikes />
            <Footer />
        </>
    )
}