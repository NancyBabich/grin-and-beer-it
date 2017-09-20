import React from 'react';
import styled from 'styled-components';
import { switchProp } from 'styled-tools';

import Colors from '../../consts/colors';

const SortIcon = ({ onClick, sortingOrder }) => (
  <SortIconContainer onClick={onClick}>
    <IconBar size={sortingOrder === 'desc' ? 'big' : 'small'} />
    <IconBar size="medium" />
    <IconBar size={sortingOrder === 'desc' ? 'small' : 'big'} />
  </SortIconContainer>
);

export default SortIcon;

const IconBar = styled.div`
  height: 2px;
  width: ${switchProp('size', {
    small: '40%',
    medium: '60%',
    big: '100%'
  })};
  background-color: ${Colors.themeColor};
`;

const SortIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 25px;

  &:hover {
    cursor: pointer;
  }
`;
