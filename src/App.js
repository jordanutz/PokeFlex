import React, { Component } from 'react'
import './Reset.css'
import axios from 'axios'
import Header from './Components/Header/Header'
import Pokedex from './Components/Pokedex/Pokedex'
import Team from './Components/Team/Team'
import Footer from './Components/Footer/Footer'

class App extends Component {
  constructor () {
    super()
    this.state = {
      team: []
    }
  }

  addPokemon = (id, name, image, type) => {

    const addedPokemon = {
      id: id,
      name: name,
      image: image,
      type: type
    }

    axios.post('/api/pokemon', addedPokemon).then(res => {
      console.log(res)
    })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Team />
        <Pokedex addPokemon={this.addPokemon}/>
        <Footer />
      </div>
    );
  }
}

export default App;
