import { configureStore } from '@reduxjs/toolkit'
import contacts from './modules/contacts/contacts'


export default configureStore({
  reducer: {
    contacts: contacts
  }
})