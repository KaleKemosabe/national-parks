import React, { Component } from 'react';
import { FaStreetView, FaHiking, FaMapSigns } from 'react-icons/fa';
import Title from './Title';

export default class Description extends Component {
    state = {
        description: [
            {
                icon:<FaMapSigns />,
                title: 'Mikä sivusto?',
                info: "Sivustolle on tarkoitus tehdä tulevaisuudessa erilaisia karttapohjia, joiden kautta allekirjoittanut lähinnä harjoittelee koodaustaitojaan."
            },
            {
                icon:<FaStreetView />,
                title: 'Mihin mennä?',
                info: "Karttapohjasta näet Suomen kansallispuistojen sijainnit, joka helpottaa seuraavan retken suunnittelua."
            },
            {
                icon:<FaHiking />,
                title: 'Mitä tehdä?',
                info: "Sivustolle täydentyy hiljalleen myös erinäisiä reissutarinoita lähinnä kaveriporukalle tuottamamme toisen sivuston kautta"
            }
        ]
    }
    render() {
        return (
            <section className="description">
                <Title title="Kuka, mitä, häh?" />
                <div className="description-center">
                    {this.state.description.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
