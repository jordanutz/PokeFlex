import React from 'react'
import './Pokemon.css'

const Pokemon = (props) => {

  console.log(props)

  let background = {
    "grass": "#41ED27",
    "fire": "#ED4E27",
    "water": "#1074F9",
    "poison": "#A80BE8",
    "bug": "#C6E80B",
    "electric": "#FFF407",
    "normal": "#FFEBCD",
    "psychic": "#FF197B",
    "ice": "#20AEF3",
    "flying": "#FFEBCD",
    "fairy": "#FF5EDB",
    "ground": "#CD853F",
    "rock": "#A0522D",
    "ghost": "#A80BE8",
    "dragon": "#4101FF",
    "fighting": "#DEB887"
  }

  return (
    <div className="Pokemon" style={{background: background[props.type]}}>
      <img src={props.sprite} />
    </div>
  )
}

export default Pokemon
