import React from 'react'
import { Container } from './styles'

type Props = {
  image: string
  name: string
  cellphone: string
}

function Contact ({ cellphone, image, name }: Props) {
  return (
    <Container>
      <img src={image} alt="imagem do contato" />


    </Container>
  )
}

export default Contact