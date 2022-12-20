import React from 'react'
import { Container, InfosContainer } from './styles'
import Avatar from '../Avatar/Avatar'
import { emptyImage } from '../../utils/globals'
import mask from '../../utils/masks'

type Props = {
  image?: string
  name: string
  cellphone: string
  onClick(): void
}

function Contact ({ cellphone, image, name, onClick }: Props) {
  return (
    <Container className='contact' onClick={onClick}>
      <Avatar src={image ? image : emptyImage } alt="imagem do contato" />

      <InfosContainer>
        <p className='contact__name' >{name}</p>
        <p className='contact__cellphone'>{mask(String(cellphone), 'cell', true)}</p>
      </InfosContainer>
    </Container>
  )
}

export default Contact