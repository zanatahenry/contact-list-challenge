import React from 'react'
import { MainSection, ContactsContainer } from './styles'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import List from '../../components/List/List'

function Home () {
  return (
    <MainSection>
      <ContactsContainer>
        <Header/>
        <List/>
        <Footer>
          Total de contatos: 1900
        </Footer>
      </ContactsContainer>
    </MainSection>
  )
}

export default Home