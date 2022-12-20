import React, { Fragment, useState } from 'react'
import { MainSection, ContactsContainer } from './styles'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import List from '../../components/List/List'
import RecentContacts from '../../components/RecentsContacts/RecentContacts'
import CreateContact from '../CreateContact/CreateContact'

function Home () {
  const [ selector, setSelector ] = useState<'list' | 'create'>('list')

  return (
    <MainSection className='home'>
      <ContactsContainer>
        {selector === 'create' && (
          <CreateContact onCancel={() => setSelector('list')}/>
        )}

        {selector === 'list' && (
          <Fragment>
            <Header
              onSearch={(v) => console.log(v)}
              onClick={() => setSelector('create')}
            />
            
            <RecentContacts/>

            <List 
              onClick={() => setSelector('create')} 
            />

            <Footer>
              <p className='home__footer-text'>
                Você possui <b className='home__footer-text--bold'>1900</b> contatos
              </p>
            </Footer>
          </Fragment>
        )}
      </ContactsContainer>
    </MainSection>
  )
}

export default Home