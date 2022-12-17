import React from 'react'
import { ContactList } from './styles'
import Contact from '../Contact/Contact'

function List () {
  const contacts = [
    {name: 'Henry Zanata', number: '15981448561', image: 'https://source.unsplash.com/random'},
    {name: 'Henry Zanata', number: '15981448561', image: 'https://source.unsplash.com/random'},
    {name: 'Henry Zanata', number: '15981448561', image: 'https://source.unsplash.com/random'},
    {name: 'Henry Zanata', number: '15981448561', image: 'https://source.unsplash.com/random'},
    {name: 'Henry Zanata', number: '15981448561', image: 'https://source.unsplash.com/random'},
  ]

  return (
    <ContactList>
      {Array.isArray(contacts) && contacts.map(contact => (
        <Contact 
          cellphone={contact.number}
          name={contact.name}
          image={contact.image}
        />
      ))}
    </ContactList>
  )
}

export default List