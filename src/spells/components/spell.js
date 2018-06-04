import React, { PureComponent } from 'react'
import './spell.css'

class Spell extends PureComponent{

  handleClick = event => {
    this.props.handleOpenModal(this.props)
  }

  render(){
    return(
      <article className='Spell' onClick={ this.handleClick }>
        <h2 className='Spell-title'><a href="#">{ this.props.name }</a> </h2>
        <span className='Spell-type'>{ this.props.type } </span>
        <span className='Spell-type'>{ this.props.method } </span>
        <span className='Spell-type'>{ this.props.object }</span>
        <p className='Spell-description'>{ this.props.description }</p>
      </article>
    )
  }
}

export default Spell