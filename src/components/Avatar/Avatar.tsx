import React, { DetailedHTMLProps } from "react";

type Props = {
  src: string
  alt: string
}

function Avatar ({...rest}: DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) {
  return (
    <img className="contact-avatar" {...rest} />
  )
}

export default Avatar