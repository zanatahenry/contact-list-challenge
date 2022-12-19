import React from 'react'
import { Container, InfosContainer } from './styles'
import Avatar from '../Avatar/Avatar'

type Props = {
  image: string
  name: string
  cellphone: string
  onClick(): void
}

function Contact ({ cellphone, image, name, onClick }: Props) {
  return (
    <Container className='contact' onClick={onClick}>
      <Avatar src={image} alt="imagem do contato" />

      <InfosContainer>
        <p className='contact__name' >{name}</p>
        <p className='contact__cellphone'>{cellphone}</p>
      </InfosContainer>
    </Container>
  )
}

export default Contact