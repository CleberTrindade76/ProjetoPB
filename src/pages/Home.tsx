import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import BackgroundImage from '../components/BackgroundImage';
import StyledTitle from '../components/StyledTitle';
import { MyContext } from "../context/context";
import { validateForm } from '../utils/utils';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  @media (max-width: 768px) {
    height: auto;
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

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const Home: React.FC = () => {
  const navigate = useNavigate()

  const { name, setName, phone, setPhone, balance, setBalance, birthday, setBirthday } = useContext(MyContext);

  const [errorName, setErrorName] = useState('');
  const [errorPhone, setErrorPhone] = useState('');
  const [errorBalance, setErrorBalance] = useState('');
  const [errorBirthday, setErrorBirthday] = useState('');

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

  const sendForm = async () => {
    const validObj = validateForm(name, phone, balance, birthday)
    if((await validObj).valid){
      navigate("/myFGTS")
    }else{
      switch((await validObj).error) {
        case 0:
          setErrorName("Insira seu nome.")
          break;
        case 1:
          setErrorName("")
          setErrorPhone("Telefone inválido")
          break;
        case 2:
          setErrorName("")
          setErrorPhone("")
          setErrorBalance("Valor inválido")
          break;
        case 3:
          setErrorName("")
          setErrorPhone("")
          setErrorBalance("")
          setErrorBirthday("Mês inválido")
          break;
        default:
          alert('Erro desconhecido.');
      }
    }
  }

  const meses = [
    { value: '1', label: 'Janeiro' },
    { value: '2', label: 'Fevereiro' },
    { value: '3', label: 'Março' },
    { value: '4', label: 'Abril' },
    { value: '5', label: 'Maio' },
    { value: '6', label: 'Junho' },
    { value: '7', label: 'Julho' },
    { value: '8', label: 'Agosto' },
    { value: '9', label: 'Setembro' },
    { value: '10', label: 'Outubro' },
    { value: '11', label: 'Novembro' },
    { value: '12', label: 'Dezembro' }
  ];

  return (
    <Wrapper>
      <BackgroundImage imageUrl='../../public/images/hero.jpg' />
      <Container>
        <Content>
          <StyledTitle/>
          <Card>
            <Row>
              <Input error={errorName} value={name} onChange={handleInputChangeName} label="Qual seu nome?" type="text" placeholder="ex.: Guilherme Neves"/>
              <Input error={errorPhone} value={phone} onChange={handleInputChangePhone} label="Qual seu telefone?" type="text" placeholder="ex.: (21) 98765-9087"/>
            </Row>
            <Row>
              <Input error={errorBalance} value={balance} onChange={handleInputChangeBalance} label="Qual seu saldo?" type="text" placeholder="ex.: R$ 5.000,00"/>
              <Select error={errorBirthday} value={birthday} onChange={handleInputChangeBirthday} label="Qual é o seu mês de aniversário?" placeholder="Selecione..." options={meses} />
            </Row>
            <Button label="Ver Proposta" onClick={sendForm} />
          </Card>
        </Content>
      </Container>
    </Wrapper>
  );
};


export default Home;
