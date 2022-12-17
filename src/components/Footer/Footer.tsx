import React, { ReactNode } from 'react'
import { ContactsFooter } from './styles'

type Props = {
  children: ReactNode
}

function Footer ({ children }: Props) {
  return (
    <ContactsFooter>
      {children}
    </ContactsFooter>
  )
}

export default Footer