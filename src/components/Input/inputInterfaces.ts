import { DetailedHTMLProps } from "react"

export interface IInputProps extends DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  raw?: boolean
  mask?: string
  value?: string | number
  error?: string
  min?: number
}
