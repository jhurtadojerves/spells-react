import React from 'react'
import './spells.css'
import Spell from './spell'

function Spells (props) {
  return (
    <div className='Spells'>
      {
        props.spells.map(function(spell) {
          return(
            <Spell {...spell} />
          )
        })
      }
    </div>
  )
}

export default Spells