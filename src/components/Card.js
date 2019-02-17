import React from 'react';
// import ReactDOM from 'react-dom';

const Card= ({ name , email, id}) => {
    
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}`} height='200px' width='200px' alt="Robo 1" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )

}



export default Card;