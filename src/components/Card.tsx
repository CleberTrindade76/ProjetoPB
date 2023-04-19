import styled from 'styled-components';

interface CardProps {
  children: React.ReactNode;
}

const CardWrapper = styled.div`
  background-color: #fff;
  padding: 40px 80px;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 600px;
  margin-top: 30px;

  @media (max-width: 768px) {
    margin: 10px;
    padding-right: 0px;
    padding-left: 0px;
    padding-top: 20px;
    padding-bottom: 20px;
    justify-content: center;
    flex-direction: column;
    display: flex;
    width: 90%;
  }
`;

const Card: React.FC<CardProps> = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default Card;