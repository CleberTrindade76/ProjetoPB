import React from 'react';
import styled from 'styled-components';

// Define a imagem de fundo
const BackgroundImage = styled.div`
  background-image: url("./images/hero.jpg");
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 70%;
`;

// Define a div azul pontilhada
const Divider = styled.div`
  height: 100%;
  width: 60%;
`;

const DottedBlueDiv = styled.div`
  -webkit-clip-path: polygon(16% 0, 100% 0, 100% 100%, 0% 100%);
  clip-path: polygon(16% 0, 100% 0, 100% 100%, 0% 100%);
  background-color: #035efc;
  height: 100%;
  width: 58%;
  position: absolute;
  right: 0px;
  background-image: radial-gradient(circle, #293447 1px, transparent 1px);
  background-size: 10px 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: absolute;
  width: 100%;
  filter: brightness(40%);
`;

const Background: React.FC = () => {
  return (
    <Wrapper>
      <BackgroundImage />
      <Divider />
      <DottedBlueDiv />
    </Wrapper>
  );
};

export default Background;

