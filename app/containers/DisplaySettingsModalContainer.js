import React, { Component } from 'react';
import { connect } from 'react-redux';

import DisplaySettingsModal from '../components/SettingsModal/DisplaySettingsModal';
import { toggleModalState } from '../actions/index';

class DisplaySettingsModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null,
      order: null
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.dispatch(toggleModalState(true));
  }

  componentWillUnmount() {
    this.props.dispatch(toggleModalState(false));
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

export default connect(state => {
  return {
    isModal: state.isModal
  };
})(DisplaySettingsModalContainer);
