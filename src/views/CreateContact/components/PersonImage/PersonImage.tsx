import React, { Fragment } from 'react'
import { emptyImage } from '../../../../utils/globals'

type Props = {
  image: string
  onClick(): void
  onDelete(): void
}

function PersonImage ({ image, onClick, onDelete }: Props) {
  return (
    <Fragment>
      <img 
        alt="imagem do contato"
        src={image ? image : emptyImage}
        className="form-create__image"
        onClick={onClick}
      />

      {image && (
        <div>
          <button
            className="form-create__delete-image"
            onClick={onDelete}
          >
            Excluir imagem
          </button>
        </div>
      )}
    </Fragment>
  )
}
export default PersonImage