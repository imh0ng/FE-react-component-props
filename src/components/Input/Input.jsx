import { forwardRef } from "react";
import Label from "../Label/Label"
import SupportingText from "../SupportingText/SupportingText";
import "./Input.css"

const Input = ({ label, supportingText, isError, placeholder }, ref) => {
  return (
    <div>
      <Label htmlFor={label}>{label}</Label>
      <input ref={ref} className={isError ? 'input error' : 'input'} placeholder={placeholder} />
      <SupportingText isError={isError}>{supportingText}</SupportingText>
    </div>
  );
};

export default forwardRef(Input);