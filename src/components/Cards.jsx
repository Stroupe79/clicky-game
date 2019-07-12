import React from 'react';
// import  './images'
import './style.css'

// class ShowCard extends React.Component {

//   state = {
//     count: 0
//   };

//   handleIncrement = () => {
// this.setState({ count: this.state.count + 1})
//   }

//   render (props) {
//   return (
//   <div className="card" style={{width: "50px"}} onClick={this.handleIncrement}>
//     <img alt={props.id} src={props.image} />
//     {/* <Navbar scoreUpdate ={this.state.count} /> */}
//     </div>
//     )
// }
// }

function ShowCard(props){
  return (
  <div className="card" >
          <div className="img-container">

    <img alt={props.name} src={props.image} />
    {/* <Navbar scoreUpdate ={this.state.count} /> */}
    </div>
    </div>
    )
}

// onClick={this.handleIncrement}
{/* style={{width: "50px"}} */}

export default ShowCard;