import styled from 'styled-components';

interface ContentProps {
  children: React.ReactNode;
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Content: React.FC<ContentProps> = ({ children }) => {
  return <ContentWrapper>{children}</ContentWrapper>;
};

export default Content;
