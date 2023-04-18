import React from 'react';
import styled from 'styled-components';

interface Props {
  imageUrl: string;
}

const BackgroundImage: React.FC<Props> = ({ imageUrl }) => {
  return (
    <BackgroundImageWrapper imageUrl={imageUrl}>
      <BlueDottedBackground />
    </BackgroundImageWrapper>
  );
}

const BackgroundImageWrapper = styled.div<{ imageUrl: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-image: url(${props => props.imageUrl});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const BlueDottedBackground = styled.div`
  width: 40%;
  height: 100%;
  background-image: radial-gradient(#FFFFFF 10%, rgba(255, 255, 255, 0) 11%), radial-gradient(#FFFFFF 10%, rgba(255, 255, 255, 0) 11%);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
`;

export default BackgroundImage;
