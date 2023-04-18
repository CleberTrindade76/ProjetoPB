import React from 'react';
import styled from 'styled-components';
import { RiMoneyDollarBoxLine  } from 'react-icons/ri';

interface StyledTitleProps {
  userName?: string
}

const Container = styled.div`
  max-width: 720px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Content = styled.div`
  max-width: 720px;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContainerImage = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  text-align: left;
`;

const LogoImage = styled.div`
  svg {
    fill: #fff;
    width: 30px;
    height: 30px;
    padding: 0px;
    margin-top: 10px;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  text-align: left;
  min-height: 100px;
  display: flex;
  justify-content: flex-start; 
  flex-direction: column-reverse;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    max-width: none;
    width: 100%;
  }
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start; 
  flex-direction: column-reverse;

  @media (max-width: 768px) {
    max-width: none;
    width: 100%;
    margin-top: 10px;

    & > * {
      margin-top: 10px;
    }
  }
`;

const StyledText = styled.div`
  display: flex;
  max-width: 700px;
  align-items: center;
  text-align: initial;
  padding: 0px;

  & > span {
    font-size: 45px;
    font-style: italic;
    font-weight: bold;
    text-align: left;
    color: #fff;
    width: 70%
    padding: 0px
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }

  & > p {
    font-size: 16px;
    color: #fff;
    font-weight: bold;
  }

  & > div > p.bold {
    font-weight: bold;
  }
`;

const BoxRightInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  gap: 10px;
  text-align: left;
  padding-left: 10px;
`;

const StyledRightTextInfo = styled.p`
  font-size: 16px;
  color: #fff;
  line-height: 1;
`;

const VerticalLine = styled.div`
  width: 1px;
  border: solid 1px #13547E;
  height: 30px;
  background-color: #13547E;
  margin-left: 10px;
  margin-top: 15px;
`;

const StyledTitle: React.FC<StyledTitleProps> = ({
  userName
}) => {
  return (
    <Container>
      <ContainerImage>
        <LogoImage>
          <svg fill='rgb(19, 84, 126);'>
            <path d="M16.632,14.225a1,1,0,0,1,.143,1.407,6,6,0,0,1-9.55,0,1,1,0,0,1,1.55-1.264,4,4,0,0,0,6.45,0A1,1,0,0,1,16.632,14.225ZM23,12A11,11,0,1,1,12,1,11.013,11.013,0,0,1,23,12Zm-2,0a9,9,0,1,0-9,9A9.01,9.01,0,0,0,21,12Z"/>
          </svg>
        </LogoImage>
        <StyledText>
          <p>SMILE Co.</p>
        </StyledText>
      </ContainerImage>
      <Content>
        <LeftContent>
          <StyledText>
            {userName ? (
              <span>{`Olá, ${userName}!`}</span>
            ) : (
              <span>Use uma grana que já é sua e saia do aperto.</span>
            )}
          </StyledText>
        </LeftContent>
        <RightContent>
          <BoxRightInfo>
            <VerticalLine />
            <StyledRightTextInfo><b>Insira seus dados</b> e verifique o quanto você poderá receber!</StyledRightTextInfo>
          </BoxRightInfo>
          <BoxRightInfo>
            <RiMoneyDollarBoxLine size={30} style={{ marginTop: '5px', color: '#13547E' }} />
            <StyledRightTextInfo><b>SAQUE ANIVERSÁRIO</b></StyledRightTextInfo>
          </BoxRightInfo>
        </RightContent>
      </Content>
    </Container>
  );
};

export default StyledTitle;