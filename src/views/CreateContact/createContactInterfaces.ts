export type CreateContactProps = {
  onCancel(): void
  onSuccess(): void
}

export interface ISendContacts {
  name: string;
  email: string;
  phone: string;
  cep: string;
  neighborhood: string;
  city: string;
  street: string;
  number: string;
  additional: string;
  image: string
}