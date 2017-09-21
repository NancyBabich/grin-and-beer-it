import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import Colors from '../../consts/colors';
import SortButton from './SortButton';

const DisplaySettingsModal = ({
  applyDisplaySettings,
  category,
  changeDisplaySettings,
  order
}) => {
  const optionTypes = ['name', 'abv', 'ebc', 'ibu'];

  const options = optionTypes.map(option => (
    <Option key={option}>
      <span>{option}</span>
      <SortButton
        buttonCategory={option}
        category={category}
        desc={false}
        onClick={() => changeDisplaySettings(option, 'asc')}
        order={order}
      />
      <SortButton
        buttonCategory={option}
        category={category}
        desc
        onClick={() => changeDisplaySettings(option, 'desc')}
        order={order}
      />
    </Option>
  ));

  return (
    <ModalContainer>
      <Modal>
        <Heading>Sort beers by</Heading>
        {options}
        <StyledButton onClick={() => applyDisplaySettings(category, order)}>
          OK
        </StyledButton>
        <StyledButton onClick={() => applyDisplaySettings(null, null)}>
          Clear all
        </StyledButton>
      </Modal>
    </ModalContainer>
  );
};

export default DisplaySettingsModal;

const Heading = styled.div`text-transform: uppercase;`;

const Modal = styled.div`
  width: 80%;
  height: 80%;
  background-color: ${Colors.white};
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  //align-items: center;
  justify-content: center;
`;

const Option = styled.div`width: 100%;`;

const StyledButton = styled.div`
  width: 120px;
  height: 45px;
  background-color: ${Colors.themeColor};
  color: ${Colors.white};
  text-align: center;
  line-height: 45px;
  margin-bottom: 5px;

  &:hover {
    cursor: pointer;
  }
`;
