import React from 'react';
require('../../sass/bank-selector.scss');

import ClickButton from './ClickButton';

class BankSelector extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="bank-selector">
        <div className="title">
          <span className="separator"></span>
          <p>BANK</p>
        </div>
        <ClickButton
          title="DOWN"
          icon="fa fa-caret-down"
          active={false}
          showIndicator={false}
          onClick={this.props.decrement} />
        <ClickButton
          title="UP"
          icon="fa fa-caret-up"
          active={false}
          showIndicator={false}
          onClick={this.props.increment} />
      </div>
    );
  }
}

export default BankSelector;
