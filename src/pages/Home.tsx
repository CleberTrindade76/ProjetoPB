import React from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';


const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
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
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

const Home: React.FC = () => {

  const meses = [
    { value: '01', label: 'Janeiro' },
    { value: '02', label: 'Fevereiro' },
    { value: '03', label: 'Março' },
    { value: '04', label: 'Abril' },
    { value: '05', label: 'Maio' },
    { value: '06', label: 'Junho' },
    { value: '07', label: 'Julho' },
    { value: '08', label: 'Agosto' },
    { value: '09', label: 'Setembro' },
    { value: '10', label: 'Outubro' },
    { value: '11', label: 'Novembro' },
    { value: '12', label: 'Dezembro' }
  ];

  return (
    <Container>
      <BackgroundImage />
      <Content>
        <Card>
          <Input label="Qual seu nome?" type="text" placeholder="ex.: Guilherme Neves"/>
          <Input label="Qual seu telefone?" type="text" placeholder="ex.: (21) 98765-9087"/>
          <Input label="Qual seu saldo?" type="text" placeholder="ex.: R$ 5.000,00"/>
          <Select label="Qual é o seu mês de aniversário?" placeholder="Selecione..." options={meses} />
          <Button label="Ver proposta" />
        </Card>
      </Content>
    </Container>
  );
};


export default Home;
