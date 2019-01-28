import React from 'react'
import './Pokemon.css'

const Pokemon = (props) => {

  console.log(props)

  return (
    <div className="Pokemon">
      <img src={props.sprite} />
    </div>
  )
}

export default Pokemon
