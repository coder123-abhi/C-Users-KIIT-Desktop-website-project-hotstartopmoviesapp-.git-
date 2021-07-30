import React from 'react';
import './Card.css';


function Card(props)
{
console.log(props);
    return(
<>
<div className="movie">
<img src={props.imgsrc} alt="movie" height="200" width="300"/>
<span id="title">{props.title}</span>
<span id="rate">Rating:{props.rating}</span>
<span id="watch"><a href={props.link} target="_blank"><button>watch now</button></a></span>
</div>
</>
    );
}

export default Card;