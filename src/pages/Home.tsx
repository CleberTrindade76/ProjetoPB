import React, { useContext } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  `;

const Card = styled.div`
  background-color: #fff;
  padding: 60px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 700px;
  margin-top: 30px;
  `;

const Row = styled.div`
  display: flex;
  place-content: space-between;
  margin-top: 16px;
  `;

const StyledText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  & > h1 {
    font-size: 40px;
    font-style: italic;
    font-weight: bold;
    color: #fff;
    margin-right: 20px;
    text-align: center;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  & > div > p {
    font-size: 16px;
    color: #fff;
    margin: 0;
  }

  & > div > p.bold {
    font-weight: bold;
  }
`;

const Home: React.FC = () => {

  const { name, setName, phone, setPhone, balance, setBalance, birthday, setBirthday } = useContext(MyContext);

  const handleInputChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleInputChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleInputChangeBalance = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBalance(event.target.value);
  };

  const handleInputChangeBirthday = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBirthday(event.target.value);
  };

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
      <StyledText>
        <h1>Use uma grana que já é sua e saia do aperto.</h1>
        <div>
          <p>SAQUE ANIVERSÁRIO</p>
          <p className="bold">Insira seus dados e verifique o quanto você poderá receber!</p>
        </div>
      </StyledText>
        <Card>
          <Row>
            <Input value={name} onChange={handleInputChangeName} label="Qual seu nome?" type="text" placeholder="ex.: Guilherme Neves"/>
            <Input value={phone} onChange={handleInputChangePhone} label="Qual seu telefone?" type="text" placeholder="ex.: (21) 98765-9087"/>
          </Row>
          <Row>
            <Input value={balance} onChange={handleInputChangeBalance} label="Qual seu saldo?" type="text" placeholder="ex.: R$ 5.000,00"/>
            <Select value={birthday} onChange={handleInputChangeBirthday} label="Qual é o seu mês de aniversário?" placeholder="Selecione..." options={meses} />
          </Row>
          <Button label="Ver proposta" />
        </Card>
      </Content>
    </Container>
  );
};


export default Home;
