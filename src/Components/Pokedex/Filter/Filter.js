import React, {Component} from 'react'
import './Filter.css'
import {Form} from 'react-bootstrap'
import axios from 'axios'
import {connect} from 'react-redux'
import {getPokedex} from '../../../redux/reducer'

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
      filteredEvolution: []
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.filteredType !== this.state.filteredType || prevState.filteredEvolution !== this.state.filteredEvolution) {
      axios.post(`/api/pokemon/filter?type=${this.state.filteredType}&evolution=${this.state.filteredEvolution}`).then(res => {
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

  // setState is asynchronous, so must include callback as second parameter to access mutated state.

  filterPokedex = (event, value, source) => {
    if (source === 'type') {
      this.filterX(event, value, this.state.typeToggle, this.state.filteredType)
    }
    else {
      this.filterX(event, value, this.state.evolutionToggle, this.state.filteredEvolution)
    }
  }

  filterX = (event, value, toggle, array) => {
    const toggleCopy = {...toggle}
    const arrayCopy = [...array]

    toggleCopy[value] = !toggleCopy[value]

    if (toggleCopy[value] && arrayCopy.indexOf(value) === -1) {
      arrayCopy.push(value)
    } else {
      arrayCopy.splice(arrayCopy.indexOf(value), 1)
    }

    this.setState({
      [event.target.name] : arrayCopy,
      [event.target.toggle] : toggleCopy
    }, () => {
      console.log(this.state.filteredType, this.state.filteredEvolution)
    })
  }

  render () {

    // console.log(this.props)

    const displayType = this.state.toggleType &&
      <form className="ToggleSelection">
        <Form.Check type="checkbox" name="filteredType" label="Normal" value="normal" toggle="typeToggle" onClick={ (e) => this.filterPokedex(e, e.target.value, 'type')}/>
        <Form.Check type="checkbox" name="filteredType" label="Grass" value="grass" toggle="typeToggle" onClick={ (e) => this.filterPokedex(e, e.target.value, 'type')}/>
        <Form.Check type="checkbox" name="filteredType" label="Fire" value="fire" toggle="typeToggle" onClick={ (e) => this.filterPokedex(e, e.target.value, 'type')}/>
        <Form.Check type="checkbox" name="filteredType" label="Water" value="water" toggle="typeToggle" onClick={ (e) => this.filterPokedex(e, e.target.value, 'type')}/>
        <Form.Check type="checkbox" name="filteredType" label="Fighting" value="fighting" toggle="typeToggle" onClick={ (e) => this.filterPokedex(e, e.target.value, 'type')}/>
        <Form.Check type="checkbox" name="filteredType" label="Flying" value="flying" toggle="typeToggle" onClick={ (e) => this.filterPokedex(e, e.target.value, 'type')}/>
        <Form.Check type="checkbox" name="filteredType" label="Poison" value="poison" toggle="typeToggle" onClick={ (e) => this.filterPokedex(e, e.target.value, 'type')}/>
        <Form.Check type="checkbox" name="filteredType" label="Ground" value="ground" toggle="typeToggle" onClick={ (e) => this.filterPokedex(e, e.target.value, 'type')}/>
        <Form.Check type="checkbox" name="filteredType" label="Rock" value="rock" toggle="typeToggle" onClick={ (e) => this.filterPokedex(e, e.target.value, 'type')}/>
        <Form.Check type="checkbox" name="filteredType" label="Bug" value="bug" toggle="typeToggle" onClick={ (e) => this.filterPokedex(e, e.target.value, 'type')}/>
        <Form.Check type="checkbox" name="filteredType" label="Ghost" value="ghost" toggle="typeToggle" onClick={ (e) => this.filterPokedex(e, e.target.value, 'type')}/>
        <Form.Check type="checkbox" name="filteredType" label="Electric" value="electric" toggle="typeToggle" onClick={ (e) => this.filterPokedex(e, e.target.value, 'type')}/>
        <Form.Check type="checkbox" name="filteredType" label="Psychic" value="psychic" toggle="typeToggle" onClick={ (e) => this.filterPokedex(e, e.target.value, 'type')}/>
        <Form.Check type="checkbox" name="filteredType" label="Ice" value="ice" toggle="typeToggle" onClick={ (e) => this.filterPokedex(e, e.target.value, 'type')}/>
        <Form.Check type="checkbox" name="filteredType" label="Dragon" value="dragon" toggle="typeToggle" onClick={ (e) => this.filterPokedex(e, e.target.value, 'type')}/>
        <Form.Check type="checkbox" name="filteredType" label="Fairy" value="fairy" toggle="typeToggle" onClick={ (e) => this.filterPokedex(e, e.target.value, 'type')}/>
      </form>

    const displayEvolution = this.state.toggleEvolution &&
    <form id="evolution" className="ToggleSelection">
      <Form.Check type="checkbox" name="filteredEvolution" label="Not Fully Evolved" value="notFullyEvolved" toggle="evolutionToggle" onClick={ (e) => this.filterPokedex(e, e.target.value, 'evolution')}/>
      <Form.Check type="checkbox" name="filteredEvolution" label="Fully Evolved" value="fullyEvolved" toggle="evolutionToggle" onClick={ (e) => this.filterPokedex(e, e.target.value, 'evolution')}/>
    </form>

    return (
      <section>
        <div className="FilterCondition">
          <h2>Type</h2>
          <button onClick={this.handleToggleType}>All Selected ▼</button>
          {displayType}
        </div>
        <div className="FilterCondition">
          <h2>Evolution</h2>
          <button onClick={this.handleToggleEvolution}>All Selected ▼</button>
          {displayEvolution}
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pokedex: state.pokedex
  }
}

const mapDispatchToProps = {
  getPokedex
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
