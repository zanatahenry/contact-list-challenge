import React, { Fragment, useState } from 'react'
import { MainSection, ContactsContainer } from './styles'
import { useDispatch } from 'react-redux'
import { useContacts } from '../../hooks'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import List from '../../components/List/List'
import CreateContact from '../CreateContact/CreateContact'
import { setRecents, setSelectedContact } from '../../store/modules/contacts/contacts'

function Home () {
  const [ selector, setSelector ] = useState<'list' | 'create'>('list')

  const contacts = useContacts()
  const dispatch = useDispatch()

  return (
    <MainSection className='home'>
      <ContactsContainer>
        {selector === 'create' && (
          <CreateContact 
            onCancel={() => {
              setSelector('list')
              dispatch(setSelectedContact({selectedContact: undefined}))
            }}
            onSuccess={() => {
              setSelector('list')
              dispatch(setSelectedContact({selectedContact: undefined}))
            }}
          />
        )}

        {selector === 'list' && (
          <Fragment>
            <Header onClick={() => setSelector('create')} />
            
            <List 
              onClick={(contact) => {
                setSelector('create')
                dispatch(setRecents([contact, ...contacts.recents]))
                dispatch(setSelectedContact({selectedContact: contact}))
              }} 
            />

            <Footer>
              <p className='home__footer-text'>
                Você possui <b className='home__footer-text--bold'>{contacts.totalContacts}</b> contatos
              </p>
            </Footer>
          </Fragment>
        )}
      </ContactsContainer>
    </MainSection>
  )
}

export default Home