import React, { Component } from 'react';

import DisplaySettingsModal from '../components/SettingsModal/DisplaySettingsModal';

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
    const { applyDisplaySettings } = this.props;
    const { category, order } = this.state;

    return (
      <DisplaySettingsModal
        applyDisplaySettings={applyDisplaySettings}
        category={category}
        changeDisplaySettings={this.changeDisplaySettings}
        order={order}
      />
    );
  }
}
