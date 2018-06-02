import React from 'react'
import './spell.css'

function Spell(props) {
  return(
    <article className='Spell'>
      <h2 className='Spell-title'><a href="#">{ props.title }</a></h2>
      <span className='Spell-type'>{ props.type }</span>
      <span className='Spell-type'>{ props.method }</span>
      <span className='Spell-type'>{ props.object }</span>
      <p className='Spell-description'>{ props.description }</p>
    </article>
  )
}

export default Spell