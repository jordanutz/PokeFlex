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
      team: [],
      weakness: {}
    }
  }

  componentDidMount () {
    this.getTeam()
    this.getWeakness()
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
      this.getWeakness()
    })
  }

  deletePokemon = (id) => {
    console.log(id)
    axios.delete(`/api/pokemon/${id}`).then(res => {
      this.getTeam()
      this.getWeakness()
    })
  }

  getWeakness = () => {
    axios.get('/api/stats').then(res => {
      this.setState({
        weakness: res.data[0]
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Team team={this.state.team}
          deletePokemon={this.deletePokemon}
          weakness={this.state.weakness}/>

        <Pokedex addPokemon={this.addPokemon}
          team={this.state.team}/>

        <Footer />
      </div>
    );
  }
}

export default App;
