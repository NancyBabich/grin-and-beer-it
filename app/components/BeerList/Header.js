import React from 'react';
import styled from 'styled-components';

import BurgerMenu from './BurgerMenu';
import Colors from '../../consts/colors';

const Header = ({ toggleSortingSettings }) => (
  <HeaderContainer>
    <NameContainer>
      <H1>
        <ColoredText>grin</ColoredText>and<ColoredText>beer</ColoredText>it
      </H1>
    </NameContainer>
    {/* <BurgerMenu /> */}
    <ColoredText onClick={toggleSortingSettings}>sort by name</ColoredText>
  </HeaderContainer>
);

export default Header;

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

const NameContainer = styled.div`display: inline-block;`;
