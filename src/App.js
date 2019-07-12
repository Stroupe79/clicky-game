import React, { Component } from 'react';
import './App.css';
import ShowCard from './components/Cards.jsx';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx'; 
import Board from './components/Board.jsx';
import cards from './components/cards.json';
// import * as path from './components/images/';


class App extends Component {
  state = {cards}
  
  // requireImg = id => {
  //   const imgPath = require ("./components/images/" + id + ".jpg")
  // }
  
  // randomRender = id =>
  
  render() {
    return (
      <React.Fragment>
   <Header />
   <Navbar />
   <Board>
     {this.state.cards.map(card => (
       <ShowCard 
       id={card.id}
       key={card.name}
       image={card.image}
       />
     ))};
   </Board>
   </React.Fragment>
  )
}
};


export default App;
