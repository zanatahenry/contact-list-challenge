import React from "react";
import masks from "../../utils/masks";
import { IInputProps } from "./inputInterfaces";

function Input ({ mask, value, min, raw = false, ...rest }: IInputProps) {
  return (
    <input
      className="input" 
      onChange={(e) => masks(e.target.value, mask)}
      value={masks(value as string, mask, raw)}
      min={min}
      {...rest}
    />
  )
}

export default Input