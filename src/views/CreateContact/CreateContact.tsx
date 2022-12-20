import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { Container, ToHome, FormContainer, GoBackButton } from './styles'
import { Formik } from 'formik'
import Input from '../../components/Input/Input'
import PersonImage from './components/PersonImage/PersonImage'
import ContactsRepository from '../../repositories/ContactsRepository'
import { getBase64 } from '../../utils/globals'
import GoBackIcon from '../../components/Icons/GoBackIcon'
import { CreateContactProps, ISendContacts } from './createContactInterfaces'
import { useContacts } from '../../hooks'

function CreateContact ({ onCancel, onSuccess }: CreateContactProps) {
  const [ image, setImage ] = useState<string>('')

  const contacts = useContacts()
  const formRef: MutableRefObject<any> = useRef(null)
  const attachFile: MutableRefObject<HTMLInputElement | null> = useRef(null)

  async function onSubmit (values: Omit<ISendContacts, 'image'>) {
    const data: ISendContacts = {
      ...values,
      image: image
    }

    try {
      const response = await ContactsRepository.create(data)
      onSuccess()
      formRef.current.resetForm()
    } catch (err) {
      console.log(err)
    }
  }

  async function onUpdate (values: Omit<ISendContacts, 'image'>) {
    const data: ISendContacts = {
      ...values,
      image: image
    }

    try {
      if (!contacts.selectedContact) throw new Error('Identificador do contato não encontrado!')
      const response = await ContactsRepository.update(contacts.selectedContact.id, data)
      formRef.current.resetForm()
      onSuccess()
    } catch (err) {
      console.log(err)
    }
  }

  function handleFile (e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const file = e.target.files[0]
      if (file.type.includes('image/')) {
        getBase64(e.target.files).then(base64 => {
          setImage(base64 as string)
        })
        
      }
    }
  }
  
  useEffect(() => {
    async function getCurrentContact (id: number) {
      try {
        const response = await ContactsRepository.find(id)
        const contact = response.data

        if (contact.name) formRef.current.setFieldValue("name", contact.name)
        if (contact.email) formRef.current.setFieldValue("email", contact.email)
        if (contact.phone) formRef.current.setFieldValue("phone", contact.phone)
        if (contact.address) formRef.current.setFieldValue("address", contact.address)
        if (contact.image) setImage(contact.image)

      } catch (err) {
        console.log(err)
      }
    }

    if (contacts.selectedContact) getCurrentContact(contacts.selectedContact.id)
  }, [contacts.selectedContact])

  return (
    <Container>
        <ToHome>
          <GoBackButton onClick={onCancel}>
            <GoBackIcon/>
            voltar
          </GoBackButton>
        </ToHome>

        <FormContainer>
          <Formik
            innerRef={formRef}
            initialValues={{name: '', email: '', phone: '', address: ''}}
            onSubmit={(values) => contacts.selectedContact ? onUpdate(values) : onSubmit(values)}
          >
            {({handleChange, handleSubmit, values, errors}) => (
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
                  <Input placeholder='Digite o nome' value={values.name} onChange={handleChange('name')} />
                </div>

                <div className='form-create__input-container'>
                  <label className='form-create__label'>E-mail</label>
                  <Input placeholder='Digite o E-mail' value={values.email} onChange={handleChange('email')} />
                </div>
                
                <div className='form-create__input-container'>
                  <label className='form-create__label'>Telefone</label>
                  <Input placeholder='Digite o telefone' value={values.phone} onChange={handleChange('phone')} />
                </div>

                <div className='form-create__input-container'>
                  <label className='form-create__label'>Endereço</label>
                  <Input placeholder='Digite o Endereço' value={values.address} onChange={handleChange('address')} />
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
                    {!contacts.selectedContact ? 'Enviar' : 'Atualizar'}
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