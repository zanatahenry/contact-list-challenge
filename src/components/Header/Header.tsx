import React, { ReactNode, useEffect, useState } from 'react'
import { ContactsHeader, CreateButton } from './styles'
import Input from '../Input/Input'
import { useDispatch } from 'react-redux'
import { setSearchValue } from '../../store/modules/contacts/contacts'

type Props = {
  onClick(): void
}

function Header ({ onClick }: Props) {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  return (
    <ContactsHeader>
      <Input 
        onChange={(event) => {
          setValue(event.target.value)
          dispatch(setSearchValue({searchValue: event.target.value}))
        }}
        value={value}
        placeholder="Pesquise seus contatos" 
      />

      <CreateButton onClick={onClick}>NOVO</CreateButton>
    </ContactsHeader>
  )
}

export default Header