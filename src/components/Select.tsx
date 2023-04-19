import { FC, ChangeEvent, SelectHTMLAttributes } from 'react';
import styled from "styled-components";
import SnackBarError from './SnackBar';

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  placeholder?: string;
  options: Option[];
  value: string;
  error?: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectContainer = styled.div`
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

const SelectElement = styled.select`
  height: 49px;
  color: darkslategray;
  padding: 10px 15px;
  border-radius: 4px;
  border: solid 2px lightgray;
  outline: none;
  font-family: 'Montserrat';
  font-size: 16px;
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const OptionElement = styled.option``;

const Select: FC<SelectProps> = ({
  label,
  placeholder,
  options,
  value,
  error,
  onChange,
  ...props
}) => {
  const hasError = error && error.length > 1;

  return (
    <SelectContainer>
      {label && <Label>{label}</Label>}
      <SelectElement value={value} onChange={onChange} {...props}>
        {placeholder && (
          <OptionElement value="" disabled selected hidden>
            {placeholder}
          </OptionElement>
        )}
        {options.map(({ value, label }) => (
          <OptionElement key={value} value={value}>
            {label}
          </OptionElement>
        ))}
      </SelectElement>
      {hasError && <SnackBarError message={error} />}
    </SelectContainer>
  );
};
export default Select;
