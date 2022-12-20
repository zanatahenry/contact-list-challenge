const DO_NOT_UPPERCASE = ['de', 'das', 'dos', 'do', 'da']

const cellMask = (value: string) => {
  return value
    .replace('+55', '')
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')
}

const phoneMask = (value: string, raw = false) => {
  if (value.length > (raw ? 10 : 14)) return cellMask(value)
  return value
    .replace('+55', '')
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')
}

const cepMask = (value: string) => {
  if (!value) return ''
  console.log(value)

  return String(value)
    .replace(/\D/g, '')
    .replace(/^(\d{5})(\d)/i, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
}

const mask = (value: string, mask?: string, raw?: boolean): string => {
  if (!mask || !value) return value
  if (value === null) return value
  switch (mask.toLowerCase()) {
    case 'phone':
      return phoneMask(value, raw)
    case 'cell':
      return cellMask(value)
    case 'cep':
      return cepMask(value)
    default:
      return value
  }
}

export default mask
