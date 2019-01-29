import React from 'react'
import './Team.css'

const Team = (props) => {

  // console.log(props)

    let background = {
      "grass": "#53FF73",
      "fire": "#FF5353",
      "water": "#5378FF",
      "poison": "#8953FF",
      "bug": "#C6E80B",
      "electric": "#FFC153",
      "normal": "#FFEBCD",
      "psychic": "#FF539F",
      "ice": "#53BCFF",
      "flying": "#FFEBCD",
      "fairy": "#FF5EDB",
      "ground": "#DEB887",
      "rock": "#CD853F",
      "ghost": "#A80BE8",
      "dragon": "#4101FF",
      "fighting": "#FF7D53"
    }

    let border = {
      "grass": "#009B4E",
      "fire": "#9B1F00",
      "water": "#00359B",
      "poison": "#67009B",
      "bug": "#829A00",
      "electric": "#E4C200",
      "normal": "#D0B895",
      "psychic": "#B50050",
      "ice": "#0068AA",
      "flying": "#A49D94",
      "fairy": "#9A0077",
      "ground": "#977549",
      "rock": "#915820",
      "ghost": "#680093",
      "dragon": "#240091",
      "fighting": "#B3370E"
    }

    const displayedTeam = props.team.map(pokemon => {

      return (
        <div className="TeamPokemon">
        <div className="TeamIcon"
          key={pokemon.id}
          style={{'background': background[pokemon.type],
                'borderColor': border[pokemon.type]}}
          onClick={() => props.deletePokemon(pokemon.id)}>
          <img src={pokemon.image} alt="Pokemon"/>
        </div>

        <div className="PokemonDetails" style={{'background': background[pokemon.type]}}>
          <h1>{pokemon.name}</h1>
          <h2>{pokemon.type}</h2>
        </div>

        </div>

      )
    })

    return (
      <div className="Team">
        <h1>Your Team</h1>
        <div className="TeamDisplay">
          {displayedTeam}
        </div>
      </div>
  )
}

export default Team
