import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Spells from '../../spells/components/spells'
import Paginator from '../../spells/components/paginator'

class Home extends Component{
  state = {
    spells: [],
    link: 'https://hechizos.herokuapp.com/api/spells/?format=json&page=1',
    previous: '',
    next: ''
  }

  componentWillMount() {
    fetch(this.state.link)
      .then(response => response.json())
      .then(spells => {
        spells.results.forEach(spell => {
          let data = {
            name: spell.name,
            type: spell.type,
            method: spell.method,
            object: spell.object,
            description: spell.description
          }
          this.setState({
            spells: this.state.spells.concat([data]),
            link: this.state.link,
            previous: spells.previous,
            next: spells.next
          })
        })
      })
  }
  previousLink = () => {
    this.setState({
      spells: this.state.spells,
      link: this.state.previous,
    })
  }
  nextLink = () =>{
    this.setState({
      spells: this.state.spells,
      link: this.state.next,
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
