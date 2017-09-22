import React, { Component } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import Colors from '../../consts/colors';

export default class SortButton extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isActive: false
    // };
  }

  handleClick = () => {
    // this.setState({
    //   isActive: true
    // });
    this.props.onClick();
  };

  render() {
    //const { isActive } = this.state;
    const { buttonCategory, category, desc, order } = this.props;
    const isSelectedOrderDesc = order === 'desc';
    const isActive =
      buttonCategory === category && desc === isSelectedOrderDesc;
    return (
      <SortButtonContainer onClick={this.handleClick}>
        <SortIcon active={isActive} desc={desc} />
      </SortButtonContainer>
    );
  }
}

const SortButtonContainer = styled.div`
  display: inline-block;
  margin: 0 5px;

  &:hover {
    cursor: pointer;
  }
`;

const SortIcon = styled.div`
  border: solid
    ${ifProp('active', `${Colors.themeColor}`, `${Colors.darkGray}`)};
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: ${ifProp(
    'desc',
    'rotate(45deg) translateY(-25%)',
    'rotate(-135deg) translateY(-25%)'
  )};

  &:hover {
    border: solid ${ifProp('active', `${Colors.themeColor}`, `${Colors.gray}`)};
    border-width: 0 3px 3px 0;
  }
`;
