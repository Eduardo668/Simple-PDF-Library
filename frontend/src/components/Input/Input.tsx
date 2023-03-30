import React from "react";
import { InputContainer } from "./style";

type Props = {
  label: string;
  type: string;
  placeholder?: string;
  margin?: string;
  width?: string;
  height?: string;
  font_label?: string;
  font_input?: string;
  padding_top?:string;
  file_type?:string;
};

function Input({
  label,
  type,
  placeholder,
  margin,
  width,
  height,
  font_label,
  font_input,
  padding_top,
  file_type
}: Props) {
  return (
    <InputContainer
      theme={{
        margin: margin,
        width: width,
        height: height,
        font_label: font_label,
        font_input: font_input,
        padding_top: padding_top
      }}
    >
      <label>{label}</label>
      <input placeholder={placeholder} type={type} accept={file_type} />
    </InputContainer>
  );
}

export default Input;
