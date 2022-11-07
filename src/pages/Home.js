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
                        to learn and punctual. I am passionate about software development and using 
                        technology to change peoples lives. My interests are reading books, travelling,
                        going out, investing and meditation.
                    </p>
                    <h3>Why I want to work at  SovTech?</h3>
                    <p>
                        I would like to work for SovTech because they provide great service to their 
                        customers and they also support young people like me to gain experience. 
                        I would like to be a part of it where I can learn, thrive and develop. What stands out 
                        for me is that they invest in a culture of personal growth and improvement.
                        The company's values are aligned with my values that I hold true to. I like 
                        how their graduate programme is structured, there are many opportunities 
                        for learning and improving oneself. 
                        They have a continuous learning culture that want to be part of it. 
                        They say if you are not learning then you are dying.  </p>
            </div>
            </div>
        </div>
    )
}

export default Home;