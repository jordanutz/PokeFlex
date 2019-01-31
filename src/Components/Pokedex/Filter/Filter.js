import React, {Component} from 'react'
import './Filter.css'

class Filter extends Component {
  constructor () {
    super()
    this.state = {
      toggleType: false,
      toggleEvolution: false
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

  render () {

    const displayType = this.state.toggleType &&
      <form className="ToggleSelection">
        <input type="checkbox" value="Normal"/><span>Normal</span><br/>
        <input type="checkbox" value="Grass"/><span>Grass</span><br/>
        <input type="checkbox" value="Fire"/><span>Fire</span><br/>
        <input type="checkbox" value="Water"/><span>Water</span><br/>
        <input type="checkbox" value="Fighting"/><span>Fighting</span><br/>
        <input type="checkbox" value="Flying"/><span>Flying</span><br/>
        <input type="checkbox" value="Poison"/><span>Poison</span><br/>
        <input type="checkbox" value="Ground"/><span>Ground</span><br/>
        <input type="checkbox" value="Rock"/><span>Rock</span><br/>
        <input type="checkbox" value="Bug"/><span>Bug</span><br/>
        <input type="checkbox" value="Ghost"/><span>Ghost</span><br/>
        <input type="checkbox" value="Boat"/><span>Electric</span><br/>
        <input type="checkbox" value="Psychic"/><span>Psychic</span><br/>
        <input type="checkbox" value="Ice"/><span>Ice</span><br/>
        <input type="checkbox" value="Dragon"/><span>Dragon</span><br/>
        <input type="checkbox" value="Fairy"/><span>Fairy</span><br/>
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
