import React, { useEffect, useState } from 'react'
import { ContactList } from './styles'
import Contact from '../Contact/Contact'
import ContactsRepository from '../../repositories/ContactsRepository'
import { IContact } from './listInterfaces'

type Props = {
  onClick(): void
}

function List ({ onClick }: Props) {
  const [ contacts, setContacts ] = useState<IContact[]>([])

  useEffect(() => {
    async function getContacts () {
      try {
        const response = await ContactsRepository.getAll()
        const list = response.data
        setContacts(list)
      } catch (err) {
        console.log(err)
      }
    }

    getContacts()
  }, [])

  return (
    <ContactList className='contact-list'>
      <p className='contact-list__title'>Todos os contatos</p>
      {Array.isArray(contacts) && contacts.map(contact => (
        <Contact 
          onClick={onClick}
          cellphone={contact.phone}
          name={contact.name}
          image={contact.image}
        />
      ))}
    </ContactList>
  )
}

export default List