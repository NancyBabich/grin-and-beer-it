import React, { Component } from 'react';
import styled from 'styled-components';

export default class DisplaySettingsModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null,
      order: null
    };
  }

  changeDisplaySettings = (category, order) => {
    this.setState({
      category,
      order
    });
  };

  render() {
    const optionTypes = ['name', 'abv', 'ebc', 'ibu'];

    const options = optionTypes.map(option => (
      <div key={option}>
        <div>{option}</div>
        <div onClick={() => this.changeDisplaySettings(option, 'asc')}>asc</div>
        <div onClick={() => this.changeDisplaySettings(option, 'desc')}>
          desc
        </div>
      </div>
    ));

    const { applyDisplaySettings } = this.props;
    const { category, order } = this.state;

    return (
      <ModalContainer>
        {options}
        <ApplySettingsButton
          onClick={() => applyDisplaySettings(category, order)}
        >
          OK
        </ApplySettingsButton>
        <ClearAllButton onClick={() => applyDisplaySettings(null, null)}>
          Clear all
        </ClearAllButton>
      </ModalContainer>
    );
  }
}

const ApplySettingsButton = styled.div`
  width: 120px;
  height: 45px;
`;

const ClearAllButton = styled.div`
  width: 120px;
  height: 45px;
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;
