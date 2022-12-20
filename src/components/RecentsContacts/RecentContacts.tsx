import React, { Fragment } from "react";
import { ContactContainer, Container, Recents, Image } from "./styles";
import Avatar from "../Avatar/Avatar";
import { IContact } from "../../components/List/listInterfaces";
import { emptyImage } from "../../utils/globals";

type Props = {
  recents: IContact[]
}

function RecentContacts ({ recents }: Props) {
  return (
    <Container className="recent-contact">
      <p className="recent-contact__title">Recentes</p>

      <ContactContainer>
        {Array.isArray(recents) && recents.map(contact => (
          <Recents key={contact.id}>
            <Avatar src={contact.image ? contact.image: emptyImage} alt="imagem do contato recente" />
            <p className="recent-contact__name">{contact.name.split(' ')[0]}</p>
          </Recents>
        ))}
      </ContactContainer>
    </Container>
  )
}

export default RecentContacts