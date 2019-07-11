import React from 'react';
// import  './images'
import './style.css'


function ShowCard(props){
  return (
  <div className="card" style={{width: "50px"}}>
    <img alt={props.name} src={props.image} />
    </div>
    )
}

export default ShowCard;