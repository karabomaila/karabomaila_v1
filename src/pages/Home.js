import React from 'react';
import image from './images/goodone.jpg'
import './home.css'

const Home = () => {

    return (
        <div className='home'>
            <div className='home_header'>
                <h1>Hi, welcome to my website.</h1>
                <img src={image} alt="Profile"/>

            </div>
            <div className='projects'>
            <div className='home_content'>
                <h1>About Karabo</h1>
                    <p>I am from Ivory Park, Johannesburg. I am currently doing my final year in 
                        computer science at Wits University. I am self-motivated, hard working 
                        and a disciplined individual. My strengths include being organised, willing
                        to learn and punctual. I am passiotnate about software development and using 
                        technology to change peoples lives. My interests are reading books, travelling,
                        going, investing and meditation.
                    </p>
                    <h3>Why I want to work at  SovTech?</h3>
                    <p></p>
            </div>
            </div>
        </div>
    )
}

export default Home;