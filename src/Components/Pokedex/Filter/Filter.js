import React, {Component} from 'react'
import './Filter.css'
import {Form} from 'react-bootstrap'
import axios from 'axios'

class Filter extends Component {
  constructor () {
    super()
    this.state = {
      toggleType: false,
      toggleEvolution: false,
      filteredToggle: {
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
      filtered: []
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

  filterPokedex = (value) => {
    const copy = {...this.state.filteredToggle}
    const arrayCopy = [...this.state.filtered]

    copy[value] = !copy[value]

    if (copy[value] && arrayCopy.indexOf(value) === -1) {
      arrayCopy.push(value)
    } else {
      arrayCopy.splice(arrayCopy.indexOf(value), 1)
    }

    this.setState({filtered: arrayCopy}, () => {
      // console.log(this.state.filtered)
      axios.post(`/api/pokemon/filter?type=${this.state.filtered}`).then(res => {
        console.log(res.data)
      })
    })
  }

  render () {

    const displayType = this.state.toggleType &&
      <form className="ToggleSelection">
        <Form.Check type="checkbox" label="Normal" value="normal" onClick={ (e) => this.filterPokedex(e.target.value)}/>
        <Form.Check type="checkbox" label="Grass" value="grass" onClick={ (e) => this.filterPokedex(e.target.value)}/>
        <Form.Check type="checkbox" label="Fire" value="fire" onClick={ (e) => this.filterPokedex(e.target.value)}/>
        <Form.Check type="checkbox" label="Water" value="water" onClick={ (e) => this.filterPokedex(e.target.value)}/>
        <Form.Check type="checkbox" label="Fighting" value="fighting" onClick={ (e) => this.filterPokedex(e.target.value)}/>
        <Form.Check type="checkbox" label="Flying" value="flying" onClick={ (e) => this.filterPokedex(e.target.value)}/>
        <Form.Check type="checkbox" label="Poison" value="poison" onClick={ (e) => this.filterPokedex(e.target.value)}/>
        <Form.Check type="checkbox" label="Ground" value="ground" onClick={ (e) => this.filterPokedex(e.target.value)}/>
        <Form.Check type="checkbox" label="Rock" value="rock" onClick={ (e) => this.filterPokedex(e.target.value)}/>
        <Form.Check type="checkbox" label="Bug" value="bug" onClick={ (e) => this.filterPokedex(e.target.value)}/>
        <Form.Check type="checkbox" label="Ghost" value="ghost" onClick={ (e) => this.filterPokedex(e.target.value)}/>
        <Form.Check type="checkbox" label="Electric" value="electric" onClick={ (e) => this.filterPokedex(e.target.value)}/>
        <Form.Check type="checkbox" label="Psychic" value="psychic" onClick={ (e) => this.filterPokedex(e.target.value)}/>
        <Form.Check type="checkbox" label="Ice" value="ice" onClick={ (e) => this.filterPokedex(e.target.value)}/>
        <Form.Check type="checkbox" label="Dragon" value="dragon" onClick={ (e) => this.filterPokedex(e.target.value)}/>
        <Form.Check type="checkbox" label="Fairy" value="fairy" onClick={ (e) => this.filterPokedex(e.target.value)}/>
      </form>

    const displayEvolution = this.state.toggleEvolution &&
    <form id="evolution" className="ToggleSelection">
      <input type="checkbox" value="Not Fully Evolved"/><span>Not Fully Evolved</span><br/>
      <input type="checkbox" value="Fully Evolved"/><span>Fully Evolved</span><br/>
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

export default Filter
