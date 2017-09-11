import React from 'react';
import styled from 'styled-components';

import Colors from '../../consts/colors';

const SadFace = () => (
  <FaceContainer>
    <span>:-(</span>
  </FaceContainer>
);

export default SadFace;

const FaceContainer = styled.div`
  display: inline-block;
  height: 40px;
  width: 40px;
  border: solid 5px ${Colors.themeColor};
  text-align: center;
  transform: rotate(90deg);
`;
