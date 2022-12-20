import React, { useEffect, useState } from 'react'
import { ContactList } from './styles'
import Contact from '../Contact/Contact'
import ContactsRepository from '../../repositories/ContactsRepository'
import { IContact } from './listInterfaces'
import { setTotalContacts } from '../../store/modules/contacts/contacts'
import { useDispatch } from 'react-redux'
import swal from '../../utils/swal'

type Props = {
  onClick(contact: IContact): void
}

function List ({ onClick }: Props) {
  const [ contacts, setContacts ] = useState<IContact[]>([])
  const dispatch = useDispatch()

  async function getContacts () {
    try {
      const response = await ContactsRepository.getAll()
      const list = response.data
      dispatch(setTotalContacts({ totalContacts: list.length }))
      setContacts(list)
    } catch (err) {
      console.log(err)
    }
  }

  async function deleteContact (id: number) {
    swal.confirmNegate({
      icon: 'question',
      text: 'O contato será excluido.',
      title: 'Deseja excluir esse contato ?',
      confirm: async () => {
        try {
          await ContactsRepository.delete(id)

          swal.basic({
            icon: 'success',
            title: 'Sucesso!',
            text: 'Contato excluido com sucesso!'
          })
        } catch (err) {
          swal.basic({
            title: 'Atenção',
            text: 'Não foi possível excluir esse contato',
            icon: 'warning'
          })
        } finally {
          getContacts()
        }
      }
    })
  }

  useEffect(() => {
    getContacts()
  }, [])

  return (
    <ContactList className='contact-list'>
      <p className='contact-list__title'>Seus contatos</p>

      {contacts.length < 1 && (
        <div className='contact-list__empty'>
          <p>Nenhum contato encontrado!</p>
        </div>
      )}

      {Array.isArray(contacts) && contacts.map(contact => (
        <Contact 
          key={contact.id}
          onClick={() => onClick(contact)}
          onDelete={() => deleteContact(contact.id)}
          cellphone={contact.phone}
          name={contact.name}
          image={contact.image}
        />
      ))}
    </ContactList>
  )
}

export default List