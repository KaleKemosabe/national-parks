import React, { Component } from 'react';
import { HikeContext } from '../Context';
import Loading from './Loading';
import Hike from './Hike';
import Title from './Title';

export default class FeaturedHikes extends Component {
    static contextType = HikeContext
    render() {
        let {loading, featuredHikes : hikes} = this.context
        hikes = hikes.map(hike => {
            return <Hike key={hike.id} hike={hike} />
        })

        return (
            <section className="featured-hikes">
                <Title title="featured hikes" />
                <div className="featured-hikes-center">
                    {loading ? <Loading /> : hikes}
                </div>
            </section>
        )
    }
}
