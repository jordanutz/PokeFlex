import React, {Component} from 'react'
import './Pokedex.css'
import axios from 'axios'
import Pokemon from './Pokemon/Pokemon'

class Pokedex extends Component {
  constructor () {
    super()
    this.state = {
      pokedex: []
    }
  }

  componentDidMount () {
    axios.get('/api/pokemon').then(res => {
      this.setState({
        pokedex: res.data
      })
    })
  }

  render () {

    const {pokedex} = this.state

    const displayedPokedex = pokedex.map(pokemon => {
      return (
        <div key={pokemon.id} className="PokemonIcon">
          <Pokemon {...pokemon} />
        </div>
      )
    })

    return (
      <main>
        <div className="Pokedex">
          {displayedPokedex}
        </div>
      </main>
    )
  }
}

export default Pokedex
