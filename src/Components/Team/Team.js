import React, {Component} from 'react'
import './Team.css'
import axios from 'axios'

class Team extends Component {
  // constructor () {
  //   super()
  //   this.state = {
  //     team: []
  //   }
  // }

  // componentDidMount () {
  //   axios.get('/api/team').then(res => {
  //     this.setState({
  //       team: res.data
  //     })
  //   })
  // }

  render () {

    const displayedTeam = this.props.team.map(pokemon => {
      console.log(pokemon)
      return (
        <div className="Team">
          <div className="TeamIcon">
            <img src={pokemon.image} />
          </div>
        </div>
      )
    })

    return (
      <div className="TeamDisplay">
        {displayedTeam}
      </div>
    )
  }
}

export default Team
