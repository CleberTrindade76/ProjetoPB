import styled from "styled-components";

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const Input: React.FC<InputProps & React.InputHTMLAttributes<HTMLInputElement>> = ({ label, placeholder, value, onChange, ...props }) => {
  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <InputElement placeholder={placeholder} value={value} onChange={onChange} {...props} />
    </InputContainer>
  );
};

export default Input;
