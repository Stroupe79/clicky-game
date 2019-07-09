import React from 'react';
import './App.css';
import ShowCard from './components/Cards.jsx';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';


const App = () => {
  return  ( 
  <React.Fragment>
   <Header />
   <Navbar />
   <ShowCard />
   </React.Fragment>
  )
}

export default App;
