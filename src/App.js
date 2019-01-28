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

  componentDidMount () {
    this.getTeam()
  }

  getTeam = () => {
    axios.get('/api/team').then(res => {
      this.setState({
        team: res.data
      })
    })
  }

  addPokemon = (id) => {
    axios.post('/api/pokemon', {id}).then(res => {
      this.getTeam()
    })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Team team={this.state.team}/>
        <Pokedex addPokemon={this.addPokemon}/>
        <Footer />
      </div>
    );
  }
}

export default App;
