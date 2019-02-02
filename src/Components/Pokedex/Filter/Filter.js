import React, {Component} from 'react'
import './Filter.css'
import {Form} from 'react-bootstrap'

class Filter extends Component {
  constructor () {
    super()
    this.state = {
      toggleType: false,
      toggleEvolution: false,
      filtered: {
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
        fairy: true
      }
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

  filterPokedex = (value) => {
    const copy = {...this.state.filtered}
    copy[value] = !copy[value]
    this.setState({
      filtered: copy
    })
  }

  render () {

    console.log(this.state.filtered)


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
