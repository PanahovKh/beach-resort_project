import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='services' />

            </section>
        )
    }
}
