import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loader = () => (
  <LoaderContainer>
    <Spinner />
  </LoaderContainer>
);

export default Loader;

const LoaderContainer = styled.div`
  width: 50px;
  height: 50px;
`;

const rotate = keyframes`
    from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 100%;
  height: 100%;
  border: 5px solid rgba(0, 0, 0, 0.25);
  border-top: 5px solid #fdc22a;
  border-radius: 50%;
  animation: ${rotate} 1s infinite ease;
`;
