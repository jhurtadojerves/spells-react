import React from 'react'
import './spell.css'

const Spell = (props) => {
  return(
    <div>
      <article className='ModalSpell'>
        <h2 className='ModalSpell-title'>{ props.name } </h2>
        <span className='ModalSpell-type'>{ props.type } </span>
        <span className='ModalSpell-type'>{ props.method } </span>
        <span className='ModalSpell-type'>{ props.object }</span>
        <p className='ModalSpell-description'>{ props.description }</p>
      </article>
    </div>


  )
}

export default Spell