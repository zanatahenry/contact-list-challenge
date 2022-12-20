import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IContact } from '../../../components/List/listInterfaces'

export interface IContactReducer {
  recents: Array<IContact>
  totalContacts: number
  selectedContact?: IContact
}

const initialState: IContactReducer = {
  recents: [],
  totalContacts: 0,
  selectedContact: undefined
}

export const recentsSlice = createSlice({
  name: 'recents',
  initialState,
  reducers: {
    setRecents: (state, { payload }: PayloadAction<IContact>) => {
      state.recents = [ payload, ...state.recents ]
    },

    setTotalContacts: (state, { payload }: PayloadAction<{totalContacts: number}>) => {
      state.totalContacts = payload.totalContacts
    },

    setSelectedContact: (state, {payload}: PayloadAction<{selectedContact?: IContact}>) => {
      state.selectedContact = payload.selectedContact
    }
  }
})

export const {
  setRecents,
  setTotalContacts,
  setSelectedContact
} = recentsSlice.actions

export default recentsSlice.reducer