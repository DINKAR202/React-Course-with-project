import React, { forwardRef } from "react";
import {useFormStatus} from "react-dom"
import { Label } from "./ui/label";

const FormInput = forwardRef(({
  label,
  id,
  type,
  defaultValue = "",
  placeholder,
  required,
  disabled,
  className,
  onBlur,
},
ref
) => {
    const {pending} = useFormStatus();
  return (
    <div>
      <div>{
        label ? 
        <Label htmlFor={id} className="text-xs font-semibold text-neutral-700">{label}</Label>: null}</div>
    </div>
  ),
},
);

export default FormInput;
