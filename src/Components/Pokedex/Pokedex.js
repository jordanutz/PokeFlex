import React, {Component} from 'react'
import './Pokedex.css'
import axios from 'axios'
import {connect} from 'react-redux'
import {getPokedex} from '../../redux/reducer'

import Pokemon from './Pokemon/Pokemon'
import Filter from './Filter/Filter'

class Pokedex extends Component {
  constructor () {
    super()
    this.state = {
      toggle: false,
    }
  }

  componentDidMount () {
    this.retrievePokedex()
  }

  retrievePokedex = () => {
    axios.get('/api/pokemon').then(res => {
      this.props.getPokedex(res.data)
    })
  }

  toggleFilter = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render () {

    const {pokedex} = this.props
    const displayedPokedex = pokedex.map(pokemon => {
      return (
        <div className="PokemonIcon" key={pokemon.id} >
          <Pokemon {...pokemon} addPokemon={this.props.addPokemon} team={this.props.team}/>
        </div>
      )
    })

    const displayFilter = this.state.toggle && <Filter retrievePokedex={this.retrievePokedex}/>

    return (
      <main>
        <h1 onClick={this.toggleFilter}>Filter</h1>
        {displayFilter}
        <div className="Pokedex">
          {displayedPokedex}
        </div>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    pokedex: state.pokedex
  }
}

const mapDispatchToProps = {
  getPokedex
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex)
