import React, { InputHTMLAttributes, ChangeEvent } from "react";
import styled from "styled-components";
import SnackBarError from './SnackBar';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: -webkit-fill-available;
  padding: 0px 12px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
  text-align: initial;
  color: darkslategray;
`;

const InputElement = styled.input`
  height: 25px;
  padding: 10px 15px;
  color: darkslategray;
  border-radius: 4px;
  border: solid 2px lightgray;
  outline: none;
  font-size: 16px;
  font-family: 'Montserrat';
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const Input: React.FC<InputProps> = ({ label, placeholder, value, onChange, error, ...props }) => {
  const hasError = error && error.length > 1;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event);
  };

  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <InputElement placeholder={placeholder} value={value} onChange={handleChange} {...props} />
      {hasError && <SnackBarError message={error}/>}
    </InputContainer>
  );
};

export default Input;
