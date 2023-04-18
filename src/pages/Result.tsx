import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { calcularSaqueFGTS } from '../utils/utils';
import { MyContext } from "../context/context";
import StyledTitle from '../components/StyledTitle';
import Card from '../components/Card';
import Container from '../components/Container';
import Content from '../components/Content';

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
  @media (max-width: 768px) {
    padding: 0px ;
    width: 100%;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  align-items: center;
  padding: 0px 30px;
  @media (max-width: 768px) {
    padding: 0px;
    width: 90%;
    margin: auto;
  }
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

  & span {
    font-weight: bold;
  }
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
      <Content>
        <StyledTitle userName={names[0]}/>
        <ResultContainer>
          <Card>
            <LeftSide>
              <Title>Você pode receber até</Title>
              <ResultText><span>R$ </span>{`${saqueAniversario[0]}`}<span className='cents'>,{`${saqueAniversario[1]}`}</span></ResultText>
            </LeftSide>
            <RightSide>
              <DisclaimerText><b>Esta simulação traz valores aproximados.</b><span> Para calcular o valor exato,</span><b> entre em contato com o Smile .Co ou consulte seu saldo no app do FGTS.</b></DisclaimerText>
            </RightSide>
          </Card>
        </ResultContainer>
      </Content>
    </Container>
  );
};

export default Result;
