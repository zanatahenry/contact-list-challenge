import React, { Fragment, MutableRefObject, useRef, useState } from 'react'
import { Container, ToHome, FormContainer } from './styles'
import { Formik } from 'formik'
import Input from '../../components/Input/Input'
import PersonImage from './components/PersonImage/PersonImage'

type Props = {
  onCancel(): void
}

function CreateContact ({ onCancel }: Props) {
  const [ image, setImage ] = useState<string>('')

  const formRef: MutableRefObject<any> = useRef(null)
  const attachFile: MutableRefObject<HTMLInputElement | null> = useRef(null)

  function getBase64 (file: FileList) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file[0])
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }

  function handleFile (e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const file = e.target.files[0]
      if (file.type.includes('image/')) {
        getBase64(e.target.files).then(base64 => setImage(base64 as string))
        
      }
    }
  }

  return (
    <Container>
        <ToHome>
          <p onClick={onCancel}>voltar</p>
        </ToHome>

        <FormContainer>
          <Formik
            innerRef={formRef}
            initialValues={{name: ''}}
            onSubmit={(values) => console.log(values)}
          >
            {({handleChange, handleBlur, handleSubmit, values, errors}) => (
              <div className='form-create'>
                <div className='form-create__image-container'>
                  <input
                    type="file"
                    size={1}
                    className="form-create__input-file"
                    ref={attachFile}
                    onChange={handleFile}
                    accept="image/*"
                  />

                  <PersonImage
                    image={image}
                    onClick={() => attachFile.current?.click() }
                    onDelete={() => setImage('')}
                  />
                </div>

                <div className='form-create__input-container'>
                  <label className='form-create__label'>Nome</label>
                  <Input placeholder='Digite o nome' onChange={handleChange('name')} />
                </div>

                <div className='form-create__input-container'>
                  <label className='form-create__label'>E-mail</label>
                  <Input placeholder='Digite o E-mail' onChange={handleChange('email')} />
                </div>
                
                <div className='form-create__input-container'>
                  <label className='form-create__label'>Telefone</label>
                  <Input placeholder='Digite o telefone' onChange={handleChange('phone')} />
                </div>

                <div className='form-create__input-container'>
                  <label className='form-create__label'>Endereço</label>
                  <Input placeholder='Digite o Endereço' onChange={handleChange('address')} />
                </div>

                <div className='form-create__submit-container'>
                  <button 
                    onClick={onCancel}
                    className='form-create__cancel-button'
                  >
                    Cancelar
                  </button>


                  <button 
                    type='submit' 
                    onClick={() => handleSubmit()}
                    className='form-create__submit-button'
                  >
                    Enviar
                  </button>
                </div>
              </div>
            )}
          </Formik>
        </FormContainer>
    </Container>
  )
}

export default CreateContact