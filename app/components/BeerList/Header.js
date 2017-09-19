import React from 'react';
import styled from 'styled-components';

import Colors from '../../consts/colors';

const Header = () => (
  <HeaderContainer>
    <NameContainer>
      <H1>
        <ColoredText>beer</ColoredText>guru
      </H1>
    </NameContainer>
    <BurgerMenu>BM</BurgerMenu>
  </HeaderContainer>
);

export default Header;

const BurgerMenu = styled.div`
  display: inline-block;
  float: right;
`;

const ColoredText = styled.span`color: ${Colors.themeColor};`;

const H1 = styled.h1`
  font-family: 'Open Sans';
  font-size: 2.5rem;
  text-transform: uppercase;
  color: ${Colors.darkGray};
`;

const HeaderContainer = styled.div`
  width: 100%;
  padding: 7rem 0 0 5rem;
  
  @media screen and (max-width: 995px) {
    padding: 7rem 0 0 0;
  }
`;

const NameContainer = styled.div`
  display: inline-block;
`;