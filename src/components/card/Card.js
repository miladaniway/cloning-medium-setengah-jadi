import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <h3 className="title">{props.title}</h3>
            <p style={{ height: 10, width: 1050 }}>{props.descripsi}</p>
            <p>{props.author}</p>
            <img src={props.thumbnail} width="200px" height="100px"/>
        </div>
        
    )
}

export default Card;