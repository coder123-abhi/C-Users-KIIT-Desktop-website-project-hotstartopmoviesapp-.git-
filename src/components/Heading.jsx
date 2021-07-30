import React from 'react';
import './Heading.css';
import image1 from './image1.png';

function Heading()
{
    return(
        <>
        <h1>Disney+ Hotstar App</h1>
        <img src={image1} alt="netflixapp" height="200" width="500"/>
        </>
    );
}

export default Heading;