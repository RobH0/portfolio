import React from 'react'

function TechIcon(props) {
  return (
    <div>
        <img src={props.source} alt={props.name}></img>
        <h3>{props.name}</h3>
    </div>
  )
}

export default TechIcon