import React from 'react'
import './paginator.css'

function Paginator(props) {
  return (
    <div className='Pager'
      onClick={ props.handleClick }
    >
      <a className="Pagination-button" href="#">{ props.text }</a>
    </div>
  )
}

export default Paginator

