import React from 'react'
import { ContactsHeader } from './styles'
import Search from '../Search/Search'
import PlusIcon from '../Icons/PlusIcon'

function Header () {
  return (
    <ContactsHeader>
      <Search/>
      {/* <img src='../../assets/plus-icon.svg' /> */}
      <PlusIcon/>
    </ContactsHeader>
  )
}

export default Header