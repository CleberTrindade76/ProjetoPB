import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: absolute;
  filter: brightness(40%);
`;

const BackgroundImage = styled.div`
  width: 70%;
  height: 100%;
  background-image: url("./images/hero.jpg");
  background-size: cover;
  background-position: center;
`;

const Divider = styled.div`
  width: 60%;
  height: 100%;
`;

const DottedBlueDiv = styled.div`
  position: absolute;
  right: 0;
  width: 58%;
  height: 100%;
  background-color: #035efc;
  background-image: radial-gradient(circle, #293447 1px, transparent 1px);
  background-size: 10px 10px;
  -webkit-clip-path: polygon(16% 0, 100% 0, 100% 100%, 0% 100%);
  clip-path: polygon(16% 0, 100% 0, 100% 100%, 0% 100%);

  @media (max-width: 768px) {
    width: 100%;
    clip-path: none;
  }
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
