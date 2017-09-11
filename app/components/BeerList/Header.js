import React from 'react';
import styled from 'styled-components';

import Colors from '../../consts/colors';

const Header = () => (
  <H1>
    <ColoredText>beer</ColoredText>guru
  </H1>
);

export default Header;

const H1 = styled.h1`
  font-family: 'Open Sans';
  text-transform: uppercase;
  color: ${Colors.darkGray};
`;

const ColoredText = styled.span`color: ${Colors.themeColor};`;
