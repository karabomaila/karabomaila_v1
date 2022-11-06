import React from 'react';
import image from './images/goodone.jpg'
import Card from '../components/Card'
import './home.css'

const Home = () => {

    const projects = []

    return (
        <div className='home'>
            <div className='home_header'>
                <h1>Hi, welcome to my website, I hope you enjoy it.</h1>
                <img src={image}/>
            </div>
            <div className='projects'>
            </div>
        </div>
    )
}

export default Home;