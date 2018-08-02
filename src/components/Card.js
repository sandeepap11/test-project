import React from 'react';
import '../styles/Card.css';

const Card = ({ action, description }) => {
    return (
        <div className="card-main">
            <h1>{action}</h1>
            <p>{description}</p>
        </div>
    );

};

export default Card;