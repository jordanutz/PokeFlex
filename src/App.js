import React, { Component } from 'react'
import './Reset.css'

// Components
import Header from './Components/Header/Header'
import Pokedex from './Components/Pokedex/Pokedex'
import Team from './Components/Team/Team'

// Packages
import axios from 'axios'

// Redux
import {connect} from 'react-redux'
import {getTeam, getPokedex} from './redux/reducer'

class App extends Component {
  constructor () {
    super()
    this.state = {
      weakness: {},
      resistance: {}
    }
  }

  componentDidMount () {
    this.getTeam()
    this.getWeakness()
    this.getResistance()
  }

  getTeam = () => {
    axios.get('/api/team').then(res => {
      this.props.getTeam(res.data)
    })
  }

  addPokemon = (id) => {
    axios.post('/api/team', {id}).then(res => {
      this.getTeam()
      this.getWeakness()
      this.getResistance()
    })
  }

  deletePokemon = (id) => {
    axios.delete(`/api/pokemon/${id}`).then(res => {
      this.getTeam()
      this.getWeakness()
      this.getResistance()
    })
  }

  getWeakness = () => {
    axios.get('/api/stats/weakness').then(res => {
      this.setState({
        weakness: res.data[0]
      })
    })
  }

  getResistance = () => {
    axios.get('/api/stats/resistance').then(res => {
      this.setState({
        resistance: res.data[0]
      })
    })
  }

  render() {

    // console.log(this.props)

    return (
      <div className="App">
        <Header />
        <Team team={this.props.team}
          deletePokemon={this.deletePokemon}
          weakness={this.state.weakness}
          resistance={this.state.resistance}
          />

        <Pokedex addPokemon={this.addPokemon}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    team: state.team,
    pokedex: state.pokedex
  }
}

const mapDispatchToProps = {
  getTeam,
  getPokedex
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
