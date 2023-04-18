import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { calcularSaqueFGTS } from '../utils/utils';
import { MyContext } from "../context/context";
import StyledTitle from '../components/StyledTitle';

const Card = styled.div`
  background-color: #fff;
  padding: 80px 60px;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 800px;
  margin-top: 30px;
  display: flex;

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
  align-items: baseline;
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
  font-size: 18px;
  font-weight: 700;
  margin: 0px;
  width: 100%;
`;

const ResultText = styled.p`
  font-size: 48px;
  font-weight: bold;
  margin: 0px;
  width: 100%;

  & span {
    color: darkslategray;
    font-size: 19px;
  }

  & .cents {
    color: #00A7CF;
  }
`;

const DisclaimerText = styled.p`
  font-size: 13px;
  text-align: initial;

  & b {
    color: #00A7CF;
  }
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

  const navigate = useNavigate()

  const { name, balance } = useContext(MyContext);

  const names = name.split(' ');

  const saqueAniversario = calcularSaqueFGTS(balance)

  console.log("aqui -->", saqueAniversario)

  useEffect(() => {
    if(name.length < 1 || balance.length < 1){
      navigate("/")
    }
  }, [balance.length, name.length, navigate]); 

  return (
    <Container>
      <BackgroundImage />
      <Content>
        <StyledTitle userName={names[0]}/>
        <ResultContainer>
          <Card>
            <LeftSide>
              <Title>Você pode receber até</Title>
              <ResultText><span>R$ </span>{`${saqueAniversario[0]}`}<span className='cents'>,{`${saqueAniversario[1]}`}</span></ResultText>
            </LeftSide>
            <RightSide>
              <DisclaimerText><b>Esta simulação traz valores aproximados.</b> Para calcular o valor exato,<b> entre em contato com o Smile .Co ou consulte seu saldo no app do FGTS.</b></DisclaimerText>
            </RightSide>
          </Card>
        </ResultContainer>
      </Content>
    </Container>
  );
};

export default Result;
