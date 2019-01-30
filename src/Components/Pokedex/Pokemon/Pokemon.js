import React from 'react'
import './Pokemon.css'

const Pokemon = (props) => {

  // console.log(props.team.length > 6)

  const isEnabled = props.team.length <= 6

  const {id} = props

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

  return (
    <button className="Pokemon"
      disabled={!isEnabled}
      style={{background: background[props.type]}}
      onClick={() => props.team.length < 6 && props.addPokemon(id)}>

      <img src={props.sprite} alt="Pokemon Sprite" />
    </button>
  )
}

export default Pokemon
