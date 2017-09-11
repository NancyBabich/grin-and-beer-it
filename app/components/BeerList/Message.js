import React from 'react';
import styled from 'styled-components';

import Colors from '../../consts/colors';
import SadFace from './SadFace';

const Message = ({ text }) => (
  <MessageContainer>
    {text} <SadFace />
  </MessageContainer>
);

export default Message;

const MessageContainer = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 1.5rem;
  color: ${Colors.themeColor};
  text-transform: uppercase;
`;
