import React, { DetailedHTMLProps } from "react";
import { Image } from './styles'

type Props = {
  src: string
  alt: string
}

function Avatar ({...rest}: Props) {
  return (
    <Image {...rest} />
  )
}

export default Avatar