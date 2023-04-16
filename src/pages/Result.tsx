import React, { useContext } from 'react';
import styled from 'styled-components';
import { calculateBirthdayWithdrawal } from '../utils/utils';
import { MyContext } from "../context/context";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const BackgroundImage = styled.div`
  background-image:  url('../../public/images/hero.jpg') no-repeat center center fixed;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.5;
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: skewX(-70deg);
  transform-origin: top left;
  z-index: -1;

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
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 80px 60px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
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

const Result: React.FC = () => {
  const { name, balance, birthday } = useContext(MyContext);
  const saqueAniversario = calculateBirthdayWithdrawal(balance, birthday)

  return (
    <Container>
      <BackgroundImage />
      <Content>
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
