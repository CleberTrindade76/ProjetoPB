import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`;

const ContainerImage = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  gap: 10;
`;

const LogoImage = styled.img`
  width: 30px;
  height: 30px;
  font-color: white;
`;

const LeftContent = styled.div`
  flex: 1;
`;

const RightContent = styled.div`
  flex: 1;
`;

const StyledText = styled.div`
  display: flex;
  max-width: 700px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  text-align: initial;


  & > h1 {
    font-size: 45px;
    font-style: italic;
    font-weight: bold;
    color: #fff;
    width: 70%
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }

  & > div > p {
    font-size: 16px;
    color: #fff;
    margin: 20px 0;
  }

  & > div > p.bold {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    & > h1 {
      font-size: 30px;
      margin: 20px 0;
    }

    & > div > p {
      font-size: 14px;
    }
  }
`;

const HeaderTitle: React.FC = () => {
  return (
    <Container>

      <LogoImage src='icons/logoIcon.svg' alt='' />
      <StyledText>
        <h1>Use uma grana que já é sua e saia do aperto.</h1>
        <div>
          <p className="bold">SAQUE ANIVERSÁRIO</p>
          <p>Insira seus dados e verifique o quanto você poderá receber!</p>
        </div>
      </StyledText>
    </Container>
  );
};


export default HeaderTitle;