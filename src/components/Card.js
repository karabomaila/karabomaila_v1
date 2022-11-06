import React from 'react';

const Card = ({project}) => {

    return (
        <div className='card'>
            <img src={project.image}/>

            <div className="card_body">
                <h2 className="card_title">{ project.title }</h2>
                <div className="card_date">
                <p>{ project.month }</p>
                <h3>{ project.date }</h3>
                </div>
                <p className="card_description">{ project.description }</p>
            </div>

        </div>
    )
}

export default Card;