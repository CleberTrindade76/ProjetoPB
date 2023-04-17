import styled from "styled-components";

interface SelectProps {
  label?: string;
  placeholder?: string;
  options: { value: string; label: string; }[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
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
  font-size: 16px;
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const OptionElement = styled.option``;

const Select: React.FC<SelectProps & React.SelectHTMLAttributes<HTMLSelectElement>> = ({ label, placeholder, options, value, onChange, ...props }) => {
  return (
    <SelectContainer>
      {label && <Label>{label}</Label>}
      <SelectElement value={value} onChange={onChange} {...props}>
        {placeholder && <OptionElement value="" disabled selected hidden>{placeholder}</OptionElement>}
        {options.map(option => (
          <OptionElement value={option.value}>{option.label}</OptionElement>
        ))}
      </SelectElement>
    </SelectContainer>
  );
};

export default Select;
