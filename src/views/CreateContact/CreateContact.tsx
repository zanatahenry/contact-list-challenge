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
import * as Yup from 'yup'
import swal from '../../utils/swal'
import resources from '../../consumer/resources'

function CreateContact ({ onCancel, onSuccess }: CreateContactProps) {
  const [ image, setImage ] = useState<string>('')

  const contacts = useContacts()
  const formRef: MutableRefObject<any> = useRef(null)
  const attachFile: MutableRefObject<HTMLInputElement | null> = useRef(null)

  const createSchema = Yup.object().shape({
    name: Yup.string()
      .required('Campo obrigatório.'),
    email: Yup.string()
      .email('Email inválido.')
      .required('Campo obrigatório.'),
    cep: Yup.string()
    .required('Campo obrigatório.'), 
    phone: Yup.string()
    .min(15, 'Telefone inválido')
    .required('Campo obrigatório.'), 
    neighborhood: Yup.string()
    .required('Campo obrigatório.'),
    city: Yup.string()
    .required('Campo obrigatório.'),
    street: Yup.string()
    .required('Campo obrigatório.'),
    number: Yup.string()
    .required('Campo obrigatório.'),
    additional: Yup.string()
    .required('Campo obrigatório.'),
  })

  async function onSubmit (values: Omit<ISendContacts, 'image'>) {
    const data: ISendContacts = {
      ...values,
      image: image
    }

    try {
      await ContactsRepository.create(data)
      swal.basic({title: 'Sucesso!', text: 'Contato salvo com sucesso!', icon: 'success'})
      onSuccess()
      formRef.current.resetForm()
    } catch (err) {
      swal.basic({title: 'Atenção!', text: 'Falha ao salvar contato!', icon: 'warning'})
    }
  }

  async function onUpdate (values: Omit<ISendContacts, 'image'>) {
    const data: ISendContacts = {
      ...values,
      image: image
    }

    try {
      if (!contacts.selectedContact) throw new Error('Identificador do contato não encontrado!')
      await ContactsRepository.update(contacts.selectedContact.id, data)
      formRef.current.resetForm()
      swal.basic({title: 'Sucesso!', text: 'Contato atualizado com sucesso!', icon: 'success'})
      onSuccess()
    } catch (err) {
      swal.basic({title: 'Atenção!', text: 'Falha ao atualizar contato!', icon: 'warning'})

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

  async function getAddress (cep: string) {
    const param = cep.replace(/\D/g, '')
    if (param.length === 8) {
      try {
        const response = await resources.address(param)
        formRef.current.setFieldValue("neighborhood", response.data.bairro)
        formRef.current.setFieldValue("city", response.data.localidade)
        formRef.current.setFieldValue("street", response.data.logradouro)
        formRef.current.setFieldValue("additional", response.data.complemento)
      } catch (error) {
        console.error(error)
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
        if (contact.cep) formRef.current.setFieldValue("cep", contact.cep)
        if (contact.neighborhood) formRef.current.setFieldValue("neighborhood", contact.neighborhood)
        if (contact.city) formRef.current.setFieldValue("city", contact.city)
        if (contact.street) formRef.current.setFieldValue("street", contact.street)
        if (contact.additional) formRef.current.setFieldValue("additional", contact.additional)
        if (contact.number) formRef.current.setFieldValue("number", contact.number)
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
            initialValues={{name: '', email: '', phone: '', cep: '', neighborhood: '', city: '', street: '', number: '', additional: ''}}
            validationSchema={createSchema}
            validateOnChange={false}
            validateOnBlur={false}
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
                  <label className='form-create__error-label'>{errors.name}</label>
                </div>

                <div className='form-create__input-container'>
                  <label className='form-create__label'>E-mail</label>
                  <Input placeholder='Digite o E-mail' value={values.email} onChange={handleChange('email')} />
                  <label className='form-create__error-label'>{errors.email}</label>
                </div>
                
                <div className='form-create__input-container'>
                  <label className='form-create__label'>Telefone</label>
                  <Input placeholder='Digite o telefone' mask='cell' value={values.phone} onChange={handleChange('phone')} />
                  <label className='form-create__error-label'>{errors.phone}</label>
                </div>

                <div className='form-create__input-container form-create__input-container--address'>
                  <label className='form-create__label'>Endereço</label>
                  <Input 
                    placeholder='Digite o cep' 
                    mask='cep' 
                    value={values.cep} 
                    onChange={handleChange('cep')} 
                    onBlur={(e) => getAddress(e.target.value)}
                  />
                  <label className='form-create__error-label'>{errors.cep}</label>

                  <Input placeholder='Digite o logradouro' value={values.city} onChange={handleChange('city')} />
                  <label className='form-create__error-label'>{errors.city}</label>

                  <Input placeholder='Digite o logradouro' value={values.street} onChange={handleChange('street')} />
                  <label className='form-create__error-label'>{errors.street}</label>

                  <Input placeholder='Digite o número' value={values.number} onChange={handleChange('number')} />
                  <label className='form-create__error-label'>{errors.number}</label>

                  <Input placeholder='Digite o complemento' value={values.additional} onChange={handleChange('additional')} />
                  <label className='form-create__error-label'>{errors.additional}</label>

                  <Input placeholder='Digite o bairro' value={values.neighborhood} onChange={handleChange('neighborhood')} />
                  <label className='form-create__error-label'>{errors.neighborhood}</label>
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