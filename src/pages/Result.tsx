import React, { useContext } from 'react';
import styled from 'styled-components';
import { calcularSaqueFGTS } from '../utils/utils';
import { MyContext } from "../context/context";
import StyledTitle from '../components/StyledTitle';

const Card = styled.div`
  background-color: #fff;
  padding: 40px 80px;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 600px;
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-top: 10px;
    padding-right: 0px;
    padding-left: 0px;
    padding-top: 20px;
    padding-bottom: 20px;
    justify-content: center;
    flex-direction: column;
    display: flex;
  }
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  color: #00A7CF;
  width: 50%;
  align-items: center;
  padding: 0px 30px;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  align-items: center;
  padding: 0px 30px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 0px;
`;

const ResultText = styled.p`
  font-size: 48px;
  font-weight: bold;
  margin: 0px;
`;

const DisclaimerText = styled.p`
  font-size: 13px;
  text-align: initial;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const BackgroundImage = styled.div`
  background-image:  url('../../public/images/hero.jpg') no-repeat center center fixed;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: skewX(-70deg);
  transform-origin: top left;
  z-index: -1;

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    transform: none;
  }

  &::after {
    content: '';
    background-image: radial-gradient(circle, #2c2c54 10%, transparent 0);
    background-size: 20px 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Result: React.FC = () => {
  const { name, balance, birthday } = useContext(MyContext);
  const saqueAniversario = calcularSaqueFGTS(balance)

  console.log("AAAAAUUU --> ", saqueAniversario, balance )

  return (
    <Container>
      <BackgroundImage />
      <Content>
        <StyledTitle/>
        <ResultContainer>
          <Card>
            <LeftSide>
              <Title>Você pode receber até</Title>
              <ResultText>R$ {`${saqueAniversario}`}</ResultText>
            </LeftSide>
            <RightSide>
              <DisclaimerText>Esta simulação traz valores aproximados. Para calcular o valor exato, entre em contato com o Smile .Co ou consulte seu saldo no app do FGTS.</DisclaimerText>
            </RightSide>
          </Card>
        </ResultContainer>
      </Content>
    </Container>
  );
};

export default Result;
