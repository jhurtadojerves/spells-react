import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Spells from '../../spells/components/spells'
import Paginator from '../../spells/components/paginator'
import PaginatorLayout from '../../spells/components/paginator-layout'
import Header from '../../header/components/header'
import Footer from '../../footer/components/footer'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import Spell from "../../widgets/components/spell";


class Home extends Component{
  state = {
    spells: [],
    link: 'https://hechizos.herokuapp.com/api/spells/?format=json&page=1',
    previous: '',
    next: '',
    modal: false,
  }

  getData = link => {
    this.setState(
      {
        spells: []
      }
    )
    fetch(link)
      .then(response => response.json())
      .then(spells => {
        spells.results.forEach(spell => {
          let data = {
            name: spell.name,
            type: spell.type,
            method: spell.method,
            object: spell.object,
            description: spell.description,
            url: spell.url
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
    this.getData(this.state.previous)
  }
  nextLink = () =>{
    this.setState({
      spells: this.state.spells,
      link: this.state.next,
    })
    this.getData(this.state.next)
  }
  handleOpenModal =  spell  => {
    this.setState({
      spell: spell,
      modal: true
    })
    document.body.style='overflow: hidden;'
  }
  handleCloseModal = event => {
    this.setState(
      {
        modal: false,
      }
    )
    document.body.style=''
  }

  componentDidMount() {
    this.getData(this.state.link)
  }

  render() {
    return (
      <HomeLayout>
        <Header/>
        <PaginatorLayout>
          {
            this.state.previous &&
              <Paginator
                text={ "Anterior" }
                handleClick={ this.previousLink }
              />
          }
          {
            this.state.next &&
              <Paginator
                text={ "Siguiente" }
                handleClick={ this.nextLink }
              />
          }

        </PaginatorLayout>
        <Spells
          handleOpenModal={ this.handleOpenModal }
          spells={this.state.spells}
        />
        <PaginatorLayout>
          {
            this.state.previous &&
            <Paginator
              text={ "Anterior" }
              handleClick={ this.previousLink }
            />
          }
          {
            this.state.next &&
            <Paginator
              text={ "Siguiente" }
              handleClick={ this.nextLink }
            />
          }

        </PaginatorLayout>
        <Footer/>

        {
          this.state.modal &&
          <ModalContainer>
            <Modal
              handleClick = { this.handleCloseModal }
            >
              <Spell
                {...this.state.spell }
              />
            </Modal>
          </ModalContainer>
        }

      </HomeLayout>
    )
  }
}

export default Home
