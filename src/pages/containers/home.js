import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Spells from '../../spells/components/spells'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      spells: []
    }
  }

  componentWillMount() {
    fetch('https://hechizos.herokuapp.com/api/spells/?format=json')
      .then(response => response.json())
      .then(spells => {
        spells.forEach(spell => {
          let data = {
            name: spell.name,
            type: spell.type,
            method: spell.method,
            object: spell.object,
            description: spell.description
          }
          this.setState({spells: this.state.spells.concat([data])})
        })
      })
  }
  render() {
    return (
      <HomeLayout>
        <Spells spells={this.state.spells} />
      </HomeLayout>
    )
  }
}

export default Home
