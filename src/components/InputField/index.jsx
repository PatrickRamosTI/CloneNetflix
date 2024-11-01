// InputField/index.jsx
import React from "react";
import { InputStyle } from "./style";

export const InputField = ({ placeholder, type, value, onChange }) => {
  return (
    <InputStyle
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)} // Passa o valor para o manipulador
    />
  );
};
