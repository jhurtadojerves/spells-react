import React, { PureComponent } from 'react'
import './paginator.css'

class Paginator extends PureComponent {
  handleClick = event => {
    this.props.handleClick()
    console.log(event.target)
    event.preventDefault()
  }

  render(){
    return (
      <div className='Pager'
           onClick={((event) => this.handleClick(event))}
      >
        <a className="Pager-button" href="">{ this.props.text }</a>
      </div>
    )
  }
}

export default Paginator

