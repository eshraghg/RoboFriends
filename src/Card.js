import React from 'react';


const Card = (props) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow ba2 shadow-5 tc'>
            <img src={`https://robohash.org/${props.id}?100x100`} alt='robo pic'></img>
            <div>
                <h1>{props.name}</h1>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card;