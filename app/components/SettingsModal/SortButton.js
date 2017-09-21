import React, { Component } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import Colors from '../../consts/colors';

export default class SortButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  handleClick = () => {
    this.setState({
      isActive: true
    });
    this.props.onClick();
  };

  render() {
    return (
      <SortButtonContainer onClick={this.handleClick}>
        <SortIcon active={this.state.isActive} desc={this.props.desc} />
      </SortButtonContainer>
    );
  }
}

const SortButtonContainer = styled.div`
  display: inline-block;
  margin: 0 10px;

  &:hover {
    cursor: pointer;
  }
`;

const SortIcon = styled.div`
  border: solid ${ifProp('active', `${Colors.themeColor}`, 'black')};
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: ${ifProp('desc', 'rotate(45deg)', 'rotate(-135deg)')};
`;
