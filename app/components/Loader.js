import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ifProp } from 'styled-tools';

import Colors from '../consts/colors';

const Loader = ({ initial }) => (
  <LoaderContainer initial={initial}>
    <Spinner />
  </LoaderContainer>
);

export default Loader;

const LoaderContainer = styled.div`
  position: ${ifProp('initial', 'static', 'absolute')};
  bottom: ${ifProp('initial', 'initial', '10px')};
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
  width: 50px;
  height: 50px;
  border: 5px solid rgba(0, 0, 0, 0.25);
  border-top: 5px solid ${Colors.themeColor};
  border-radius: 50%;
  animation: ${rotate} 0.75s infinite ease;
`;
