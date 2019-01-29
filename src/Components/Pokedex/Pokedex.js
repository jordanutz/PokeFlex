import React, {Component} from 'react'
import './Pokedex.css'
import axios from 'axios'
import Pokemon from './Pokemon/Pokemon'
import Filter from './Filter/Filter'

class Pokedex extends Component {
  constructor () {
    super()
    this.state = {
      pokedex: [],
      toggle: false
    }
  }

  componentDidMount () {
    axios.get('/api/pokemon').then(res => {
      this.setState({
        pokedex: res.data
      })
    })
  }

  toggleFilter = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render () {

    const {pokedex} = this.state

    const displayedPokedex = pokedex.map(pokemon => {
      return (
        <div key={pokemon.pokemon_id} className="PokemonIcon">
          <Pokemon {...pokemon} addPokemon={this.props.addPokemon} team={this.props.team}/>
        </div>
      )
    })

    const displayFilter = this.state.toggle && <Filter />

    return (
      <main>
        <h1  onClick={this.toggleFilter}>Filter</h1>
        {displayFilter}
        <div className="Pokedex">
          {displayedPokedex}
        </div>
      </main>
    )
  }
}

export default Pokedex
