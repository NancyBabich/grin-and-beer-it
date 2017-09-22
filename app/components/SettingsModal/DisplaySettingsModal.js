import React from 'react';
import styled from 'styled-components';

import Colors from '../../consts/colors';
import SortingOptions from './SortingOptions';

const DisplaySettingsModal = ({
  applyDisplaySettings,
  category,
  changeDisplaySettings,
  order
}) => (
  <ModalContainer>
    <Modal>
      <Heading>Sort beers by</Heading>
      <SortingOptions
        category={category}
        changeDisplaySettings={changeDisplaySettings}
        order={order}
      />
      <StyledButton onClick={() => applyDisplaySettings(category, order)}>
        ok
      </StyledButton>
      <StyledButton onClick={() => applyDisplaySettings(null, null)}>
        clear all
      </StyledButton>
    </Modal>
  </ModalContainer>
);

export default DisplaySettingsModal;

const Heading = styled.div`text-transform: uppercase;`;

const Modal = styled.div`
  width: 50%;
  height: 65%;
  background-color: ${Colors.white};
  font-family: 'Nunito';
  color: ${Colors.darkGray};
  padding-top: 20px;
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const StyledButton = styled.div`
  width: 50%;
  height: 30px;
  background-color: ${Colors.themeColor};
  color: ${Colors.white};
  text-align: center;
  line-height: 30px;
  margin: 0 auto 5px auto;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    background-color: ${Colors.themeColorLight};
  }
`;
