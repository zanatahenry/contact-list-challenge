import React, { Fragment } from "react";
import { ContactContainer, Container, Recents, Image } from "./styles";
import Avatar from "../Avatar/Avatar";

function RecentContacts () {
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
    {name: 'Henry Zanata', number: '(15) 98144-8561', image: 'https://source.unsplash.com/random'},
    {name: 'Henry Zanata', number: '(15) 98144-8561', image: 'https://source.unsplash.com/random'},
  ]

  return (
    <Container className="recent-contact">
      <p className="recent-contact__title">Recentes</p>

      <ContactContainer>
        {Array.isArray(contacts) && contacts.map(contact => (
          <Recents>
            <Avatar src={contact.image} alt="imagem do contato recente" />
            <p className="recent-contact__name">{contact.name.split(' ')[0]}</p>
          </Recents>
        ))}
      </ContactContainer>
    </Container>
  )
}

export default RecentContacts