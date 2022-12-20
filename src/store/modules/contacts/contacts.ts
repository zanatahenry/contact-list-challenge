import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IContact } from '../../../components/List/listInterfaces'

export interface IContactReducer {
  recents: Array<IContact>
  totalContacts: number
  selectedContact?: IContact
  searchValue?: string
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
    setRecents: (state, { payload }: PayloadAction<IContact[]>) => {
      state.recents = payload
    },

    setTotalContacts: (state, { payload }: PayloadAction<{totalContacts: number}>) => {
      state.totalContacts = payload.totalContacts
    },

    setSelectedContact: (state, {payload}: PayloadAction<{selectedContact?: IContact}>) => {
      state.selectedContact = payload.selectedContact
    },

    setSearchValue: (state, {payload}: PayloadAction<{searchValue?: string}>) => {
      state.searchValue = payload.searchValue
    },
  }
})

export const {
  setRecents,
  setTotalContacts,
  setSelectedContact,
  setSearchValue
} = recentsSlice.actions

export default recentsSlice.reducer