import React from 'react'
import { ContactsHeader, CreateButton } from './styles'
import Search from '../Search/Search'


function Header () {
  return (
    <ContactsHeader>
      <Search/>
      <CreateButton>NOVO</CreateButton>
    </ContactsHeader>
  )
}

export default Header