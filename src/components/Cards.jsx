import React from 'react';
import  images from './images/1.jpg'


var i = 1;
const img = images

function ShowCard(){
  return (
  <div className="card" style={{width: "50px"}}>
    <img src={img} alt="click me!" />
    </div>
    )
}

export default ShowCard;