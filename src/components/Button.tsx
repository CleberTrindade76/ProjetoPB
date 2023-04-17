import styled from "styled-components";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const ButtonElement = styled.button`
  background-color: #f5c72f;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: bold;
  padding: 16px 40px;
  margin-top: 32px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #e58300;
  }
`;

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <ButtonElement onClick={onClick}>
      {label}
    </ButtonElement>
  );
};

export default Button;
