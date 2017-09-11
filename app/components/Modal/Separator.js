import React from 'react';
import styled from 'styled-components';

import Colors from '../../consts/colors';

const Separator = () => <StyledDiv />;

export default Separator;

const StyledDiv = styled.div`
  width: 50px;
  height: 5px;
  background-color: ${Colors.themeColor};
`;
