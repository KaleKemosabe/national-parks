import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Description from '../components/Description';
import FeaturedHikes from '../components/FeaturedHikes';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="Mene metsään" subtitle="Infoa kansallispuistoista ja sekalaista reissutarinointia">
                    <Link to='/hikes' className="btn-primary">
                        Siirry karttasivulle
                    </Link>
                </Banner>
            </Hero>
            <Description />
            <FeaturedHikes />
            <Footer />
        </>
    )
}