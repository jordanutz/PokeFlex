import React from 'react'
import './Stats.css'

const Stats = (props) => {

  // console.log(props)
  // console.log(props.background.normal)

  return (
    <div className="Stats">
      <h1>This Team is Weak Against:</h1>
      <div className="MainStats">
        <div className="TypeStats">
          <h1 style={{background: props.background.normal}}>Normal</h1>
          <h2>{props.weakness.normal}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.grass}}>Grass</h1>
          <h2>{props.weakness.grass}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.fire}}>Fire</h1>
          <h2>{props.weakness.fire}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.water}}>Water</h1>
          <h2>{props.weakness.water}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.fighting}}>Fighting</h1>
          <h2>{props.weakness.fighting}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.flying}}>Flying</h1>
          <h2>{props.weakness.flying}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.poison}}>Poison</h1>
          <h2>{props.weakness.poison}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.ground}}>Ground</h1>
          <h2>{props.weakness.ground}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.rock}}>Rock</h1>
          <h2>{props.weakness.rock}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.bug}}>Bug</h1>
          <h2>{props.weakness.bug}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.ghost}}>Ghost</h1>
          <h2>{props.weakness.ghost}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.electric}}>Electric</h1>
          <h2>{props.weakness.electric}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.psychic}}>Psychic</h1>
          <h2>{props.weakness.psychic}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.ice}}>Ice</h1>
          <h2>{props.weakness.ice}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.dragon}}>Dragon</h1>
          <h2>{props.weakness.dragon}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.fairy}}>Fairy</h1>
          <h2>{props.weakness.fairy}</h2>
        </div>
      </div>

      <h1>Your Team is Resistant To:</h1>

      <div className="MainStats">
        <div className="TypeStats">
          <h1 style={{background: props.background.normal}}>Normal</h1>
          <h2>{props.resistance.normal}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.grass}}>Grass</h1>
          <h2>{props.resistance.grass}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.fire}}>Fire</h1>
          <h2>{props.resistance.fire}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.water}}>Water</h1>
          <h2>{props.resistance.water}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.fighting}}>Fighting</h1>
          <h2>{props.resistance.fighting}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.flying}}>Flying</h1>
          <h2>{props.resistance.flying}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.poison}}>Poison</h1>
          <h2>{props.resistance.poison}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.ground}}>Ground</h1>
          <h2>{props.resistance.ground}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.rock}}>Rock</h1>
          <h2>{props.resistance.rock}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.bug}}>Bug</h1>
          <h2>{props.resistance.bug}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.ghost}}>Ghost</h1>
          <h2>{props.resistance.ghost}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.electric}}>Electric</h1>
          <h2>{props.resistance.electric}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.psychic}}>Psychic</h1>
          <h2>{props.resistance.psychic}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.ice}}>Ice</h1>
          <h2>{props.resistance.ice}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.dragon}}>Dragon</h1>
          <h2>{props.resistance.dragon}</h2>
        </div>
        <div className="TypeStats">
          <h1 style={{background: props.background.fairy}}>Fairy</h1>
          <h2>{props.resistance.fairy}</h2>
        </div>
      </div>
    </div>
  )
}

export default Stats
