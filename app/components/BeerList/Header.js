import React from 'react';
import styled from 'styled-components';

import SortIcon from './SortIcon';
import Colors from '../../consts/colors';

const Header = ({
  sortingCategory,
  sortingOrder,
  toggleSettingsModalState
}) => (
  <HeaderContainer>
    <H1>
      <ColoredText>grin</ColoredText>and<ColoredText>beer</ColoredText>it
    </H1>
    <SortIcon onClick={toggleSettingsModalState} sortingOrder={sortingOrder} />
    {sortingCategory && sortingCategory}
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
