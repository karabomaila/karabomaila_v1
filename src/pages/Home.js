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
            </div>
            </div>
        </div>
    )
}

export default Home;