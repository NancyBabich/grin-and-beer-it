import React from 'react';
import styled from 'styled-components';

import Colors from '../../consts/colors';
import SortButton from './SortButton';

const SortingOptions = ({ category, changeDisplaySettings, order }) => {
  const optionTypes = ['name', 'abv', 'ebc', 'ibu'];

  return (
    <OptionsContainer>
      {optionTypes.map(option => (
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
      ))}
    </OptionsContainer>
  );
};

export default SortingOptions;

const Option = styled.div`
  width: 50%;
  height: 30px;
  line-height: 30px;
  margin: 10px auto;
  border: solid 1px ${Colors.themeColor};
`;

const OptionsContainer = styled.div`width: 100%;`;
