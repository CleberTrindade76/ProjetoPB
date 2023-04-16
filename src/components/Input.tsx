import styled from "styled-components";

interface InputProps {
  label?: string;
  placeholder?: string;
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
`;

const InputElement = styled.input`
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

const Input: React.FC<InputProps & React.InputHTMLAttributes<HTMLInputElement>> = ({ label, placeholder, ...props }) => {
  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <InputElement placeholder={placeholder} {...props} />
    </InputContainer>
  );
};

export default Input;
