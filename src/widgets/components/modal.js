import React from 'react'
import './modal.css'

const Modal = (props) => {
  return (
    <div>
      <div className="Modal">
        { props.children }
        <button
          className="Modal-close"
          onClick={ props.handleClick }
        />
      </div>
      <div className="fadebox">&nbsp;</div>
    </div>

  )
}

export default Modal