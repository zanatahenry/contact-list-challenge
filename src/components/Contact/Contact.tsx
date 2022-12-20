import React from 'react'
import { ButtonsContainer, Container, InfosContainer } from './styles'
import Avatar from '../Avatar/Avatar'
import { emptyImage } from '../../utils/globals'
import mask from '../../utils/masks'
import TrashIcon from '../../components/Icons/TrashIcon'

type Props = {
  image?: string
  name: string
  cellphone: string
  onClick(): void
  onDelete(): void
}

function Contact ({ cellphone, image, name, onClick, onDelete }: Props) {
  return (
    <Container className='contact' onClick={onClick}>
      <InfosContainer>
        <Avatar src={image ? image : emptyImage } alt="imagem do contato" />
        <div>
          <p className='contact__name' >{name}</p>
          <p className='contact__cellphone'>{mask(String(cellphone), 'cell', true)}</p>
        </div>
      </InfosContainer>

      <ButtonsContainer>
        <button 
          className='contact__delete-button' 
          onClick={(e) => {
            e.stopPropagation()
            onDelete()
          }}
        >
          <TrashIcon/>
        </button>
      </ButtonsContainer>
    </Container>
  )
}

export default Contact