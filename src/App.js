import React, { Component } from 'react';
import './Reset.css';
import Header from './Components/Header/Header'
import Pokedex from './Components/Pokedex/Pokedex'
import Team from './Components/Team/Team'
import Filter from './Components/Filter/Filter'
import Footer from './Components/Footer/Footer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Team />
        <Filter />
        <Pokedex />
        <Footer />
      </div>
    );
  }
}

export default App;
