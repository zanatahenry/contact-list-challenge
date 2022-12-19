import React from 'react'
import { ContactList } from './styles'
import Contact from '../Contact/Contact'
import RecentContacts from '../RecentsContacts/RecentContacts'

type Props = {
  onClick(): void
}

function List ({ onClick }: Props) {
  const contacts = [
    {name: 'Henry Zanata', number: '(15) 98144-8561', image: 'https://source.unsplash.com/random'},
    {name: 'Henry Zanata', number: '(15) 98144-8561', image: 'https://source.unsplash.com/random'},
    {name: 'Henry Zanata', number: '(15) 98144-8561', image: 'https://source.unsplash.com/random'},
    {name: 'Henry Zanata', number: '(15) 98144-8561', image: 'https://source.unsplash.com/random'},
    {name: 'Henry Zanata', number: '(15) 98144-8561', image: 'https://source.unsplash.com/random'},
    {name: 'Henry Zanata', number: '(15) 98144-8561', image: 'https://source.unsplash.com/random'},
    {name: 'Henry Zanata', number: '(15) 98144-8561', image: 'https://source.unsplash.com/random'},
    {name: 'Henry Zanata', number: '(15) 98144-8561', image: 'https://source.unsplash.com/random'},
    {name: 'Henry Zanata', number: '(15) 98144-8561', image: 'https://source.unsplash.com/random'},
    {name: 'Henry Zanata', number: '(15) 98144-8561', image: 'https://source.unsplash.com/random'},
  ]

  return (
    <ContactList className='contact-list'>
      <p className='contact-list__title'>Todos os contatos</p>
      {Array.isArray(contacts) && contacts.map(contact => (
        <Contact 
          onClick={onClick}
          cellphone={contact.number}
          name={contact.name}
          image={contact.image}
        />
      ))}
    </ContactList>
  )
}

export default List