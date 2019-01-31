import React from 'react'
import './Pokemon.css'

const Pokemon = (props) => {

  // console.log(props.team.length > 6)

  const isEnabled = props.team.length <= 6

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

  return (
    <button className="Pokemon"
      disabled={!isEnabled}
      style={{background: background[props.type],
      'borderColor': border[props.type]
      }}
      onClick={() => props.team.length < 6 && props.addPokemon(props.id)}>

      <img src={props.sprite} alt="Pokemon Sprite" />
    </button>
  )
}

export default Pokemon
