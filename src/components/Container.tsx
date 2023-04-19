import styled from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
