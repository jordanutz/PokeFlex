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

  componentDidUpdate (prevProps, prevState) {

    if (prevProps.team !== this.props.team) {

      let findDeleted;

      if (prevProps.team.length) {
          findDeleted = prevProps.team.filter(prev => {
            return this.props.team.findIndex(curr => curr.id === prev.id) === -1
        })
      } 

      let myTeam = {
        team: this.props.team,
        dex: this.props.pokedex, 
        filter: false, 
        deleted: findDeleted && findDeleted[0]
      }

      console.log(myTeam)

      axios.post('/api/pokemon/filter', myTeam).then(res => {
        this.props.getPokedex(res.data)
      })
    }
  }

  toggleFilter = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render () {

    // console.log(this.props.pokedex)

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
        <h3 onClick={this.toggleFilter}>Filter</h3>
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
