import React from 'react';
import styled from 'styled-components';
import { switchProp } from 'styled-tools';

import Colors from '../../consts/colors';

const SortIcon = ({ onClick, sortingOrder }) => (
  <SortIconContainer onClick={onClick}>
    <Icon>
    <IconBar size={sortingOrder === 'desc' ? 'big' : 'small'} />
    <IconBar size="medium" />
    <IconBar size={sortingOrder === 'desc' ? 'small' : 'big'} />
    </Icon>
  </SortIconContainer>
);

export default SortIcon;

const Icon = styled.div`
    position: absolute;
`;

const IconBar = styled.div`
  height: 1px;
  width: ${switchProp('size', {
    small: '40%',
    medium: '60%',
    big: '100%'
  })};
  background-color: ${Colors.themeColor};
`;

const SortIconContainer = styled.div`
  position: relative;
  width: 30px;
  height: 30px;

  &:hover {
    cursor: pointer;
  }
`;
