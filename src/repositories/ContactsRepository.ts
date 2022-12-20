
import { Repository } from './Repository'
import api from '../services/api'
import { ISendContacts } from 'views/CreateContact/createContactInterfaces'

class ContactsRepository extends Repository {}
export default new ContactsRepository({ api, path: '/contacts' })
