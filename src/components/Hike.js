import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/hike-1.jpeg';
import PropTypes from 'prop-types';

export default function Hike({hike}) {
    const { name, slug, images } = hike;

    return (
        <article className="hike">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="single hike" />
                <div className="name-tag">
                    <h6>{name}</h6>
                </div>
                <Link to={`/hikes/${slug}`} className="btn-primary hike-link">
                    Features
                </Link>
            </div>
            <p className="hike-info">{name}</p>
        </article>
    )
}

Hike.propTypes = {
    hike: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired
    })
}
