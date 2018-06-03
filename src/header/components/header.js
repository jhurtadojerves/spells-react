import React from 'react'
import './header.css'

function Header(props) {
  return(
    <header className='Header'>
      <figure className='Header-container'>
        <img src="https://i.imgur.com/qH0xY1I.png" alt="" className='Header-image'/>
      </figure>
    </header>
  )
}

export default Header