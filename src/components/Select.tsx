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
`;

const SelectElement = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: none;
  outline: none;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
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
