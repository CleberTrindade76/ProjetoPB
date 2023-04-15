import React from 'react';
import styled from 'styled-components';

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
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 12px;

  label {
    margin-bottom: 4px;
  }

  input,
  select {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    font-size: 16px;
    outline: none;

    &:focus {
      border-color: #7159c1;
    }
  }
`;


const Button = styled.button`
  height: 40px;
  background-color: #0066cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  
  &:hover {
    background-color: #0059b3;
  }
`;

const Home: React.FC = () => {
  return (
    <Container>
      <BackgroundImage />
      <Content>
        <Card>
          <InputWrapper>
            <label>Qual o seu nome?</label>
            <input type="text" />
          </InputWrapper>
          <InputWrapper>
            <label>Qual o seu telefone?</label>
            <input type="text" />
          </InputWrapper>
          <InputWrapper>
            <label>Qual o seu saldo?</label>
            <input type="text" />
          </InputWrapper>
          <InputWrapper>
            <label>Qual o mês do seu aniversário?</label>
            <select>
              <option>Janeiro</option>
              <option>Fevereiro</option>
              <option>Março</option>
              <option>Abril</option>
              <option>Maio</option>
              <option>Junho</option>
              <option>Julho</option>
              <option>Agosto</option>
              <option>Setembro</option>
              <option>Outubro</option>
              <option>Novembro</option>
              <option>Dezembro</option>
            </select>
          </InputWrapper>
          <Button>Ver proposta</Button>
        </Card>
      </Content>
    </Container>
  );
};


export default Home;
