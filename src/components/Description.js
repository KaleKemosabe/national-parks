import React, { Component } from 'react';
import { FaStreetView, FaHiking, FaShuttleVan, FaPagelines } from 'react-icons/fa';
import Title from './Title';

export default class Description extends Component {
    state = {
        description: [
            {
                icon:<FaStreetView />,
                title: 'Mihin mennä?',
                info: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin."
            },
            {
                icon:<FaHiking />,
                title: 'Mitä tehdä?',
                info: "He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections."
            },
            {
                icon:<FaShuttleVan />,
                title: 'Miten paikalle?',
                info: "The bedding was hardly able to cover it and seemed ready to slide off any moment."
            },
            {
                icon:<FaPagelines />,
                title: 'Mikä ihmeen luonto?',
                info: "His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly."
            }
        ]
    }
    render() {
        return (
            <section className="description">
                <Title title="description" />
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
