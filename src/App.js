import React, { Component } from 'react'
import './Reset.css'

// Components
import Header from './Components/Header/Header'
import Pokedex from './Components/Pokedex/Pokedex'
import Team from './Components/Team/Team'
import Footer from './Components/Footer/Footer'

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
      resistance: {}, 
      overlay: false, 
      toggleType: false,
      toggleEvolution: false
    }
  }

  componentDidMount() {
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

  toggleOverlay = () => {
    this.setState({
      overlay: false,
      toggleEvolution: false, 
      toggleType: false
    })
  }

  handleToggleType = () => {
    console.log('fire')
    this.setState({
      overlay: true,
      toggleType: !this.state.toggleType,
      toggleEvolution: false
    })
  }

  handleToggleEvolution = () => {
    this.setState({
      overlay: true,
      toggleEvolution: !this.state.toggleEvolution,
      toggleType: false
    })
  }

  render() {

    return (
      <div className="App">
        {this.state.overlay && <div className="overlay" onClick={this.toggleOverlay}></div>}
        <Header />
        <Team 
          team={this.props.team}
          deletePokemon={this.deletePokemon}
          weakness={this.state.weakness}
          resistance={this.state.resistance}
        />

        <Pokedex 
        addPokemon={this.addPokemon} 
        toggleOverlay={this.toggleOverlay} 
        overlay={this.state.overlay} 
        handleToggleEvolution={this.handleToggleEvolution}
        handleToggleType={this.handleToggleType}
        toggleType={this.state.toggleType}
        toggleEvolution={this.state.toggleEvolution}
        />
        <Footer />
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
