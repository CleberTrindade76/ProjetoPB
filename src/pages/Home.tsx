import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import StyledTitle from '../components/StyledTitle';
import { MyContext } from "../context/context";

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

const Row = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    place-content: space-between;
    margin-top: 16px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const Home: React.FC = () => {

  const { name, setName, phone, setPhone, balance, setBalance, birthday, setBirthday } = useContext(MyContext);

  const navigate = useNavigate()

  const handleInputChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleInputChangeBirthday = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBirthday(event.target.value);
  };

  const handleInputChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const digits = event.target.value.replace(/\D/g, '');
    const cell = digits.length === 11;
    const formattedValue = cell
      ? digits.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
      : digits.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    if(digits.length < 12){
      setPhone(formattedValue);
    }
  };

  const handleInputChangeBalance = (event: React.ChangeEvent<HTMLInputElement>) => {
    const digits = event.target.value.replace(/\D/g, '');
    const number = Number(digits) / 100;
    const formattedValue = number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    setBalance(formattedValue);
  };

  const sendForm = () => {
    navigate("/myFGTS")
  }

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
        <StyledTitle/>
        <Card>
          <Row>
            <Input value={name} onChange={handleInputChangeName} label="Qual seu nome?" type="text" placeholder="ex.: Guilherme Neves"/>
            <Input value={phone} onChange={handleInputChangePhone} label="Qual seu telefone?" type="text" placeholder="ex.: (21) 98765-9087"/>
          </Row>
          <Row>
            <Input value={balance} onChange={handleInputChangeBalance} label="Qual seu saldo?" type="text" placeholder="ex.: R$ 5.000,00"/>
            <Select value={birthday} onChange={handleInputChangeBirthday} label="Qual é o seu mês de aniversário?" placeholder="Selecione..." options={meses} />
          </Row>
          <Button label="Ver Proposta" onClick={sendForm} />
        </Card>
      </Content>
    </Container>
  );
};


export default Home;
