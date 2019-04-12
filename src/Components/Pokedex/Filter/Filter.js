import React, {Component} from 'react'
import './Filter.css'
import {Form} from 'react-bootstrap'
import axios from 'axios'
import {connect} from 'react-redux'
import { Checkbox } from 'antd';
import {getPokedex, getTeam} from '../../../redux/reducer'

class Filter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      toggleType: false,
      toggleEvolution: false,
      typeToggle: {
        normal: false,
        grass: false,
        fire: false,
        water: false,
        fighting: false,
        flying: false,
        poison: false,
        ground: false,
        rock: false,
        bug: false,
        ghost: false,
        electric: false,
        psychic: false,
        ice: false,
        dragon: false,
        fairy: false
      },
      evolutionToggle: {
        notFullyEvolved: false,
        fullyEvolved: false
      },
      filteredType: [],
      filteredEvolution: [],
      normal: true,
      grass: true,
      fire: true,
      water: true,
      fighting: true,
      flying: true,
      poison: true,
      ground: true,
      rock: true,
      bug: true,
      ghost: true,
      electric: true,
      psychic: true,
      ice: true,
      dragon: true,
      fairy: true,
      evolved: true,
      unevolved: true
    }
  }

  componentDidUpdate (prevProps, prevState) {

    const filtered = {
      type: this.state.filteredType,
      evolution: this.state.filteredEvolution,
      dex: this.props.pokedex,
      team: this.props.team
    }

    if (prevState.filteredType !== this.state.filteredType
      || prevState.filteredEvolution !== this.state.filteredEvolution) {

      // console.log(filtered)

      axios.post('/api/pokemon/filter', filtered).then(res => {
        // console.log(res.data)
        this.props.getPokedex(res.data)
      })
    }
  }

  handleToggleType = () => {
    this.setState({
      toggleType: !this.state.toggleType
    })
  }

  handleToggleEvolution = () => {
    this.setState({
      toggleEvolution: !this.state.toggleEvolution
    })
  }

  // Condense these into one dynamic function when you have more time !!!!

  normalChange = (e) => {
    this.setState({
      normal: !this.state.normal
    })
  }

  grassChange = (e) => {
    this.setState({
      grass: !this.state.grass
    })
  }

  fireChange = (e) => {
    this.setState({
      fire: !this.state.fire
    })
  }

  waterChange = (e) => {
    this.setState({
      water: !this.state.water
    })
  }

  fightingChange = (e) => {
    this.setState({
      fighting: !this.state.fighting
    })
  }

  flyingChange = (e) => {
    this.setState({
      flying: !this.state.flying
    })
  }

  poisonChange = (e) => {
    this.setState({
      poison: !this.state.poison
    })
  }

  groundChange = (e) => {
    this.setState({
      ground: !this.state.ground
    })
  }

  rockChange = (e) => {
    this.setState({
      rock: !this.state.rock
    })
  }

  bugChange = (e) => {
    this.setState({
      bug: !this.state.bug
    })
  }

  ghostChange = (e) => {
    this.setState({
      ghost: !this.state.ghost
    })
  }

  electricChange = (e) => {
    this.setState({
      electric: !this.state.electric
    })
  }

  psychicChange = (e) => {
    this.setState({
      psychic: !this.state.psychic
    })
  }

  iceChange = (e) => {
    this.setState({
      ice: !this.state.ice
    })
  }

  dragonChange = (e) => {
    this.setState({
      dragon: !this.state.dragon
    })
  }

  fairyChange = (e) => {
    this.setState({
      fairy: !this.state.fairy
    })
  }

  evolvedChange = (e) => {
    this.setState({
      evolved: !this.state.evolved
    })
  }

  unevolvedChange = (e) => {
    this.setState({
      unevolved: !this.state.unevolved
    })
  }


  // setState is asynchronous, so must include callback as second parameter to access mutated state.

  filterPokedex = (event, source) => {

    if (source === 'type') {
      this.filterX(event, this.state.typeToggle, this.state.filteredType)
    }
    else {
      this.filterX(event, this.state.evolutionToggle, this.state.filteredEvolution)
    }
  }

  filterX = (event, toggle, array) => {
    const toggleCopy = {...toggle}
    const arrayCopy = [...array]
    const {target: {value}} = event

    toggleCopy[value] = !toggleCopy[value]



    if (toggleCopy[value] && arrayCopy.indexOf(value) === -1) {
      arrayCopy.push(value)
    } else {
      arrayCopy.splice(arrayCopy.indexOf(value), 1)
    }

    this.setState({
      [event.target.name] : arrayCopy,
      [event.target.toggle] : toggleCopy
    })
  }

  render () {

    // console.log('normal', this.state.normal)


    const displayType = this.state.toggleType &&

      <form className="ToggleSelection">
          <h2><Checkbox checked={this.state.normal}
                  onChange={(e) => this.normalChange(e)}
                  name="filteredType"
                  label="Normal"
                  value="normal"
                  toggle="typeToggle"
                  onClick={ (e) => this.filterPokedex(e, 'type')}><span>Normal</span>
          </Checkbox></h2>
          <h2><Checkbox checked={this.state.grass}
                  onChange={(e) => this.grassChange(e)}
                  name="filteredType"
                  label="Grass"
                  value="grass"
                  toggle="typeToggle"
                  onClick={ (e) => this.filterPokedex(e, 'type')}><span>Grass</span>
          </Checkbox></h2>
          <h2><Checkbox checked={this.state.fire}
                  onChange={(e) => this.fireChange(e)}
                  name="filteredType"
                  label="Fire"
                  value="fire"
                  toggle="typeToggle"
                  onClick={ (e) => this.filterPokedex(e, 'type')}><span>Fire</span>
          </Checkbox></h2>
          <h2><Checkbox checked={this.state.water}
                  onChange={(e) => this.waterChange(e)}
                  name="filteredType"
                  label="Water"
                  value="water"
                  toggle="typeToggle"
                  onClick={ (e) => this.filterPokedex(e, 'type')}><span>Water</span>
          </Checkbox></h2>
          <h2><Checkbox checked={this.state.fighting}
                  onChange={(e) => this.fightingChange(e)}
                  name="filteredType"
                  label="Fighting"
                  value="fighting"
                  toggle="typeToggle"
                  onClick={ (e) => this.filterPokedex(e, 'type')}><span>Fighting</span>
          </Checkbox></h2>
          <h2><Checkbox checked={this.state.flying}
                  onChange={(e) => this.flyingChange(e)}
                  name="filteredType"
                  label="Flying"
                  value="flying"
                  toggle="typeToggle"
                  onClick={ (e) => this.filterPokedex(e, 'type')}><span>Flying</span>
          </Checkbox></h2>
          <h2><Checkbox checked={this.state.poison}
                  onChange={(e) => this.poisonChange(e)}
                  name="filteredType"
                  label="Poison"
                  value="poison"
                  toggle="typeToggle"
                  onClick={ (e) => this.filterPokedex(e, 'type')}><span>Poison</span>
          </Checkbox></h2>
          <h2><Checkbox checked={this.state.ground}
                  onChange={(e) => this.groundChange(e)}
                  name="filteredType"
                  label="Ground"
                  value="ground"
                  toggle="typeToggle"
                  onClick={ (e) => this.filterPokedex(e, 'type')}><span>Ground</span>
          </Checkbox></h2>
          <h2><Checkbox checked={this.state.rock}
                  onChange={(e) => this.rockChange(e)}
                  name="filteredType"
                  label="Rock"
                  value="rock"
                  toggle="typeToggle"
                  onClick={ (e) => this.filterPokedex(e, 'type')}><span>Rock</span>
          </Checkbox></h2>
          <h2><Checkbox checked={this.state.bug}
                  onChange={(e) => this.bugChange(e)}
                  name="filteredType"
                  label="Bug"
                  value="bug"
                  toggle="typeToggle"
                  onClick={ (e) => this.filterPokedex(e, 'type')}><span>Bug</span>
          </Checkbox></h2>
          <h2><Checkbox checked={this.state.ghost}
                  onChange={(e) => this.ghostChange(e)}
                  name="filteredType"
                  label="Ghost"
                  value="ghost"
                  toggle="typeToggle"
                  onClick={ (e) => this.filterPokedex(e, 'type')}><span>Ghost</span>
          </Checkbox></h2>
          <h2><Checkbox checked={this.state.electric}
                  onChange={(e) => this.electricChange(e)}
                  name="filteredType"
                  label="Electric"
                  value="electric"
                  toggle="typeToggle"
                  onClick={ (e) => this.filterPokedex(e, 'type')}><span>Electric</span>
          </Checkbox></h2>
          <h2><Checkbox checked={this.state.psychic}
                  onChange={(e) => this.psychicChange(e)}
                  name="filteredType"
                  label="Psychic"
                  value="psychic"
                  toggle="typeToggle"
                  onClick={ (e) => this.filterPokedex(e, 'type')}><span>Psychic</span>
          </Checkbox></h2>
          <h2><Checkbox checked={this.state.ice}
                  onChange={(e) => this.iceChange(e)}
                  name="filteredType"
                  label="Ice"
                  value="ice"
                  toggle="typeToggle"
                  onClick={ (e) => this.filterPokedex(e, 'type')}><span>Ice</span>
          </Checkbox></h2>
          <h2><Checkbox checked={this.state.dragon}
                  onChange={(e) => this.dragonChange(e)}
                  name="filteredType"
                  label="Dragon"
                  value="dragon"
                  toggle="typeToggle"
                  onClick={ (e) => this.filterPokedex(e, 'type')}><span>Dragon</span>
          </Checkbox></h2>
          <h2><Checkbox checked={this.state.fairy}
                  onChange={(e) => this.fairyChange(e)}
                  name="filteredType"
                  label="Fairy"
                  value="fairy"
                  toggle="typeToggle"
                  onClick={ (e) => this.filterPokedex(e, 'type')}><span>Fairy</span>
          </Checkbox></h2>
      </form>

    const displayEvolution = this.state.toggleEvolution &&
      <form id="evolution" className="ToggleSelection">
        <h2><Checkbox checked={this.state.evolved}
              onChange={(e) => this.evolvedChange(e)}
              name="filteredEvolution"
              label="Fully Evolved"
              value="fullyEvolved"
              toggle="evolutionToggle"
              onClick={ (e) => this.filterPokedex(e, e.target.value, 'evolution')}><span>Fully Evolved</span>
        </Checkbox></h2>
        <h2><Checkbox checked={this.state.unevolved}
              onChange={(e) => this.unevolvedChange(e)}
              name="filteredEvolution"
              label="Not Fully Evolved"
              value="notFullyEvolved"
              toggle="evolutionToggle"
              onClick={ (e) => this.filterPokedex(e, e.target.value, 'evolution')}><span>Not Fully Evolved</span>
        </Checkbox></h2>
    </form>


    return (
      <section>
        <div className="FilterCondition">
          <h3>Type</h3>
          {displayType}
          <button onClick={this.handleToggleType}>All Selected ▼</button>
        </div>
        <div className="FilterCondition">
          <h3>Evolution</h3>
          <button onClick={this.handleToggleEvolution}>All Selected ▼</button>
          {displayEvolution}
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pokedex: state.pokedex,
    team: state.team
  }
}

const mapDispatchToProps = {
  getPokedex,
  getTeam
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
