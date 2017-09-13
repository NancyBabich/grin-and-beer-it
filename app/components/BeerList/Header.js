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
  font-size: 2.5rem;
  text-transform: uppercase;
  color: ${Colors.darkGray};
  margin: 7rem 0 0 5rem;

  @media screen and (max-width: 995px) {
    margin: 7rem 0 0 0;
  }
`;

const ColoredText = styled.span`color: ${Colors.themeColor};`;
