import React, { useEffect, useState } from 'react'
import { ContactList } from './styles'
import Contact from '../Contact/Contact'
import ContactsRepository from '../../repositories/ContactsRepository'
import { IContact } from './listInterfaces'
import { setTotalContacts } from '../../store/modules/contacts/contacts'
import { useDispatch } from 'react-redux'

type Props = {
  onClick(contact: IContact): void
}

function List ({ onClick }: Props) {
  const [ contacts, setContacts ] = useState<IContact[]>([])
  const dispatch = useDispatch()

  useEffect(() => {
    async function getContacts () {
      try {
        const response = await ContactsRepository.getAll()
        const list = response.data
        dispatch(setTotalContacts({ totalContacts: list.length }))
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
          key={contact.id}
          onClick={() => onClick(contact)}
          cellphone={contact.phone}
          name={contact.name}
          image={contact.image}
        />
      ))}
    </ContactList>
  )
}

export default List