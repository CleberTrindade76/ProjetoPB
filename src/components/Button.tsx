import styled from "styled-components";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const ButtonElement = styled.button`
  background-color: #ff9500;
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
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
