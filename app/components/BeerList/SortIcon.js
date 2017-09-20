import React from 'react';
import styled from 'styled-components';
import { switchProp } from 'styled-tools';

import Colors from '../../consts/colors';

const SortIcon = ({ onClick }) => (
  <SortIconContainer onClick={onClick}>
    <IconBar position="top" />
    <IconBar position="middle" />
    <IconBar position="bottom" />
  </SortIconContainer>
);

export default SortIcon;

const IconBar = styled.div`
  height: 2px;
  width: ${switchProp('position', {
    top: '40%',
    middle: '60%',
    bottom: '100%'
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
