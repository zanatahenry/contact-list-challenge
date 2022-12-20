import React, { ReactNode } from 'react'
import { ContactsHeader, CreateButton } from './styles'
import Input from '../Input/Input'


type Props = {
  onSearch(value: string): void
  onClick(): void
}

function Header ({ onSearch, onClick }: Props) {
  return (
    <ContactsHeader>
      <Input 
        onChange={(event) => onSearch(event.target.value)}
        mask='cep' 
        placeholder="Pesquise seus contatos" 
      />

      <CreateButton onClick={onClick}>NOVO</CreateButton>
    </ContactsHeader>
  )
}

export default Header