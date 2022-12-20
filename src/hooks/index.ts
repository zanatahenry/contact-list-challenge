import { useSelector } from 'react-redux'
import IRootState from '../interfaces/IRootState'

const useContacts = () => {
  const contacts = useSelector((state: IRootState) => state.contacts)
  return contacts
}


export { useContacts }