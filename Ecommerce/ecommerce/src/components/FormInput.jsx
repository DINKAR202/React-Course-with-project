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
        <Label htmlFor={id}></Label>: null}</div>
    </div>
  );
};
);

export default FormInput;
