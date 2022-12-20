
import { Repository } from './Repository'
import api from '../services/api'
import { IContact } from '../components/List/listInterfaces'

class ContactsRepository extends Repository<IContact> {}
export default new ContactsRepository({ api, path: '/contacts' })
