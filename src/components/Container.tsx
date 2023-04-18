import styled from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
}

const ContainerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
