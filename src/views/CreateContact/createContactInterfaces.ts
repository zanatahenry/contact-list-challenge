export type CreateContactProps = {
  onCancel(): void
}

export interface ISendContacts {
  name: string
  email: string
  phone: string
  address: string
  image: string
}