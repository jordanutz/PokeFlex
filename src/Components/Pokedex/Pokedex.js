import React, {Component} from 'react'
import './Pokedex.css'

// Components
import Pokemon from './Pokemon/Pokemon'
import Filter from './Filter/Filter'

// Packages
import axios from 'axios'

// Redux
import {connect} from 'react-redux'
import {getPokedex, getTeam} from '../../redux/reducer'

class Pokedex extends Component {
  constructor (props) {
    super(props)
    this.state = {
      toggle: false,
    }
  }

  componentDidMount () {
    this.retrievePokedex()
  }

  componentDidUpdate (prevProps) {
    if (prevProps.team !== this.props.team) {
      console.log(this.props.team)

      let myTeam = {
        team: this.props.team
      }

      axios.post('/api/pokemon', myTeam).then(res => {
        this.props.getPokedex(res.data)
      })
    }
  }

  retrievePokedex = () => {
    axios.post('/api/pokemon').then(res => {
      this.props.getPokedex(res.data)
    })
  }

  toggleFilter = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render () {

    const displayedPokedex = this.props.pokedex.map(pokemon => {
      return (
        <div className="PokemonIcon" key={pokemon.id} >
          <Pokemon {...pokemon} addPokemon={this.props.addPokemon} team={this.props.team}/>
        </div>
      )
    })

    const displayFilter = this.state.toggle && <Filter/>

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
  // console.log(state)
  return {
    pokedex: state.pokedex,
    team: state.team
  }
}

const mapDispatchToProps = {
  getPokedex,
  getTeam
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex)
